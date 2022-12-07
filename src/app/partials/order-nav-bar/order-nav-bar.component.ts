import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-order-nav-bar',
  templateUrl: './order-nav-bar.component.html',
  styleUrls: ['./order-nav-bar.component.css']
})
export class OrderNavBarComponent implements OnInit {
  
  cartQuantity = 0;

  constructor(cartService: CartService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
  }

  ngOnInit(): void {
  }

}
