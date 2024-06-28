import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Product } from '../service/product.service';

@Component({
  selector: 'app-product-checkout',
  standalone: true,
  imports: [RouterModule],

  templateUrl: './product-checkout.component.html',
  styleUrl: './product-checkout.component.css',
})
export class ProductCheckoutComponent {
  constructor(private router: Router, private productService: Product) { }

  onClose() {
    this.productService.cartProductDetails = [];
    this.productService.subject.next(this.productService.cartProductDetails);
    this.router.navigate(['/']);
  }
}
