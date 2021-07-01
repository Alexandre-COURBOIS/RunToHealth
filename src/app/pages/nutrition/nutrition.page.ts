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

  constructor(private httpClient: HttpClient, private modalController: ModalController, public nutritionService: NutritionService, private storage: Storage) { }
  ngOnInit() {
    this.storage.create();

    this.updatePetitDejCal();
    this.updateDejCal();
    this.updateDinerCal();
  }

  async presentDejeunerModal() {
    const modal = await this.modalController.create({
      component: DejeunerModalPage
    });

    modal.onDidDismiss().then(value => {
      if(value) {
        this.updateDejCal();
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
        this.updateDinerCal();
      }
    });

    return await modal.present();
  }

  updateDejCal() {
    // @ts-ignore
    this.storage.get('dejeuner').then(value => {
      if(value) {
        console.log(value);
        this.dejCal = value;
      } else {
        console.log("STORAGE VIDE")
        this.dejCal = "";
      }
    })
  }
  updatePetitDejCal() {
    // @ts-ignore
    this.storage.get('petitdejeuner').then(value => {
      if(value) {
        console.log(value);
        this.petitDejCal = value;
      } else {
        console.log("STORAGE VIDE")
        this.petitDejCal = "";
      }
    })
  }
  updateDinerCal() {
    // @ts-ignore
    this.storage.get('diner').then(value => {
      if(value) {
        console.log(value);
        this.dinerCal = value;
      } else {
        console.log("STORAGE VIDE")
        this.dinerCal = "";
      }
    })
  }

}
