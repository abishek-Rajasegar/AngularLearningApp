import { Cart } from "./cart";
import { UserInterface } from "./user-interface";

export interface OrderInterface {
    id: number;
    users: UserInterface;
    productOrdered: Cart;

}
