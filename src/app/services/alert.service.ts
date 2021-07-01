import {Injectable} from '@angular/core';
import {AlertController} from "@ionic/angular";
import {Storage} from "@ionic/storage";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  constructor(private alertController: AlertController, private storage : Storage, private router : Router) {
  }

  async alertWarning(value) {
    const alert = await this.alertController.create({
      header: "Attention !",
      message: value,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async alertDeconnexion() {

    const alert = await this.alertController.create({
      header: "Déconnexion",
      message: "Voulez-vous vraiment vous deconnecter ?",
      buttons: [{
        text: "Annuler",
        role: "cancel",
      }, {
        text: "Valider",
        role: 'validate',
        handler: (value) => {
          this.storage.create();

          this.storage.clear();

          this.router.navigate(['tabs/login'])
        }
      }]
    });
    await alert.present();
  }


  async connexionAlert() {
    const alert = await this.alertController.create({
      header: 'Erreur de connexion',
      message: 'Veuillez réessayer plus tard.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async updateSchedules() {
    const alert = await this.alertController.create({
      header: 'Attention !',
      message: 'Contentez-vous d\'ignorer les horaires des jours qui ne concernent pas votre établissement !',
      buttons: ['OK'],
    });
    await alert.present();
  }

}
