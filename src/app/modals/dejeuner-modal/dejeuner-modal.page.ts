import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Storage} from "@ionic/storage-angular";

@Component({
  selector: 'app-dejeuner-modal',
  templateUrl: './dejeuner-modal.page.html',
  styleUrls: ['./dejeuner-modal.page.scss'],
})
export class DejeunerModalPage implements OnInit {
  isItemAvailable = false;
  items: Object = [];
  itemSelected: String;
  itemSelectedObj: any;
  ignoreNextChange = false;

  constructor(private modalController: ModalController, private httpClient: HttpClient, private storage: Storage) {
  }

  ngOnInit() {
    this.storage.create();
  }

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

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    if (this.itemSelectedObj) {
      this.storage.set('dejeuner', this.itemSelectedObj)
    }

    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
