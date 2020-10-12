import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isNavbarOpen: boolean = false;

  NavbarToggler() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
