import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'mf-auth-callback',
  template: `
  `
})
export class AuthCallbackComponent implements OnDestroy {

  alive = true;

  constructor(
    private router: Router
  ) { }


  ngOnDestroy(): void {
    this.alive = false;
  }

}
