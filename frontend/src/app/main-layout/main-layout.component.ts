import { MarminaAuthService } from './../auth.service';
import { AuthService, SocialUser } from 'angularx-social-login';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'mf-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnChanges {

  public isAuthenticated: boolean = false;
  public user: SocialUser;

  constructor(
    private marminaAuthService: MarminaAuthService
  ) { }

  ngOnChanges() {
    console.log("onChanges mainLayout");
  }

  ngOnInit() {

    this.marminaAuthService.isLoggedIn().subscribe((data) => {
      this.isAuthenticated = data.isAuthenticated;
      this.user = data.user;
    });

  }

}
