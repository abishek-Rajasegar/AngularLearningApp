import { Component, Input, OnInit, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.service';
import { CommonModule, Location } from '@angular/common';
import { ProductInterface } from '../product';
import { FormsModule } from '@angular/forms';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  products: Cart[] = [];
  size: string = '';
  cartDetails!: Cart;
  cartTotal: number = 0;

  constructor(private productService: Product,
    private location: Location, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.products = this.productService.getAllCartProduct()!;
    this.products.forEach(product => this.cartTotal += product.price)
  }

  onCloseCart() {
    this.location.back();
  }

  onDeleteProductFromCart(id: string) {
    const index = this.products.findIndex(product => product.id === id);
    this.cartTotal -= this.products[index].price;
    this.products.splice(index, 1);
  }

}
