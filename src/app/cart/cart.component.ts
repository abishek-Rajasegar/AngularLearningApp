import { Component, Input, OnInit, input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from '../product.service';
import { CommonModule, Location } from '@angular/common';
import { ProductInterface } from '../product';
import { FormsModule } from '@angular/forms';
import { Cart } from '../cart';
import { faRupiahSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  products: Cart[] = [];
  size: string = '';
  cartDetails!: Cart;
  cartTotal: number = 0;
  enableBuyButton!: boolean;

  constructor(
    private productService: Product,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.enableBuyButton = this.productService.enableBuyButton;
    this.products = this.productService.getAllCartProduct()!;
    this.products.forEach((product) => (this.cartTotal += product.price));
  }

  onCloseCart() {
    this.productService.enableBuyButton = true;
    this.location.back();
  }

  onDeleteProductFromCart(id: string) {
    const index = this.products.findIndex((product) => product.id === id);
    const pid = this.products[index].id;
    this.cartTotal -= this.products[index].price;
    this.products.splice(index, 1);
    if (index === 0) {
      this.router.navigate(['/overview', pid]);
    }
  }

  onBuyButtonClick() {
    this.productService.enableBuyButton = false;
  }
}
