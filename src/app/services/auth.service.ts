import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";


const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient : HttpClient, private storage: Storage) { }

  public async getToken(): Promise<string> {
    return await this.storage.get("_token");
  }

  public async isAuthenticated(): Promise<boolean> {
    const token = this.storage.get('_token');
    return helper.isTokenExpired('token', await token);
  }

  login(email: string, password: string) {
    return this.httpClient.post(environment.API_URL + 'api/login_check', {username: email, password: password});
  }

}
