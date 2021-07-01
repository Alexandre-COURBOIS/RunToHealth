import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit {
  test: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.test = this.httpClient.post("https://trackapi.nutritionix.com/v2/natural/nutrients", {
      query: "eggs",
      timezone: "FR"
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

}
