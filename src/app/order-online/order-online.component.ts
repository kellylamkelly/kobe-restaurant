import { Component, OnInit } from '@angular/core';
import menuJson from 'src/assets/menu.json';

@Component({
  selector: 'app-order-online',
  templateUrl: './order-online.component.html',
  styleUrls: ['./order-online.component.css']
})

export class OrderOnlineComponent implements OnInit {
  appMenus = [
    { label: "SOUP & SALADS", field: menuJson.menu.appetizers.soupAndSalads },
    { label: "APPETIZERS", field: menuJson.menu.appetizers.apps },
    { label: "SUSHI APPETIZERS", field: menuJson.menu.appetizers.sushiApps },
    { label: "NOODLES & RICE", field: menuJson.menu.appetizers.noodlesAndRice }
  ]

  teppanyakiMenus = [
    { label: "SINGLE CHOICE", field: menuJson.menu.teppanyaki.singles },
    { label: "STEAKS", field: menuJson.menu.teppanyaki.steaks },
    { label: "SENIOR & CHILDREN", field: menuJson.menu.teppanyaki.seniorAndChildren },
    { label: "SUMO CHOICE", field: menuJson.menu.teppanyaki.sumos },
    { label: "DOUBLE CHOICE", field: menuJson.menu.teppanyaki.doubles },
    { label: "TRIPLE CHOICE", field: menuJson.menu.teppanyaki.triples },
    { label: "EXTRAS", field: menuJson.menu.teppanyaki.extras }
  ]

  sushiMenus = [
    { label: "NIGIRI", field: menuJson.menu.sushi.nigiri },
    { label: "ENTR\u00C9ES", field: menuJson.menu.sushi.entrees },
    { label: "SUSHI ROLLS", field: menuJson.menu.sushi.rolls }
  ]

  constructor() { }

  ngOnInit(): void {

    // // Get the modal
    // var modal = document.getElementById("appModal") as HTMLDivElement || null;

    // // Get the button that opens the modal
    // var btn = document.getElementById("appModalButton") as HTMLButtonElement || null;

    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0] as HTMLSpanElement || null;

    // // When the user clicks the button, open the modal 
    // btn.onclick = function () {
    //   modal.style.display = "block";
    // }

    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function () {
    //   modal.style.display = "none";
    // }

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }
  }
}
