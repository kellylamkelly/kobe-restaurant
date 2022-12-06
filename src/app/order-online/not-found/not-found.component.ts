import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  @Input() visible = false;
  @Input() notFoundMessage = "Sorry, we couldn't find what you were looking for!";
  @Input() resetLinkText = "Reset";
  @Input() resetLinkRoute = "/order/menu";

  constructor() { }

  ngOnInit(): void {
  }

}
