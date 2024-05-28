import { Injectable } from '@angular/core';
import { ProductInterface } from './product';
import { ProductImages } from './product-images';
import { Cart } from './cart';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Product {
  newCardClicked = false;
  cartProductDetails: Cart[] = [];
  enableBuyButton = true;
  totalCartValue = 0;
  cartCount = 0;
  subject = new Subject<Cart[]>();

  products: ProductInterface[] = [
    {
      id: '001',
      name: 'Grey T-Shirt',
      img: 'https://st2.depositphotos.com/5745954/11642/i/950/depositphotos_116422000-stock-photo-tattooed-bearded-guy-in-blank.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi ad unde quo fugit saepe eveniet dignissimos inventore odio similique perferendis, commodi aliquid porro ipsa id vel maxime possimus tempora.',
      price: 125,
      discount: 10
    },
    {
      id: '002',
      name: 'White T-Shirt',
      img: 'https://cdn.pixabay.com/photo/2024/05/13/04/47/ai-generated-8758044_960_720.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi ad unde quo fugit saepe eveniet dignissimos inventore odio similique perferendis, commodi aliquid porro ipsa id vel maxime possimus tempora. ',
      price: 134,
      discount: 25
    },
    {
      id: '003',
      name: 'Green T-Shirt',
      img: 'https://cdn.pixabay.com/photo/2024/05/09/13/35/ai-generated-8751040_960_720.png',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi ad unde quo fugit saepe eveniet dignissimos inventore odio similique perferendis, commodi aliquid porro ipsa id vel maxime possimus tempora.',
      price: 512,
      discount: 15
    },
    {
      id: '004',
      name: 'White T-Shirt',
      img: 'https://cdn.pixabay.com/photo/2021/01/16/18/19/man-5923037_1280.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi ad unde quo fugit saepe eveniet dignissimos inventore odio similique perferendis, commodi aliquid porro ipsa id vel maxime possimus tempora.',
      price: 120,
      discount: 30
    },
    {
      id: '005',
      name: 'Black T-Shirt',
      img: 'https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520207_640.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi ad unde quo fugit saepe eveniet dignissimos inventore odio similique perferendis, commodi aliquid porro ipsa id vel maxime possimus tempora.',
      price: 120,
      discount: 12
    },
    {
      id: '006',
      name: 'Yellow T-Shirt',
      img: 'https://cdn.pixabay.com/photo/2020/06/05/15/21/yellow-5263498_1280.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi ad unde quo fugit saepe eveniet dignissimos inventore odio similique perferendis, commodi aliquid porro ipsa id vel maxime possimus tempora.',
      price: 120,
      discount: 15
    },
  ];

  productImages: ProductImages[] = [
    {
      pid: '001',
      images: [
        'https://www.nearlynatural.com/cdn/shop/products/artificial-3-mini-cedar-pine-tree-indooroutdoor-nearly-natural-309349.jpg?v=1715267419&width=750',
        'https://st2.depositphotos.com/5745954/11642/i/950/depositphotos_116422000-stock-photo-tattooed-bearded-guy-in-blank.jpg',
        'https://www.nearlynatural.com/cdn/shop/products/artificial-3-mini-cedar-pine-tree-indooroutdoor-nearly-natural-309349.jpg?v=1715267419&width=750',
        'https://st2.depositphotos.com/5745954/11642/i/950/depositphotos_116422000-stock-photo-tattooed-bearded-guy-in-blank.jpg',
        'https://www.nearlynatural.com/cdn/shop/products/artificial-3-mini-cedar-pine-tree-indooroutdoor-nearly-natural-309349.jpg?v=1715267419&width=750',
      ],
    },
  ];

  addToCart(product: Cart) {
    product.id = this.cartCount++;
    
    const index = this.cartProductDetails.findIndex(
      (cartProduct) => cartProduct.product.id === product.product.id
    );
    console.log(index);
    const size = index === -1 ? false : this.cartProductDetails[index].size === product.size;

    if (size) {
      this.cartProductDetails[index].quantity += product.quantity;
    } else {
      this.cartProductDetails.push(product);
    }
    this.totalCartValue += product.quantity * product.product.price;
    this.subject.next(this.cartProductDetails);

  }

  getCartProductById(id: number) {
    console.log(id);

    return this.cartProductDetails.find(product => product.id === id)
  }

  getAllCartProduct() {
    this.subject.next(this.cartProductDetails);
    return this.cartProductDetails;
  }

  getAllProducts() {
    return this.products.slice();
  }

  getProductById(id: string) {
    return this.products.find((product) => product.id === id);
  }

  getProductImage(id: string) {
    return this.productImages.find((productImage) => productImage.pid === id);
  }

}
