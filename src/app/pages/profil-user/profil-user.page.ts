import { Component, OnInit } from '@angular/core';
import {LoaderService} from "../../services/loader.service";
import {Storage} from "@ionic/storage-angular";

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.page.html',
  styleUrls: ['./profil-user.page.scss'],
})
export class ProfilUserPage implements OnInit {

  activeUser: Object;

  email: string;
  surname: string;
  name: string;
  pseudo: string;
  city: string;
  address: string;
  postalCode: string;

  constructor(private loaderService: LoaderService, private storage: Storage) { }

  ngOnInit() {

  }

  ionViewWillEnter() {

    this.storage.create();

    this.storage.get("user").then(user => {

      this.activeUser = user;

      this.surname = user.surname;
      this.name = user.name;
      this.pseudo = user.pseudo;
      this.city = user.city;
      this.address = user.address;
      this.postalCode = user.postalCode;

    });

  }
}
