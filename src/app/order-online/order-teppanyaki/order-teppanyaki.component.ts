import { Component, OnInit } from '@angular/core';
import menuJson from 'src/assets/menu.json';

@Component({
  selector: 'app-order-teppanyaki',
  templateUrl: './order-teppanyaki.component.html',
  styleUrls: ['./order-teppanyaki.component.css']
})
export class OrderTeppanyakiComponent implements OnInit {

  teppanyakiMenus = [
    { label: "SINGLE CHOICE", field: menuJson.menu.teppanyaki.singles },
    { label: "STEAKS", field: menuJson.menu.teppanyaki.steaks },
    { label: "SENIOR & CHILDREN", field: menuJson.menu.teppanyaki.seniorAndChildren },
    { label: "SUMO CHOICE", field: menuJson.menu.teppanyaki.sumos },
    { label: "DOUBLE CHOICE", field: menuJson.menu.teppanyaki.doubles },
    { label: "TRIPLE CHOICE", field: menuJson.menu.teppanyaki.triples },
    { label: "EXTRAS", field: menuJson.menu.teppanyaki.extras }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
