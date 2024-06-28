import { Component, Input, OnInit, input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from '../service/product.service';
import { CommonModule, Location } from '@angular/common';
import { ProductInterface } from '../interface/product.interface';
import { FormsModule } from '@angular/forms';
import { Cart } from '../interface/cart.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartProducts: Cart[] = [];
  size: string = '';
  cartDetails!: Cart;
  cartTotal: number = 0;
  enableBuyButton!: boolean;
  selectedToBuy = '';

  constructor(
    private productService: Product,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.enableBuyButton = this.productService.enableBuyButton;
    this.cartProducts = this.productService.getAllCartProduct()!;
    console.log(this.cartProducts);
    this.cartTotal = this.productService.totalCartValue;
    this.productService.enableBuyButton = this.productService.enableBuyButton === false ? true : false;
  }

  onCloseCart() {
    this.productService.enableBuyButton = true;
    this.location.back();
  }

  onDeleteProductFromCart(id: string) {
    const index = this.cartProducts.findIndex((product) => product.product.id === id);
    const pid = this.cartProducts[index].product.id;
    this.cartTotal -= this.cartProducts[index].product.price * this.cartProducts[index].quantity;
    this.cartProducts.splice(index, 1);
    this.productService.subject.next(this.cartProducts);
    if (this.cartProducts.length === 0) {
      this.productService.totalCartValue = 0;
      this.cartTotal = this.productService.totalCartValue;
      this.router.navigate(['/overview', pid]);
    }
  }

  onBuyButtonClick(id: any, size: any) {
    this.productService.enableBuyButton = false;
    let cartProductId = this.productService.getAllCartProduct().find(product => product.product.id === id && product.size === size)!.id;
    console.log("cartProduct Id: " + cartProductId);
    this.router.navigate(['/userdetails', cartProductId]);
  }
}
