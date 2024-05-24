import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { ProductInterface } from '../../product';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProductImages } from '../../product-images';
import { FormsModule } from '@angular/forms';
import { Cart } from '../../cart';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-new-arrival-overview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-arrival-overview.component.html',
  styleUrl: './new-arrival-overview.component.css',
})
export class NewArrivalOverviewComponent implements OnInit {
  product!: ProductInterface;
  productImages!: ProductImages | any;
  productToCart!: Cart;
  pid!: string;
  productImgClicked = false;
  newImage = '';
  quantity = 1;
  size = '';
  cartId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: Product
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.product = this.productService.getProductById(params.get('id')!)!;
      this.productImages = this.productService.getProductImage(
        params.get('id')!
      );
    });
  }

  onClose() {
    this.productService.newCardClicked = true;
    this.productImgClicked = false;
    this.router.navigate(['/']);
  }

  onChangeImg(img: string) {
    this.productImgClicked = true;
    this.newImage = img;
  }

  addProductToCart(id: string) {
    this.productService.enableBuyButton = true;
    this.productToCart = {
      id: this.cartId++,
      product: this.product,
      quantity: this.quantity,
      size: this.size,
    };
    this.productService.addToCart(this.productToCart);
    //this.router.navigate(['/cart', id]);
  }

  setSize(size: string) {
    this.size = size;
  }

  onBuyProduct(id: string) {
    this.addProductToCart(id);
    this.productService.enableBuyButton = false;
    this.router.navigate(['userdetails']);
  }
}
