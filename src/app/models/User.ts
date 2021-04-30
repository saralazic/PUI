import { Product } from './Product';

export interface User {
    username: string;
    type: number;
    password: string;
    first_name: string;
    last_name: string;
    phone: string;
    address: string;
    cart: { prod: Product, quantity: number }[];
    notifications: string[];
}