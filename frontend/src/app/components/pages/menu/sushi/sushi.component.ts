import { Component, OnInit } from '@angular/core';
import menuJson from 'src/assets/menu.json';

@Component({
  selector: 'app-sushi',
  templateUrl: './sushi.component.html',
  styleUrls: ['./sushi.component.css']
})
export class SushiComponent implements OnInit {

  nigiriAndEntrees = [
    {label: "NIGIRI", field: menuJson.menu.sushi.nigiri},
    {label: "ENTR\u00C9ES", field: menuJson.menu.sushi.entrees}
  ]

  rolls = {label: "SUSHI ROLLS", field: menuJson.menu.sushi.rolls}

  constructor() { }

  ngOnInit(): void {
  }

}
