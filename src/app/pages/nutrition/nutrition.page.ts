import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';
import { DejeunerModalPage } from "../../modals/dejeuner-modal/dejeuner-modal.page";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit {
  test: any;

  constructor(private httpClient: HttpClient, private modalController: ModalController) { }

  ngOnInit() {
    this.test = this.httpClient.post("https://trackapi.nutritionix.com/v2/natural/nutrients", {
      query: "eggs",
    },
      {
        headers: {
          'x-app-id': environment.NUTRITIONIX_APP_ID,
          'x-app-key': environment.NUTRITIONIX_KEYS_ID
        }
      }).subscribe(value => {
        console.log(value)
    })

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DejeunerModalPage
    });
    return await modal.present();
  }

}
