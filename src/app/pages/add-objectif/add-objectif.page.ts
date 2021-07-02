import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import {Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ObjectifService} from "../../services/objectif.service";
import {Storage} from "@ionic/storage-angular";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-add-objectif',
  templateUrl: './add-objectif.page.html',
  styleUrls: ['./add-objectif.page.scss'],
})


export class AddObjectifPage implements OnInit {

  private type:any;
  private type_selected:any;
  private objectiveForm: FormGroup;
  private token : string;
  private userEmail: string;

  constructor(public route: ActivatedRoute,public formBuilder: FormBuilder,private objectifService: ObjectifService, private storage: Storage,
              private toastr: ToastService, private router: Router) { }

  ngOnInit() {

    this.storage.create();

    this.storage.get('_token').then(token => {
      this.token = token;
    });

    this.storage.get('user').then(user => {

      this.userEmail = user.email;
    });

    this.type=['Cigarette','Alcool','Poids','Sport'];
    this.buildObjectiveForm();

  }

  buildObjectiveForm(){

    this.objectiveForm=this.formBuilder.group({ //REGEX à faire !
      objectif:['', [Validators.required]],
      numberCigarette:['', []],
      numberPoids:['', []],
      alcool:['', []],
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

    this.objectifService.sendObjectif(this.objectiveForm.value,this.userEmail, this.token).subscribe(value => {

      this.toastr.successToast("Féliciations vous venez d'ajouter un nouvel objectif !");
      this.router.navigate(['/tabs/objectifs'])
    }, error => {
      this.toastr.errorToast("Veuillez réessayer une petite erreur s'est produit !");
    });

  }

}
