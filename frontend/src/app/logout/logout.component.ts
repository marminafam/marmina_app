import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mf-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  public isLoggedOut: boolean;
  public logoutError: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
