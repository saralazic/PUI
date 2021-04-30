import { User } from '../models/User';

export const BUYER = 0;
export const SELLER = 1;

export const USERS: User[] = [
    {
        username: "pera123",
        type: BUYER,
        password: "pera123",
        first_name: "Petar",
        last_name: "Petrovic",
        phone: "064/1812190",
        address: "Vardarska 1, 14000 Valjevo",
        cart: [],
        notifications: []
    },
    {
        username: "zika123",
        type: BUYER,
        password: "zika123",
        first_name: "Zivorad",
        last_name: "Petrovic",
        phone: "064/1812195",
        address: "Vladike Nikolaja 4, 11000 Beograd",
        cart: [],
        notifications: []
    },
    {
        username: "laza123",
        type: SELLER,
        password: "laza123",
        first_name: "Lazar",
        last_name: "Lazarevic",
        phone: "062/1831100",
        address: "Visegradska 3, 15000 Sabac",
        cart: [],
        notifications: []
    },
    {
        username: "mina123",
        type: BUYER,
        password: "mina23",
        first_name: "Mina",
        last_name: "Lazic",
        phone: "061/48900897",
        address: "Dimitrija Tucovica 3, 11000 Beograd",
        cart: [],
        notifications: []
    }
];
