import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {from, Observable, throwError} from 'rxjs';
import {AuthService} from '../Services/auth.service';
import {Storage} from "@ionic/storage-angular";
import {catchError, map, switchMap} from "rxjs/operators";
import {AlertController} from "@ionic/angular";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  token : string;
  tokenLogin : string;
  tableValue: Object;

  constructor(private authService : AuthService, private storage: Storage, private alertController: AlertController) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      this.authService.getToken().then(token => {
        if (token) {
          this.token = token;
        }
      });

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      });
      return next.handle(request);
  }

}
