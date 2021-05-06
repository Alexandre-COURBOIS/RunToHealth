import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  createUser(name: string, surname: string, pseudo: string, gender: string, email: string, city: string, address: string, postalCode: bigint,
             phone: bigint, weight: bigint, height: bigint, smoker: boolean, alcohol: boolean, password: string)
  {
    return this.httpClient.post(environment.API_URL + 'register/user', {
      name: name, surname: surname, pseudo: pseudo, gender: gender, email: email, city: city, address: address, postalCode: postalCode,
      phone: phone, weight: weight, height: height, smoker: smoker, alcohol: alcohol, password: password
    })
  }


}
