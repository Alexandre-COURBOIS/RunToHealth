import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Storage} from "@ionic/storage-angular";
import {ObjectifService} from "../../services/objectif.service";
import {ToastService} from "../../services/toast.service";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-update-objectif',
  templateUrl: './update-objectif.page.html',
  styleUrls: ['./update-objectif.page.scss'],
})
export class UpdateObjectifPage implements OnInit {


  private currentObjective:any;
  private objectiveForm: FormGroup;
  private value:any;
  private id:number;
  private typeObj:String;
  private token: string;

  constructor(private activatedRoute: ActivatedRoute,public http:HttpClient,public formBuilder: FormBuilder, private storage: Storage,
              private objectifService: ObjectifService, private toastService: ToastService, private router: Router, private loaderService: LoaderService) {
  }

  ngOnInit() {

    this.storage.create();

    this.buildUpdateForm();

    this.id = this.activatedRoute.snapshot.params.id;

    this.storage.get('_token').then(token => {

      this.objectifService.getObjectifById(this.id, token).subscribe(objective => {

        this.currentObjective = objective;
        this.token = token;
      },error => {

      });
    });

  }

  buildUpdateForm(){

    this.objectiveForm=this.formBuilder.group({
      valid:['', []],
      noValid:['', []],
      deleteObjectif:['', []],
      typeObjectif:['', []],
    });
  }

  getValueValid($event){
    this.value=$event.target.attributes.value.value;
  }

  updateObjectif() {

    this.loaderService.showLoader();

    if (this.value == 0) {
      console.log("Suppresion...");
      this.deleteObjective(this.id);

    } else if (this.value == 1) {
      this.objectifService.setObjectifSuccess(this.id,this.token).subscribe(value => {
        this.toastService.successToast(value);

        setTimeout(() => {
          this.loaderService.hideLoader();
          this.router.navigate(['/tabs/objectifs']);
        },1000);

      });

    } else if (this.value == 2) {
      console.log("Modification...");
    }

  }

  deleteObjective(id){

    let url="http://127.0.0.1:8000/suppression";
    let header= new HttpHeaders({"Content-type":"application-json"}); //Bearer à ajouter

    return this.http.post(url,[this.id,this.typeObj],{headers:header}).subscribe(data => {
      console.log(data);

    }, error => {
      console.log(error);
    });
  }

}
