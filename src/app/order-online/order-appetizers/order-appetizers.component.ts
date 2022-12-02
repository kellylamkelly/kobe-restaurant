import { Component, OnInit } from '@angular/core';
import menuJson from 'src/assets/menu.json';

@Component({
  selector: 'app-order-appetizers',
  templateUrl: './order-appetizers.component.html',
  styleUrls: ['./order-appetizers.component.css']
})

export class OrderAppetizersComponent implements OnInit {

  appMenus = [
    { label: "SOUP & SALADS", field: menuJson.menu.appetizers.soupAndSalads },
    { label: "APPETIZERS", field: menuJson.menu.appetizers.apps },
    { label: "SUSHI APPETIZERS", field: menuJson.menu.appetizers.sushiApps },
    { label: "NOODLES & RICE", field: menuJson.menu.appetizers.noodlesAndRice }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
