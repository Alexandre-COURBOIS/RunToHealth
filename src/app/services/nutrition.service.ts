import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ModalController} from "@ionic/angular";
import {Storage} from "@ionic/storage-angular";
import {strict} from "assert";

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  isItemAvailable = false;
  items: Object = [];
  itemSelected: String = "";
  itemSelectedObj: any = null;
  ignoreNextChange = false;

  constructor(private httpClient: HttpClient, private modalController: ModalController, private storage: Storage) { }

  search(aliment: String) {
    if (this.ignoreNextChange) {
      this.ignoreNextChange = false;
      return;
    }
    return this.httpClient.post("https://trackapi.nutritionix.com/v2/natural/nutrients", {
        query: aliment,
      },
      {
        headers: {
          'x-app-id': environment.NUTRITIONIX_APP_ID,
          'x-app-key': environment.NUTRITIONIX_KEYS_ID
        }
      }).subscribe(value => {
      console.log(value)
    });
  }

  autocomplete(food: String) {
    if (this.ignoreNextChange) {
      this.ignoreNextChange = false;
      return;
    }

    if (food !== '') {
      this.isItemAvailable = true;
      return this.httpClient.get("https://trackapi.nutritionix.com/v2/search/instant?query=" + food, {
        headers: {
          'x-app-id': environment.NUTRITIONIX_APP_ID,
          'x-app-key': environment.NUTRITIONIX_KEYS_ID
        }
      }).subscribe(value => {

        // @ts-ignore
        this.items = value.branded;
      })
    } else {
      this.isItemAvailable = false;
    }
  }

  selectItem(selected: any) {
    console.log(selected)
    this.isItemAvailable = false;
    this.itemSelected = selected.food_name;
    this.itemSelectedObj = selected;
    this.ignoreNextChange = true;
  }

  dismiss(storageKey: String = '') {
    // using the injected ModalController this page
    if (this.itemSelectedObj && storageKey !== '') {
      // @ts-ignore
      this.storage.set(storageKey, this.itemSelectedObj)
    }

    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
