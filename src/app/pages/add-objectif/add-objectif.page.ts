import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import {convertElementSourceSpanToLoc} from "@angular-eslint/template-parser/dist/convert-source-span-to-loc";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-add-objectif',
  templateUrl: './add-objectif.page.html',
  styleUrls: ['./add-objectif.page.scss'],
})


export class AddObjectifPage implements OnInit {

  private type:any;
  private type_selected:any;
  private objectiveForm: FormGroup;

  constructor(public route: ActivatedRoute,public formBuilder: FormBuilder ) { }

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

    return this.objectiveForm.value;
  }

}
