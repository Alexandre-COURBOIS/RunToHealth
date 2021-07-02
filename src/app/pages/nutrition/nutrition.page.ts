import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { DejeunerModalPage } from "../../modals/dejeuner-modal/dejeuner-modal.page";
import {ModalController} from "@ionic/angular";
import {NutritionService} from "../../services/nutrition.service";
import {Storage} from "@ionic/storage-angular";
import {PetitdejeunerModalPage} from "../../modals/petitdejeuner-modal/petitdejeuner-modal.page";
import {DinerModalPage} from "../../modals/diner-modal/diner-modal.page";

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit {
  petitDejCal: any;
  dejCal: any;
  dinerCal: any;
  calories: number;

  constructor(private httpClient: HttpClient, private modalController: ModalController, public nutritionService: NutritionService, private storage: Storage) { }
  ngOnInit() {
    this.storage.create();

    this.updatePetitDejCal();
    this.updateDejCal();
    this.updateDinerCal();
    this.updateCalories();
  }

  async presentDejeunerModal() {
    const modal = await this.modalController.create({
      component: DejeunerModalPage
    });

    modal.onDidDismiss().then(value => {
      if(value) {
        this.updateDejCal();
        this.updateCalories();
      }
    });

    return await modal.present();
  }

  async presentPetitDejeunerModal() {
    const modal = await this.modalController.create({
      component: PetitdejeunerModalPage
    });

    modal.onDidDismiss().then(value => {
      if(value) {
        this.updatePetitDejCal();
        this.updateCalories();
      }
    });

    return await modal.present();
  }

  async presentDinerModal() {
    const modal = await this.modalController.create({
      component: DinerModalPage
    });

    modal.onDidDismiss().then(value => {
      if(value) {
        this.updateDinerCal()
        this.updateCalories();
      }
    });

    return await modal.present();
  }

  updateDejCal() {
    // @ts-ignore
    this.storage.get('dejeuner').then(value => {
      if(value) {
        this.dejCal = value;
      } else {
        this.dejCal = "";
      }
    });
  }
  updatePetitDejCal() {
    // @ts-ignore
    this.storage.get('petitdejeuner').then(value => {
      if(value) {
        this.petitDejCal = value;
      } else {
        this.petitDejCal = "";
      }
    });
  }
  updateDinerCal() {
    // @ts-ignore
    this.storage.get('diner').then(value => {
      if(value) {
        this.dinerCal = value;
      } else {
        this.dinerCal = "";
      }
    });
  }
  updateCalories() {
    this.nutritionService.countCalories().then(value => {
      if(value) {
        this.calories = value;
      }
    });
  }

}
