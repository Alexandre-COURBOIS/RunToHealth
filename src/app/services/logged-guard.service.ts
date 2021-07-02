import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage-angular";
import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LoggedGuardService {

  constructor(private storage: Storage, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<Boolean> | Boolean {

    this.storage.create();

    return new Promise(resolve => {

        this.storage.get('is_logged').then(logged => {
          if (logged === true) {
            this.storage.get('_token').then(token => {
              this.storage.get('user').then(user => {
                // @ts-ignore
                if (jwtDecode(token).username === user.email) {
                  resolve(true);
                } else {
                  this.router.navigate(['/tabs/login']);
                  resolve(false);
                }
              });
            });
          } else {
            this.router.navigate(['/tabs/login']);
            resolve(false);
          }
        });
      }
    );
  }
}
