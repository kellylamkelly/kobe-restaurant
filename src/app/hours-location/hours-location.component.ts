import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hours-location',
  templateUrl: './hours-location.component.html',
  styleUrls: ['./hours-location.component.css']
})
export class HoursLocationComponent implements OnInit {
  address = '2499 E State St,';
  city = 'Hermitage, PA 16148';
  phoneNum = '(724) 981-9955';

  constructor() { }

  ngOnInit(): void {
  }

}
