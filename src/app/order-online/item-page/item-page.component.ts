import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Menu } from 'src/app/shared/models/Menu';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  menu!: Menu;

  constructor(activatedRoute: ActivatedRoute, menuService: MenuService,
    private cartService: CartService, private router: Router) { 
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
      this.menu = menuService.getItemByID(Number(params['id']));
    })
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.menu);
    this.router.navigateByUrl('/order/cart');
  }
}
