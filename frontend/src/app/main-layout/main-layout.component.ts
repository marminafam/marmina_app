import { MarminaAuthService } from './../auth.service';
import { AuthService, SocialUser } from 'angularx-social-login';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'mf-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  @Input() enableSidebar: boolean = true;

  public isAuthenticated: boolean = false;
  public user: SocialUser;

  constructor(
    private marminaAuthService: MarminaAuthService
  ) { }

  ngOnInit() {
    this.marminaAuthService.isLoggedIn().subscribe((data) => {
      this.isAuthenticated = data.isAuthenticated;
      this.user = data.user;
    });
  }
}
