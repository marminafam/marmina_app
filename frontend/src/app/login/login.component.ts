import { MarminaAuthService } from './../auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { SocialUser } from 'angularx-social-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { deprecate } from 'util';
@Component({
  selector: 'mf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy, OnInit {

  alive = true;
  validateForm: FormGroup;

  constructor(
    private marminaAuthService: MarminaAuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  loginWithGoogle(): void {
    this.marminaAuthService.login().subscribe((user: SocialUser) => {
      this.router.navigate(['/']);
    });
  }

  loginWithPassword(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
