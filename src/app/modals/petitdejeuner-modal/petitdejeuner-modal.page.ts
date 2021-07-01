import { Component, OnInit } from '@angular/core';
import {NutritionService} from "../../services/nutrition.service";

@Component({
  selector: 'app-petitdejeuner-modal',
  templateUrl: './petitdejeuner-modal.page.html',
  styleUrls: ['./petitdejeuner-modal.page.scss'],
})
export class PetitdejeunerModalPage implements OnInit {

  constructor(public nutritionService: NutritionService) { }

  ngOnInit() {
  }

}
