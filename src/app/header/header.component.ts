import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;
  constructor(private productService: Product,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.subject.subscribe(value => this.cartItemCount = value.length);
  }

  onDisplayCart() {
    this.router.navigate(['/cart']);
  }
}
