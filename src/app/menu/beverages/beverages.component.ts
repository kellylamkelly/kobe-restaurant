import { Component, OnInit } from '@angular/core';
import menuJson from 'src/assets/menu.json';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {

  menus = [
    {label: "DRINKS", field: menuJson.menu.beverages.nonAlcohol},
    {label: "COCKTAILS", field: menuJson.menu.beverages.cocktails}, 
    {label: "BEERS", field: menuJson.menu.beverages.beers},
    {label: "WINES", field: menuJson.menu.beverages.wine}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
