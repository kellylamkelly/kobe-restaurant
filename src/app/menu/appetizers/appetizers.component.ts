import { Component, OnInit } from '@angular/core';
import menuJson from 'src/assets/menu.json';

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.css']
})
export class AppetizersComponent implements OnInit {
  // soupAndSalads = menuJson.menu.appetizers.soupAndSalads;
  // apps = menuJson.menu.appetizers.apps;
  // sushiApps = menuJson.menu.appetizers.sushiApps;
  // noodlesAndRice = menuJson.menu.appetizers.noodlesAndRice;

  menus = [
    {label: "SOUP & SALADS", field: menuJson.menu.appetizers.soupAndSalads},
    {label: "APPETIZERS", field: menuJson.menu.appetizers.apps}, 
    {label: "SUSHI APPETIZERS", field: menuJson.menu.appetizers.sushiApps}, 
    {label: "NOODLES & RICE", field: menuJson.menu.appetizers.noodlesAndRice}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
