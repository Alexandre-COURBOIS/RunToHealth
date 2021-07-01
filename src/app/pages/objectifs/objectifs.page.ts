import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ObjectifService} from "../../services/objectif.service";
import {Storage} from "@ionic/storage-angular";
import {Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-objectifs',
  templateUrl: './objectifs.page.html',
  styleUrls: ['./objectifs.page.scss'],
})
export class ObjectifsPage implements OnInit {

  private objectives: any;

  constructor(private http:HttpClient, private objectifService: ObjectifService, private storage: Storage,private router: Router, private toastr: ToastService) { }

  ngOnInit() {

    this.storage.create();

    this.storage.get('_token').then(token => {

      this.objectifService.getCurrentObjectif(token).subscribe(objectivs => {

        this.objectives = objectivs;

      },error => {

        console.log(error);
      });

    });
  }


}
