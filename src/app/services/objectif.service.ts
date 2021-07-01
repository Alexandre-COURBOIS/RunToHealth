import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {

  constructor(private httpClient: HttpClient) { }

  sendObjectif(data: string, email: string, token: string) {

    const httpHeaders = {
      headers: new HttpHeaders()
        .append('Authorization', `Bearer ${token}`)
    };

    return this.httpClient.post(environment.API_URL + 'api/add-objectif', {data : data, email: email}, httpHeaders);
  }

  getCurrentObjectif(token: string) {

    const httpHeaders = {
      headers: new HttpHeaders()
        .append('Authorization', `Bearer ${token}`)
    };

    return this.httpClient.get(environment.API_URL + 'api/get-available-objectif', httpHeaders);
  }

  getObjectifById(objective_id: number, token: string) {

    const httpHeaders = {
      headers: new HttpHeaders()
        .append('Authorization', `Bearer ${token}`)
    };

    return this.httpClient.post(environment.API_URL + 'api/get-objective-id',{data: objective_id}, httpHeaders);
  }

  setObjectifSuccess(objective_id: number, token: string) {

    const httpHeaders = {
      headers: new HttpHeaders()
        .append('Authorization', `Bearer ${token}`)
    };

    return this.httpClient.patch(environment.API_URL + 'api/validate-objective',{id: objective_id}, httpHeaders);
  }

  deleteObjective(objective_id: number, token: string) {

    const httpHeaders = {
      headers: new HttpHeaders()
        .append('Authorization', `Bearer ${token}`)
    };

    return this.httpClient.patch(environment.API_URL + 'api/delete-objective',{id: objective_id}, httpHeaders);
  }

}
