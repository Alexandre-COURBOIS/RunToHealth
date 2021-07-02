import { Component, OnInit } from '@angular/core';
import {NutritionService} from "../../services/nutrition.service";

@Component({
  selector: 'app-diner-modal',
  templateUrl: './diner-modal.page.html',
  styleUrls: ['./diner-modal.page.scss'],
})
export class DinerModalPage implements OnInit {

  constructor(public nutritionService: NutritionService) { }

  ngOnInit() {
  }

}
