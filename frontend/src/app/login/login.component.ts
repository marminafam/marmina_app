import { MarminaAuthService } from './../auth.service';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'mf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  alive = true;

  constructor(
    private marminaAuthService: MarminaAuthService,
    private router: Router
  ) { }

  login() {
    this.marminaAuthService.login().subscribe((user: SocialUser) => {
      this.router.navigate(['/']);
    });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
