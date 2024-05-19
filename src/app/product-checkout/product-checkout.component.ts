import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-checkout',
  standalone: true,
  imports: [ RouterModule],

  templateUrl: './product-checkout.component.html',
  styleUrl: './product-checkout.component.css',
})
export class ProductCheckoutComponent {
  constructor(private router: Router) {}

  onClose() {
    this.router.navigate(['/']);
  }
}
