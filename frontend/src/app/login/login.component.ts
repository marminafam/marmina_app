import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'mf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  alive = true;

  constructor(
    private router: Router
  ) { }

  login() {

  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
