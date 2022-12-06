import { Menu } from "./Menu";

export class CartItem {
    constructor(public menu: Menu){
    }
    
    quantity: number = 1;
    price: number = this.menu.price;
}