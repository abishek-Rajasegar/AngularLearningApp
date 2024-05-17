import { Component, Input, input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { Product } from './product.service';
import { NewArrivalOverviewComponent } from './new-arrival/new-arrival-overview/new-arrival-overview.component';
import { ProductInterface } from './product';
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart/cart.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NewArrivalComponent,
    NewArrivalOverviewComponent,
    CartComponent,
    UserDetailComponent,
    ProductCheckoutComponent]
})
export class AppComponent {

  newCardClicked = this.productList.newCardClicked;
  products: ProductInterface[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private productList: Product) {
    this.products = this.productList.getAllProducts();
    console.log('appComp ' + this.newCardClicked);
  }


  onViewProduct(id: string) {
    this.newCardClicked = true;
    console.log('appComp ' + this.newCardClicked);
    this.router.navigate(['overview', id], { relativeTo: this.route });
  }

  getProductById(id: string): ProductInterface | undefined {
    return this.products.find(product => product.id === id);
  }
}
