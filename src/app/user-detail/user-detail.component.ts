import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { Product } from '../product.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CartComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  displayCarItem = true;

  userDetails: FormGroup = new FormGroup({
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

  constructor(private router: Router, private productService: Product) {}

  onBuyProduct() {
    this.router.navigate(['checkout']);
  }

  onSubmit() {
    console.log(this.userDetails);
  }

  onClearForm() {
    this.userDetails.reset();
  }
}
