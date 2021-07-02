import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {ResetPasswordService} from "../../services/reset-password.service";
import {ToastService} from "../../services/toast.service";
import {ActivationService} from "../../services/activation.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  email !: string;
  submitted = false;
  clicked = false;
  accessAvailable = false;

  forgotPasswordForm = new FormGroup({
    password: new FormControl(), verifPassword: new FormControl()
  });

  constructor(private route : ActivatedRoute, private router: Router, private datePipe: DatePipe, private resetPasswordService: ResetPasswordService,
              private toastr: ToastService, private formBuilder: FormBuilder, private activationService: ActivationService ) { }

  ngOnInit() {
    const token = this.route.snapshot.params['token'];

    this.activationService.checkTokenAvailability(token).subscribe(success => {
      this.accessAvailable = true;
      if (token && token.length === 86) {
        const date = new Date();
        const formatDate = this.datePipe.transform(date, 'Y-MM-d HH:mm:ss');

        this.resetPasswordService.getTokenInformations(token, formatDate).subscribe(value => {
          if (value) {
            // @ts-ignore
            this.email = value;
            this.initForm();
          } else {
            this.toastr.errorToast('Ce token semble expiré ! Veuillez renouvelez votre demande');
            this.router.navigate(['/404NotFound']);
          }
        }, error => {
          this.toastr.errorToast('Ce token semble expiré ! Veuillez renouvelez votre demande');
          this.router.navigate(['/404NotFound']);
        });
      } else {
        this.router.navigate(['/404NotFound']);
      }
    }, error => {
      this.toastr.errorToast("Les données renseignées sont incorrectes");
      this.router.navigate(['tabs/login']);
    });
  }

  initForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!.:,;^%*?&µù%=&])[A-Za-z\d$@$!.:,;^%*?&µù%=&].{8,}')]],
      verifPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!.:,;^%*?&µù%=&])[A-Za-z\d$@$!.:,;^%*?&µù%=&].{8,}')]],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.clicked = true;

    if (this.forgotPasswordForm.valid) {

      const typedPassword = this.forgotPasswordForm.get('password')?.value;
      const typedVerifPassword = this.forgotPasswordForm.get('verifPassword')?.value;

      if (typedPassword === typedVerifPassword) {

        this.resetPasswordService.updatePasswordForgot(this.email, typedPassword, typedVerifPassword).subscribe(
          value => {

            // @ts-ignore
            this.toastr.successToast(value);
            this.router.navigate(['tabs/login']);
          }, error => {
            this.toastr.errorToast(error.error);
          });
      } else {
        this.toastr.errorToast('Les mots de passe saisis ne correspondent pas');
      }
    } else {
      this.toastr.errorToast('Le formulaire est vide, ou il manque des informations, veuillez le compléter !');
    }
  }

  get f() {
    return this.forgotPasswordForm.controls;
  }

}
