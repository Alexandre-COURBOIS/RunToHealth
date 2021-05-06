import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController : ToastController) { }

  async errorToast(content) {
    const toast = await this.toastController.create({
      message: content,
      duration: 3000,
      position: 'top',
      color: "danger",
      mode: "ios"

    });
    await toast.present();
  }

  async customErrortoast(content,duration) {
    const toast = await this.toastController.create({
      message: content,
      duration: duration,
      position: 'top',
      color: "danger",
      mode: "ios"

    });
    await toast.present();
  }

  async successToast(content) {
    const toast = await this.toastController.create({
      message: content,
      duration: 2000,
      position: 'top',
      color: "success",
      mode: "ios"

    });
    await toast.present();
  }

  async customSuccessToast(content,duration) {
    const toast = await this.toastController.create({
      message: content,
      duration: duration,
      position: 'top',
      color: "success",
      mode: "ios"

    });
    await toast.present();
  }

  async customToastColorPosition(content,duration,color,position) {
    const toast = await this.toastController.create({
      message: content,
      duration: duration,
      position: position,
      color: color,
      mode: "ios"

    });
    await toast.present();
  }
}
