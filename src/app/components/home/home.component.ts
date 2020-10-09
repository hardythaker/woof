import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  icons: string[] = [
    'fas fa-mobile-alt',
    'far fa-clock',
    'far fa-file-alt',
    'fas fa-bullhorn',
  ];
}
