import { Schema, model } from 'mongoose';

export interface Menu {
    id: string;
    plu: number;
    name: string;
    price: number;
    desc: string;
    image: string;
    category: string;
    subcategory: string;
}

export const MenuSchema = new Schema<Menu>(
    {
        plu: { type: Number, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        desc: { type: String },
        image: { type: String },
        category: { type: String, required: true },
        subcategory: { type: String, required: true }
    },
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    }
);

export const MenuModel = model<Menu>('menu', MenuSchema);