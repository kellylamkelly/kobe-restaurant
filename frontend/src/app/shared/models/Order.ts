import { CartItem } from "./CartItem";

export class Order {
    id!: number;
    items!: CartItem[];
    subtotal!: number;
    tax!: number;
    totalPrice!: number;
    name!: string;
    phoneNumber!: string;
    pickupTime: string = "ASAP (~20 mins)";
    paymentId!: string;
    createdAt!: string;
    status!: string;
}