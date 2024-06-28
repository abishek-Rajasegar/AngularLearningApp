import { Cart } from "./cart.interface";
import { UserInterface } from "./user.interface";

export interface OrderInterface {
    id: number;
    users: UserInterface;
    productOrdered: Cart;
}