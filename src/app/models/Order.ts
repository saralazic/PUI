import { Product } from "./Product";
import { User } from "./User";

export interface Order{
    buyer: User;
    orders: {prod: Product, quantity: number}[];
}