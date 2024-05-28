import { ProductInterface } from "./product";

export interface Cart {
    id: number;
    product: ProductInterface;
    quantity: number;
    size: string;
    productTotal: number
}
