import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Menu } from 'src/app/shared/models/Menu';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  // Anchor Links
  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  // Array to store menu items
  menus: Menu[] = []

  // Var to add to cart
  item!: Menu;

  constructor(private menuService: MenuService, private cartService: CartService) { }

  addToCart() {
    this.cartService.addToCart(this.item);
  }

  ngOnInit(): void {
    // Import all menu items
    this.menus = this.menuService.getAll();

    // When the user scrolls the page, execute myFunction
    window.onscroll = function () { applySticky() };

    // Get the navAnchor
    var navAnchor = document.getElementById("navAnchor") as HTMLDivElement || null;

    // Get the offset position of the navAnchor
    var sticky = navAnchor.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function applySticky() {
      if (window.pageYOffset >= sticky) {
        navAnchor.classList.add("sticky")
      } else {
        navAnchor.classList.remove("sticky");
      }
    }

  }
}

