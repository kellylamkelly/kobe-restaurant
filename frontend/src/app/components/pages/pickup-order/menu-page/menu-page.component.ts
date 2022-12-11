import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/shared/models/Menu';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  // Anchor Links
  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  // Arrays to store menu items
  appsMenu: Menu[] = []
  teppMenu: Menu[] = []
  combosMenu: Menu[] = []
  nigiriMenu: Menu[] = []
  rollsMenu: Menu[] = []
  sushiEntreesMenu: Menu[] = []

  constructor(private menuService: MenuService) {
    // Import all menu items
    let appsObservable: Observable<Menu[]> = this.menuService.getApps();
    let teppObservable: Observable<Menu[]> = this.menuService.getTepp();;
    let combosObservable: Observable<Menu[]> = this.menuService.getCombos();
    let nigiriObservable: Observable<Menu[]> = this.menuService.getNigiri();
    let rollsObservable: Observable<Menu[]> = this.menuService.getRolls();
    let sushiEntreesObservable: Observable<Menu[]> = this.menuService.getSushiEntrees();

    appsObservable.subscribe((serverMenu) => {
      this.appsMenu = serverMenu;
    })

    teppObservable.subscribe((serverMenu) => {
      this.teppMenu = serverMenu;
    })

    combosObservable.subscribe((serverMenu) => {
      this.combosMenu = serverMenu;
    })

    nigiriObservable.subscribe((serverMenu) => {
      this.nigiriMenu = serverMenu;
    })

    rollsObservable.subscribe((serverMenu) => {
      this.rollsMenu = serverMenu;
    })

    sushiEntreesObservable.subscribe((serverMenu) => {
      this.sushiEntreesMenu = serverMenu;
    })
  }

  ngOnInit(): void {

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

