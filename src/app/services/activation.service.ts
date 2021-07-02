import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ActivationService {

  constructor(private httpClient: HttpClient) { }

  activeAccount(email: string, token: string) {

    const httpHeaders = {
      headers: new HttpHeaders()
        .append('Authorization', `Bearer ${token}`)
    };

    return this.httpClient.post(environment.API_URL + 'api/active-account', {email : email}, httpHeaders);
  }

  setAccountActive(token: string) {

    return this.httpClient.post(environment.API_URL + 'activating-account', {token : token});
  }

  checkTokenAvailability(token: string) {

    return this.httpClient.post(environment.API_URL + 'check-token', {token: token});
  }


}
