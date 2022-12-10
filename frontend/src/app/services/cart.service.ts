import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Menu } from 'src/app/shared/models/Menu';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() {}

  addToCart(menu: Menu): void {
    let cartItem = this.cart.items.find(item => item.menu.id === menu.id);
    if (cartItem) {
      this.changeQuantity(cartItem.menu.id, cartItem.quantity + 1);
      return;
    }

    this.cart.items.push(new CartItem(menu));
    this.setCartToLocalStorage();
  }

  removeFromCart(itemID: number): void {
    this.cart.items = this.cart.items.filter(item => item.menu.id != itemID)
    this.setCartToLocalStorage();
  }

  changeQuantity(itemID: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.menu.id === itemID);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.menu.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart(): Cart{
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0)
    this.cart.subtotal = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0)
    this.cart.tax = Number((this.cart.subtotal * 0.06).toFixed(2));
    this.cart.totalPrice = Number((this.cart.subtotal + this.cart.tax).toFixed(2));
    
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }
}
