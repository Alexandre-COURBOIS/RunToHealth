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

}
