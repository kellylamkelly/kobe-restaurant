import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Menu } from 'src/app/shared/models/Menu';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(menu: Menu): void {
    let cartItem = this.cart.items.find(item => item.menu.id === menu.id);
    if (cartItem) {
      this.changeQuantity(menu.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(menu));
  }

  removeFromCart(itemID: number): void {
    this.cart.items = this.cart.items.filter(item => item.menu.id != itemID)
  }

  changeQuantity(itemID: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.menu.id === itemID);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }

}
