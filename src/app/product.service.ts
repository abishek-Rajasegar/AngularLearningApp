import { Injectable } from "@angular/core";
import { ProductInterface } from "./product";
import { ProductImages } from "./product-images";
import { Cart } from "./cart";

@Injectable({
    providedIn: 'root'
})
export class Product {

    newCardClicked = false;

    cartProductDetails: Cart[] = [];


    products: ProductInterface[] = [
        { id: '001', name: 'Grey T-Shirt', img: 'https://st2.depositphotos.com/5745954/11642/i/950/depositphotos_116422000-stock-photo-tattooed-bearded-guy-in-blank.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi ad unde quo fugit saepe eveniet dignissimos inventore odio similique perferendis, commodi aliquid porro ipsa id vel maxime possimus tempora.', price: 125 },
        { id: '002', name: 'Grey T-Shirt', img: 'https://cdn.pixabay.com/photo/2024/05/13/04/47/ai-generated-8758044_960_720.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi ad unde quo fugit saepe eveniet dignissimos inventore odio similique perferendis, commodi aliquid porro ipsa id vel maxime possimus tempora. ', price: 134 },
        { id: '003', name: 'Grey T-Shirt', img: 'https://cdn.pixabay.com/photo/2024/05/09/13/35/ai-generated-8751040_960_720.png', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi ad unde quo fugit saepe eveniet dignissimos inventore odio similique perferendis, commodi aliquid porro ipsa id vel maxime possimus tempora.', price: 512 },
        { id: '004', name: 'Grey T-Shirt', img: 'https://cdn.pixabay.com/photo/2021/01/16/18/19/man-5923037_1280.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi ad unde quo fugit saepe eveniet dignissimos inventore odio similique perferendis, commodi aliquid porro ipsa id vel maxime possimus tempora.', price: 120 },
        { id: '005', name: 'Grey T-Shirt', img: 'https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520207_640.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi ad unde quo fugit saepe eveniet dignissimos inventore odio similique perferendis, commodi aliquid porro ipsa id vel maxime possimus tempora.', price: 120 },
        { id: '006', name: 'Grey T-Shirt', img: 'https://cdn.pixabay.com/photo/2020/06/05/15/21/yellow-5263498_1280.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi ad unde quo fugit saepe eveniet dignissimos inventore odio similique perferendis, commodi aliquid porro ipsa id vel maxime possimus tempora.', price: 120 }
    ];

    productImages: ProductImages[] = [
        { pid: '001', images: ['https://www.nearlynatural.com/cdn/shop/products/artificial-3-mini-cedar-pine-tree-indooroutdoor-nearly-natural-309349.jpg?v=1715267419&width=750', 'https://st2.depositphotos.com/5745954/11642/i/950/depositphotos_116422000-stock-photo-tattooed-bearded-guy-in-blank.jpg', 'https://www.nearlynatural.com/cdn/shop/products/artificial-3-mini-cedar-pine-tree-indooroutdoor-nearly-natural-309349.jpg?v=1715267419&width=750', 'https://st2.depositphotos.com/5745954/11642/i/950/depositphotos_116422000-stock-photo-tattooed-bearded-guy-in-blank.jpg', 'https://www.nearlynatural.com/cdn/shop/products/artificial-3-mini-cedar-pine-tree-indooroutdoor-nearly-natural-309349.jpg?v=1715267419&width=750'] }
    ];

    addToCart(product: Cart) {
        const index = this.cartProductDetails.findIndex(cartProduct => cartProduct.id === product.id);
        const size = this.cartProductDetails.findIndex(cartProduct => cartProduct.size === product.size);
 
        if (index !== -1 && size !== -1) {
            this.cartProductDetails[index].quantity += product.quantity;
            this.cartProductDetails[index].price += product.price;
        } else {
            this.cartProductDetails.push(product);
        }
    }

    getAllCartProduct() {
        return this.cartProductDetails;
    }

    getAllProducts() {
        return this.products.slice();
    }

    getProductById(id: string) {
        return this.products.find(product => product.id === id);
    }

    getProductImage(id: string) {
        return this.productImages.find(productImage => productImage.pid === id);
    }

}