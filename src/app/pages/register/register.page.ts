import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "../../services/toast.service";
import {RegisterService} from "../../services/register.service";
import {Router} from "@angular/router";
import {Storage} from "@ionic/storage-angular";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  registerFormSecondPart: FormGroup;
  userInformations = [];
  private formPartOne = false;


  constructor(private formBuilder: FormBuilder, private toastService: ToastService, private registerService: RegisterService, private router: Router, private storage: Storage,
              private loaderService: LoaderService) { }

  ngOnInit() {
    this.initRegisterForms();
    this.storage.create();
  }

  initRegisterForms() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      pseudo: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      city: ['', [Validators.required, Validators.minLength(2),Validators.pattern('^[A-Za-z \-]+$')]],
      address: ['', [Validators.required, Validators.minLength(10),Validators.pattern('^[a-zA-Z0-9 _]*$')]],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      phone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    });

    this.registerFormSecondPart = this.formBuilder.group({
      weight: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(3),Validators.pattern('^(?:[1-9]\\d|300)$')]],
      height: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(3),Validators.pattern('^(?:[1-3]\\d\\d|250)$')]],
      smoker: [false, [Validators.required]],
      alcohol: [false, [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!.:,;^%*?&µù%=&])[A-Za-z\d$@$!.:,;^%*?&µù%=&].{8,}')]],
      verifPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!.:,;^%*?&µù%=&])[A-Za-z\d$@$!.:,;^%*?&µù%=&].{8,}')]],
    });
  }

  submitFirstPart() {
    if (this.registerForm.valid) {

      this.userInformations[0] = {
        'name' : this.registerForm.controls.name.value,
        'surname' : this.registerForm.controls.surname.value,
        'pseudo' : this.registerForm.controls.pseudo.value,
        'gender' : this.registerForm.controls.gender.value,
        'email' : this.registerForm.controls.email.value,
        'city' : this.registerForm.controls.city.value,
        'address' : this.registerForm.controls.address.value,
        'postalCode' : this.registerForm.controls.postalCode.value,
        'phone' : this.registerForm.controls.phone.value,
      };

      this.setFormPart();

    } else {
      this.toastService.customToastColorPosition("Merci de renseigner correctement vos informations",3000,"danger","top");
    }
  }

  submitSecondPart() {

    if (this.registerFormSecondPart.valid) {

      this.loaderService.showLoader();

      let weight = this.registerFormSecondPart.controls.weight.value;
      let height = this.registerFormSecondPart.controls.height.value;
      let smoker = this.registerFormSecondPart.controls.smoker.value;
      let alcohol = this.registerFormSecondPart.controls.alcohol.value;
      let password = this.registerFormSecondPart.controls.password.value;
      let verifPassword = this.registerFormSecondPart.controls.verifPassword.value;

      if (password === verifPassword) {

        let userInformationsSecondPart = {
          "weight" : this.registerFormSecondPart.controls.weight.value,
          "height" : this.registerFormSecondPart.controls.height.value,
          "smoker" : this.registerFormSecondPart.controls.smoker.value,
          "alcohol" : this.registerFormSecondPart.controls.alcohol.value,
        }

        this.userInformations.push(userInformationsSecondPart);

        this.registerService.createUser(this.userInformations[0].name,this.userInformations[0].surname,this.userInformations[0].pseudo,this.userInformations[0].gender,
          this.userInformations[0].email,this.userInformations[0].city,this.userInformations[0].address,this.userInformations[0].postalCode,this.userInformations[0].phone,
          weight, height, smoker, alcohol, password).subscribe(value => {

          if (value) {
            this.toastService.successToast('Votre compte a été créer avec succès. Vous pouvez vous connecter');
            this.router.navigate(['tabs/login']);
            this.loaderService.hideLoader();
          } else {
            this.loaderService.hideLoader();
          }

        }, error => {
          this.loaderService.hideLoader();
        });
      } else {
        this.toastService.customErrortoast("Les mots de passe saisis doivent être identiques", 3000);
        this.loaderService.hideLoader();
      }
    }
  }

  /*Control method on Html page*/

  setFormPart() {
    if (this.formPartOne === true) {
      this.formPartOne = false;
    } else if (this.formPartOne === false) {
      this.formPartOne = true;
    }
  }

  /*Return controls of any forms*/

  get f() {
    return this.registerForm.controls;
  }

  get f2() {
    return this.registerFormSecondPart.controls;
  }
}
