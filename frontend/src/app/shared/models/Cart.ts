import { CartItem } from "./CartItem";

export class Cart {
    items: CartItem[] = [];
    subtotal: number = 0;
    tax: number = 0;
    totalPrice: number = 0;
    totalCount: number = 0;
}