import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";
import {ActivationService} from "../../services/activation.service";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.page.html',
  styleUrls: ['./activate-account.page.scss'],
})
export class ActivateAccountPage implements OnInit {

  $availableToken = false;

  constructor(private route : ActivatedRoute, private router: Router, private toastr: ToastService, private activateService: ActivationService) { }

  ngOnInit() {
    const token = this.route.snapshot.params['token'];

    this.activateService.checkTokenAvailability(token).subscribe(value => {

      this.$availableToken = true;

      if (token && token.length === 86) {
        this.activateService.setAccountActive(token).subscribe(value => {
          this.toastr.successToast(value);
          this.router.navigate(['tabs/login']);
        });
      } else {
        this.router.navigate(['tabs/login']);
      }

    }, error => {
      this.router.navigate(['tabs/login']);
    });



  }

}
