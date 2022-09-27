import { Component, OnInit } from '@angular/core';
import menuJson from 'src/assets/menu.json';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})

export class AppMenuComponent implements OnInit {

  soupAndSalads = menuJson.menu.appetizers.soupAndSalads;
  apps = menuJson.menu.appetizers.apps;

  constructor() { }

  ngOnInit(): void {
  }
}
