import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import {convertElementSourceSpanToLoc} from "@angular-eslint/template-parser/dist/convert-source-span-to-loc";
import {Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import application from "@angular-devkit/build-angular/src/babel/presets/application";

@Component({
  selector: 'app-add-objectif',
  templateUrl: './add-objectif.page.html',
  styleUrls: ['./add-objectif.page.scss'],
})


export class AddObjectifPage implements OnInit {

  private type:any;
  private type_selected:any;
  private objectiveForm: FormGroup;

  constructor(public route: ActivatedRoute,public formBuilder: FormBuilder,public http:HttpClient) { }

  ngOnInit() {

     this.type=['Cigarette','Alcool','Poids','Sport'];
     this.buildObjectiveForm();

  }

  buildObjectiveForm(){

    this.objectiveForm=this.formBuilder.group({ //REGEX à faire !
      objectif:['', [Validators.required]],
      numberCigarette:['', []],
      numberPoids:['', []],
      timeSport:['', []],
      begin:['', [Validators.required]],
      end:['', [Validators.required]],

    });
  }

  getObjectivesType($event){

    this.type_selected=$event.detail.value;

  }

  addObjectif(){

    if(!this.objectiveForm.valid){
      return;
    }

    console.log(this.objectiveForm.value);

    let url="https://127.0.0.1:8000/data";
    let header= new HttpHeaders({"Content-type":"application-json"}); //Bearer à ajouter


    return this.http.post(url,JSON.stringify(this.objectiveForm.value),{headers:header}).subscribe(data => {
      console.log(data);

    }, error => {
      console.log(error);
    });
  }

}
