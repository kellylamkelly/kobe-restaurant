import { Component, OnInit } from '@angular/core';
import menuJson from 'src/assets/menu.json';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  menus = [
    {label: "DESSERT", field: menuJson.menu.dessert}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
