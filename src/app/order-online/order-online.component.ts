import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-order-online',
  templateUrl: './order-online.component.html',
  styleUrls: ['./order-online.component.css']
})

export class OrderOnlineComponent implements OnInit {

  cartQuantity = 0;

  constructor(cartService: CartService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
  }

  ngOnInit(): void {
  }
}
