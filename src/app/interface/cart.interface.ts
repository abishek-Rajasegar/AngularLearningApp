import { ProductInterface } from "./product.interface";

export interface Cart {
    id: number;
    product: ProductInterface;
    quantity: number;
    size: string;
    productTotal: number
}
