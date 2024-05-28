import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { Product } from '../product.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../order.service';
import { UserInterface } from '../user-interface';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CartComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent implements OnInit {
  displayCarItem = true;
  userDetails: FormGroup;
  cartProduct: any = {};

  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: Product,
    private orderService: OrderService) {
    this.userDetails = new FormGroup({
      firstName: new FormControl('testFName'),
      lastName: new FormControl('testLname'),
      email: new FormControl('abc@gmail.com'),
      number: new FormControl(90908989),
      addressDetails: new FormGroup({
        address1: new FormControl('address1'),
        address2: new FormControl('address2'),
        city: new FormControl('cbe'),
        state: new FormControl('TN'),
        pinCode: new FormControl(98764),
      }),
    });

  }

  ngOnInit(): void {
    if (this.productService.getAllCartProduct().length === 0) {
      this.router.navigate(['/']);
    }

  }

  onSubmit() {
    this.userDetails.value.id = 1;
    this.route.paramMap.subscribe((param) => {
      this.cartProduct =
        this.productService.getCartProductById(+param.get('id')!)!;
    });
    console.log('testing cart product ' + this.cartProduct);

    this.orderService.createOrder(this.userDetails.value, this.cartProduct);
    this.router.navigate(['/checkout']);
  }

  onClearForm() {
    this.userDetails.reset();
  }

}
