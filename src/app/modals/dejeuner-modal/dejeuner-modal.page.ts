import {Component, OnInit} from '@angular/core';
import {NutritionService} from "../../services/nutrition.service";

@Component({
  selector: 'app-dejeuner-modal',
  templateUrl: './dejeuner-modal.page.html',
  styleUrls: ['./dejeuner-modal.page.scss'],
})
export class DejeunerModalPage implements OnInit {

  constructor(public nutritionService: NutritionService) {
  }

  ngOnInit() {}







}
