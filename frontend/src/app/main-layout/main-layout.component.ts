import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mf-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  public isAuthenticated: boolean = false;
  public username: string;

  constructor() { }

  ngOnInit() {
  }

}
