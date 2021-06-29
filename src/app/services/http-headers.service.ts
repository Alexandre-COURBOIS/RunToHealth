import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpHeadersService {

  constructor() { }

  httpHeaders(token) {
    const httpHeaders = {
      headers: new HttpHeaders()
        .append('Authorization', `Bearer ${token}`)
    };

  }
}
