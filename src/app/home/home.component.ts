import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'WELCOME';
  desc = 'We offer guests a Teppanyaki dining experience along with a variety of sushi and sashimi options. We look forward to serving you!';

  constructor() { }

  ngOnInit(): void {
  }

}
