import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoaderService} from "../../../services/loader.service";
import {UserService} from "../../../services/user.service";
import {ToastService} from "../../../services/toast.service";
import {Router} from "@angular/router";
import {AlertService} from "../../../services/alert.service";
import jwtDecode from "jwt-decode";

@Component({
  selector: 'app-update-user-informations',
  templateUrl: './update-user-informations.page.html',
  styleUrls: ['./update-user-informations.page.scss'],
})
export class UpdateUserInformationsPage implements OnInit {

  retour = 'Retour';
  updateForm: FormGroup;
  errorMessage: string;
  submitted = false;
  email: string;
  name : string;
  surname : string;
  pseudo : string;
  token : string;
  user = Object;

  constructor(private storage: Storage, private formBuilder: FormBuilder,private loaderService: LoaderService, private userService: UserService,
              private toastService: ToastService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
    this.initForm()
  }

  ionViewWillEnter() {
    this.storage.create();

    this.storage.get('_token').then(token => {
      this.token = token;

      // @ts-ignore
      jwtDecode(token).username = this.email;
    });

    this.storage.get('user').then( user =>{
      this.user = user;

      this.name = user.name;
      this.surname = user.surname;
      this.pseudo = user.pseudo;
    });
  }

  initForm() {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      pseudo: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {

    this.submitted = true;

    if (this.updateForm.valid) {

      this.loaderService.showLoader();

      const name = this.updateForm.get('name').value;
      const surname = this.updateForm.get('surname').value;
      const pseudo = this.updateForm.get('pseudo').value;

      this.userService.updateUserInformations(name, surname, pseudo, this.token).subscribe(
        userUpdated => {

          this.loaderService.hideLoader();

          this.storage.remove('user');

          this.storage.set('user', userUpdated);

          this.toastService.customSuccessToast('Informations mises à jour avec succès !', 3000);

          this.router.navigate(['tabs/profil-user']);
        },
        (error => {
          this.loaderService.hideLoader();
          this.toastService.errorToast(error.error)
        })
      );
    } else {
      this.alertService.alertWarning("Merci de renseigner correctement le formulaire")
    }
  }


  get f() {
    return this.updateForm.controls;
  }
}
