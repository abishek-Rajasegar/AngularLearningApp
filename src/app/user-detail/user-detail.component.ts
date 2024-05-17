import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  constructor(private router: Router) { }

  onBuyProduct() {
    this.router.navigate(['checkout']);

  }

}
