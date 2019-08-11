import { MarminaAuthService } from './../auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { SocialUser } from 'angularx-social-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { deprecate } from 'util';
import { UserService } from '../user.service';
@Component({
  selector: 'mf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy, OnInit {

  alive = true;
  validateForm: FormGroup;

  constructor(
    private authService: MarminaAuthService,
    private userService: UserService,
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
    this.authService.login().subscribe(
      (user: SocialUser) => {

        this.userService.registerUser(user.email).subscribe(
          (msg: any) => {
            console.log("Registered success", msg);
            this.router.navigate(['/profile']);
          }
        );
      },
      (err) => {
        alert("Error happened while trying to login.");
      }
    );
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
