import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";
import {ToastService} from "../../services/toast.service";
import {ResetPasswordService} from "../../services/reset-password.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  resetPasswordForm: FormGroup;
  submittedReset = false;

  constructor(private modalCtr: ModalController,private formBuilder: FormBuilder, private toastr: ToastService, private resetPasswordService: ResetPasswordService,
              private router: Router) { }

  ngOnInit() {
    this.initPasswordResetForm();
  }

  initPasswordResetForm() {
    this.resetPasswordForm = this.formBuilder.group({
      emailReset: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    });
  }

  submitResetPassWordForm() {

    this.submittedReset = true;

    if (this.resetPasswordForm.valid) {

      const email = this.resetPasswordForm.get('emailReset')?.value;

      if (email) {
        this.resetPasswordService.sendMailForForgotPassword(email).subscribe(value => {
          // @ts-ignore
          this.toastr.successToast(value);
          this.router.navigate(['tabs/login']);
        }, error => {
          this.toastr.customErrortoast(error.error, 5000);
          this.router.navigate(['tabs/login']);
        });
      }
    }
  }


  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

  get fp() {
    return this.resetPasswordForm.controls;
  }

}
