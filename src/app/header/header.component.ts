import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Kobe Japanese Restaurant';
  sym1 = '神';
  sym2 = '戸';
  sym3 = '料';
  sym4 = '亭';

  constructor() { }

  ngOnInit(): void {
  }

}
