import { model, Schema, Types } from 'mongoose';
import { OrderStatus } from '../constants/order_status';
import { Menu, MenuSchema } from './menu.model';

export interface OrderItem {
    menu: Menu;
    price: number;
    quantity: number;
}

export const OrderItemSchema = new Schema<OrderItem>(
    {
        menu: { type: MenuSchema, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    }
)

export interface Order {
    id: number;
    items: OrderItem[];
    subtotal: number;
    tax: number;
    totalPrice: number;
    name: string;
    phoneNumber: string;
    pickupTime: string;
    paymentId: string;
    status: OrderStatus;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const orderSchema = new Schema<Order>(
    {
        name: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        pickupTime: { type: String, required: true },
        paymentId: { type: String },
        subtotal: { type: Number, required: true },
        tax: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
        items: { type: [OrderItemSchema], required: true },
        status: { type: String, default: OrderStatus.NEW },
        user: { type: Schema.Types.ObjectId, required: true }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        }, 
        toObject: {
            virtuals: true
        }
    }
);

export const OrderModel = model('order', orderSchema);