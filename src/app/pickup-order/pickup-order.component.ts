import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-pickup-order',
  templateUrl: './pickup-order.component.html',
  styleUrls: ['./pickup-order.component.css']
})

export class PickupOrderComponent implements OnInit {

  cartQuantity = 0;

  constructor(cartService: CartService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
  }

  ngOnInit(): void {
  }
}
