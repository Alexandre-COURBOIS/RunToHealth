import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Storage} from "@ionic/storage-angular";
import {ToastService} from "../../services/toast.service";
import {AuthService} from "../../services/auth.service";
import jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";
import {UserService} from "../../services/user.service";
import {HttpHeadersService} from "../../services/http-headers.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  submitted = false;
  loginForm: FormGroup;
  token: string;

  constructor(private formBuilder: FormBuilder, private storage: Storage, private toastr : ToastService, private authService: AuthService,
              private userService: UserService,private httpHeaders : HttpHeadersService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!.:,;^%*?&µù%=&])[A-Za-z\d$@$!.:,;^%*?&µù%=&].{8,}')]]
    })
  }

  onSubmit() {

    this.submitted = true;

    if (this.loginForm.valid) {

      const typedEmail = this.loginForm.get('email')?.value;
      const typedPassword = this.loginForm.get('password')?.value;

      if (typedEmail && typedPassword) {

        this.storage.create();

        this.authService.login(typedEmail, typedPassword).subscribe(value => {

          // @ts-ignore
          if (value.token && value.refresh_token) {0

            // @ts-ignore
            const JWTToken = value.token;
            // @ts-ignore
            this.token = value.token;

            this.storage.set('_token',JWTToken);

            const decodedJWT = jwtDecode(JWTToken);

            const httpHeaders = {
              headers: new HttpHeaders()
                .append('Authorization', `Bearer ${JWTToken}`)
            };

            this.userService.getUsersByEmail(decodedJWT['username'], httpHeaders).subscribe(value => {
              // @ts-ignore
              console.log(value);
            });

          }

        });
      }
    }


  }

  get f() {
    return this.loginForm.controls;
  }

}
