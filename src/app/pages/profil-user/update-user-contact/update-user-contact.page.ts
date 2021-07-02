import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Storage} from "@ionic/storage-angular";
import {LoaderService} from "../../../services/loader.service";
import {UserService} from "../../../services/user.service";
import {ToastService} from "../../../services/toast.service";
import {Router} from "@angular/router";
import {AlertService} from "../../../services/alert.service";
import jwtDecode from "jwt-decode";

@Component({
  selector: 'app-update-user-contact',
  templateUrl: './update-user-contact.page.html',
  styleUrls: ['./update-user-contact.page.scss'],
})
export class UpdateUserContactPage implements OnInit {

  retour = 'Retour';
  submitted = false;
  updateFormInfoContact: FormGroup;
  user = Object;
  token: string;
  email: string;
  city: string;
  postalCode: string;
  address: string;
  errorMessage: string;

  constructor(private storage: Storage, private formBuilder: FormBuilder,private loaderService: LoaderService, private userService: UserService,
              private toastService: ToastService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.updateFormInfoContact = this.formBuilder.group({
      city: ['', [Validators.required, Validators.minLength(2)]],
      postalCode: ['', [Validators.minLength(3)]],
      address: ['', [Validators.minLength(3)]],
    });
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

      this.email = user.email;
      this.city = user.city;
      this.postalCode = user.postalCode;
      this.address = user.address;
    });
  }

  onSubmit() {

    this.submitted = true;

    if (this.updateFormInfoContact.valid) {

      this.loaderService.showLoader();

      const city = this.updateFormInfoContact.get('city').value;
      const postalCode = this.updateFormInfoContact.get('postalCode').value;
      const address = this.updateFormInfoContact.get('address').value;

      this.userService.updateUserContactInformations(address, city, postalCode, this.token).subscribe(
        userUpdated => {

          this.loaderService.hideLoader();

          this.storage.remove('user');

            this.storage.set('user',userUpdated);

            this.toastService.customSuccessToast('Informations mises à jour avec succès !', 3000);

            this.router.navigate(['tabs/profil-user']);
        },
        (error => {
          console.log(error);
          this.loaderService.hideLoader();
          this.toastService.errorToast(error.error);
        })
      );
    } else {
      this.alertService.alertWarning('Merci de renseigner correctement le formulaire');
    }
  }

  get f() {
    return this.updateFormInfoContact.controls;
  }

}
