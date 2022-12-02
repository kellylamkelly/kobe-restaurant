import { Component, OnInit } from '@angular/core';
import menuJson from 'src/assets/menu.json';

@Component({
  selector: 'app-order-sushi',
  templateUrl: './order-sushi.component.html',
  styleUrls: ['./order-sushi.component.css']
})

export class OrderSushiComponent implements OnInit {

  sushiMenus = [
    { label: "NIGIRI", field: menuJson.menu.sushi.nigiri },
    { label: "ENTR\u00C9ES", field: menuJson.menu.sushi.entrees },
    { label: "SUSHI ROLLS", field: menuJson.menu.sushi.rolls }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
