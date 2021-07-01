import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  constructor(private activatedRoute: ActivatedRoute,public http:HttpClient,public formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params.id;
    this.getObjectif();
    this.buildUpdateForm();
  }

  buildUpdateForm(){

    this.objectiveForm=this.formBuilder.group({
      valid:['', []],
      noValid:['', []],
      deleteObjectif:['', []],
      typeObjectif:['', []],


    });
  }

  getObjectif(){// faire à partir du storage !

    let url="http://127.0.0.1:8000/search/objective";
    let header= new HttpHeaders({"Content-type":"application-json"}); //Bearer à ajouter

    return this.http.post(url,this.id,{headers:header}).subscribe(data => {
      this.currentObjective=data;
      console.log(this.currentObjective);
      this.typeObj=this.currentObjective[0].type;

    }, error => {
      console.log(error);
    });
  }

  getValueValid($event){
    this.value=$event.target.attributes.value.value;
  }

  updateObjectif() {
    console.log(this.value);

    if (this.value == 0) {
      console.log("Suppresion...");
      this.deleteObjective(this.id);

    } else if (this.value == 1) {
      console.log("Validation...");

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
