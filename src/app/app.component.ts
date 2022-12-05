import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () { applySticky() };

    // Get the navbar
    var navBar = document.getElementById("navBar") as HTMLDivElement || null;;

    // Get the offset position of the navbar
    var sticky = navBar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function applySticky() {
      if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky")
      } else {
        navBar.classList.remove("sticky");
      }
    }
  }
}