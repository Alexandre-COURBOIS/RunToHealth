import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  getUsersByEmail(email: string) {

    return this.httpClient.post(environment.API_URL + 'api/user/get/user', {email : email});
  }
}
