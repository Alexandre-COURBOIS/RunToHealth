import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Storage} from "@ionic/storage-angular";
import { Router } from '@angular/router';
import jwtDecode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private storage: Storage, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<Boolean> | Boolean {

    this.storage.create();

    return new Promise(resolve => {

        this.storage.get('is_logged').then(logged => {
          if (logged === true) {
            this.storage.get("user").then(user => {
              this.storage.get('_token').then(token => {
                // @ts-ignore
                if (jwtDecode(token).username === user.email) {
                  this.router.navigate(['tabs/profil-user']);
                }
              });
            });
          }
          resolve(true);
        });
      }
    );
  }
}
