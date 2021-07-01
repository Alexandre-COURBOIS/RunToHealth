import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage-angular";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  user: Object;
  height: number;
  weight: number;
  surname: string;
  name: string;
  imc : number;

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.create();

    this.storage.get('user').then(user => {

      this.user = user;

      this.height = user.characteristics.height;
      this.weight= user.characteristics.weight.weight;
      this.surname = user.surname;
      this.name = user.name;

      this.imc = Math.round((this.weight) / (this.height*this.height) * 10000);

    });
  }

}
