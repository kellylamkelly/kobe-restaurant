import { Menu } from "./Menu";

export class CartItem {
    constructor(menu: Menu){
        this.menu = menu;
    }

    menu: Menu;
    quantity: number = 1;

    get price(): number {
        return this.menu.price * this.quantity;
    }
}