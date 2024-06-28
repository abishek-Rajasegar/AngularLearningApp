import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInterface } from '../../interface/product.interface';
import { CommonModule } from '@angular/common';
import { ProductImages } from '../../interface/product-images.interface';
import { FormsModule } from '@angular/forms';
import { Cart } from '../../interface/cart.interface';

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
      productTotal: this.product.price * this.quantity
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
    this.router.navigate(['userdetails', id]);
  }
}
