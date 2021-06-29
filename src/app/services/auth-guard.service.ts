import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Storage} from "@ionic/storage-angular";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private storage: Storage, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<Boolean> | Boolean {

    return new Promise(resolve => {

        let logged = this.storage.get('_logged');
        let jwtToken = this.storage.get('_token');
        let mail = this.storage.get('_email');

        // @ts-ignore
        if (loggedStatus === 'true' && jwtDecode(jwtToken).username === username) {
          resolve(true);
        } else {
          this.router.navigate(['/login']);
          resolve(false);
        }
      }
    );
  }
}
