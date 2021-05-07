import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  public img: string;

  constructor() { }

  ngOnInit() {
    this.img='https://netpasse.com/wp-content/uploads/2020/12/jolie-fille-prends-selfie.jpg';
  }

}
