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
  selector: 'app-update-user-password',
  templateUrl: './update-user-password.page.html',
  styleUrls: ['./update-user-password.page.scss'],
})
export class UpdateUserPasswordPage implements OnInit {

  retour = 'Retour';
  updateFormPassword: FormGroup;
  errorMessage: string;
  submitted = false;
  token: string;

  constructor(private storage: Storage, private formBuilder: FormBuilder,private loaderService: LoaderService, private userService: UserService,
              private toastService: ToastService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
    this.initForm();
  }

  ionViewWillEnter() {
    this.storage.create();

    this.storage.get('_token').then(token => {
      this.token = token;
    });
  }

  initForm() {
    this.updateFormPassword = this.formBuilder.group({
      oldPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      newPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      newPasswordVerif: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
  }

  onSubmit() {

    this.submitted = true;

    if (this.updateFormPassword.valid) {

      const oldTypedPassword = this.updateFormPassword.get('oldPassword');
      const newTypedPassword = this.updateFormPassword.get('newPassword');
      const newTypedPasswordVerif = this.updateFormPassword.get('newPasswordVerif');

      if (newTypedPassword.value === newTypedPasswordVerif.value) {

        this.loaderService.showLoader();

        this.userService.updateUserPasswordInformation(oldTypedPassword.value, newTypedPassword.value, newTypedPasswordVerif.value, this.token).subscribe(
          (value) => {
            this.loaderService.hideLoader();

            this.toastService.customSuccessToast(value, 3500);

            this.router.navigate(['tabs/profil-user']);
          },
          (error => {
            this.loaderService.hideLoader();
            this.toastService.errorToast(error.error);
          })
        );
      } else {
        this.toastService.customErrortoast('Les nouveaux mot de passe ne correspondent pas', 3500);
      }
    } else {
      this.alertService.alertWarning('Merci de renseigner correctement le formulaire');
    }
  }

  get f() {
    return this.updateFormPassword.controls;
  }

}
