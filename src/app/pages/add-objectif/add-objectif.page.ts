import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {convertElementSourceSpanToLoc} from "@angular-eslint/template-parser/dist/convert-source-span-to-loc";

@Component({
  selector: 'app-add-objectif',
  templateUrl: './add-objectif.page.html',
  styleUrls: ['./add-objectif.page.scss'],
})


export class AddObjectifPage implements OnInit {

  public type:any;
  public type_selected:any;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {

     this.type=['Cigarette','Alcool','Poids','Sport'];

  }

  getObjectivesType($event){

    this.type_selected=$event.detail.value;

  }

 addObjectif(){


  }

}
