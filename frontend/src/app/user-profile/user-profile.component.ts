import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

import { MarminaAuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { HttpErrorResponse } from "@angular/common/http";
import { SocialUser } from 'angularx-social-login';

import {
  ARABIC_ENGLISH_VALIDATOR,
  ARABIC_VALIDATOR,
  MOBILE_NUMBER_VALIDATOR,
  MONTHS,
  daysInMonth,
  range
} from '../app.helpers';

@Component({
  selector: "mf-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  public showForm: boolean = false;
  public profileForm: FormGroup;

  public user: SocialUser;
  public isAuthenticated: boolean = false;

  public years: Array<string>;
  public days: Array<string>;
  public months: Array<string>;

  constructor(
    private userService: UserService,
    private authService: MarminaAuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {

    // set year/month/day select menus
    const currentYear = new Date().getFullYear();
    this.years = range(currentYear, currentYear - 100, -1).map(item => String(item));
    this.days = range(1, 31, 1).map(item => String(item));
    this.months = MONTHS;

    // validate if the user is logged in
    this.authService.isLoggedIn().subscribe((data) => {
      this.isAuthenticated = data.isAuthenticated;
      this.user = data.user;
    });

    // initialize the user profile form
    this.profileForm = this.fb.group({

      // editable fields
      name: [null, [Validators.required, Validators.pattern(ARABIC_VALIDATOR)]],
      mobile: [null, [Validators.required, Validators.pattern(MOBILE_NUMBER_VALIDATOR)]],
      gender: ["Female", [Validators.required]],
      // birthday_month: [null, [Validators.required]],
      // birthday_day: [null, [Validators.required]],
      // birthday_year: [null, [Validators.required]],
      college: [null, [Validators.required]],
      university: [null, [Validators.required]],
      graduation_year: [null, [Validators.required]],
      facebook_url: [null],

      // boolean fields
      has_whatsapp: [true, [Validators.required]],
      is_student: [false, [Validators.required]],

      // hidden fields
      email: [this.user.email],
      image: [this.user.photoUrl],
      date_of_birth: [null],
      public_id: [null],
      english_name: [null]
    });

    // populate the form with the data from the API
    this.userService.getUserInfo(this.user.email).subscribe(
      (data: any) => {
        console.log("User found .. populate the form with the data .. :)",);
        this.showForm = true;
        this.profileForm.setValue(data);
      },
      (err: HttpErrorResponse) => {
        console.log("An error occured.", err);
      }
    );
  }

  submit() {

    // validate the form
    for (const i in this.profileForm.controls) {
      this.profileForm.controls[i].markAsDirty();
      this.profileForm.controls[i].updateValueAndValidity();
    }

    // invalid form ... return
    if (!this.profileForm.valid || !this.user) {
      return;
    }

    // convert the birthday fields into actual date
    const birthdayMonth = this.profileForm.value.birthday_month;
    const birthdayYear = this.profileForm.value.birthday_year;
    const birthdayDay = this.profileForm.value.birthday_day;

    const birthday = new Date(`${birthdayMonth} ${birthdayDay} ${birthdayYear}`);
    if (!birthday) {
      console.log("Invalid birthday");
    }
    this.profileForm.value['date_of_birth'] = birthday;
    console.log("BD", birthday);


    this.userService.updateUserInfo(this.user.email, this.profileForm.value).subscribe(
      (res: any) => {
        console.log("Updated ...", res);
      },
      (err: any) => {
        console.log("Error happened while updating the user info", err);
      }
    )

  }
}
