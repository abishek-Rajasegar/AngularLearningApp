import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../service/product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductInterface } from '../interface/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-arrival',
  standalone: true,
  templateUrl: './new-arrival.component.html',
  styleUrl: './new-arrival.component.css',
  imports: [CommonModule]
})
export class NewArrivalComponent implements OnInit {
  products: ProductInterface[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: Product) {

  }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  onClickNewArrival(id: string) {
    this.router.navigate(['overview', id], { relativeTo: this.route });
  }

}

