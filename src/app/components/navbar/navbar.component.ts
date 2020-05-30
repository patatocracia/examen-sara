import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

public active: number;

  constructor() {
    this.active = 1;
  }

  ngOnInit(): void {
  }

}
