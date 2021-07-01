import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  getUsersByEmail(email: string, token: string) {

    const httpHeaders = {
      headers: new HttpHeaders()
        .append('Authorization', `Bearer ${token}`)
    };

    return this.httpClient.post(environment.API_URL + 'api/get/user', {email : email}, httpHeaders);
  }

  updateUserContactInformations(address: String, city: String, postalCode: bigint, token: string) {

    const httpHeaders = {
      headers: new HttpHeaders()
        .append('Authorization', `Bearer ${token}`)
    };

    return this.httpClient.patch(environment.API_URL + 'api/user/update/contact', {
      address: address,
      city: city,
      postalCode: postalCode
    }, httpHeaders);
  }

  updateUserInformations(name: String, surname: String, pseudo: String, token: string) {

    const httpHeaders = {
      headers: new HttpHeaders()
        .append('Authorization', `Bearer ${token}`)
    };

    return this.httpClient.patch(environment.API_URL + 'api/user/update/informations', {
      name: name,
      surname: surname,
      pseudo: pseudo
    }, httpHeaders);
  }

  updateUserPasswordInformation(oldPassword : String, password : String, verifPassword : String, token: string) {

    const httpHeaders = {
      headers: new HttpHeaders()
        .append('Authorization', `Bearer ${token}`)
    };

    return this.httpClient.patch(environment.API_URL + 'api/user/password/informations/update', {
      oldPassword : oldPassword,
      password : password,
      verifPassword : verifPassword
    }, httpHeaders);
  }
}
