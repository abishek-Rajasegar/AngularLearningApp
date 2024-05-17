import { Routes } from '@angular/router';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { NewArrivalOverviewComponent } from './new-arrival/new-arrival-overview/new-arrival-overview.component';
import { CartComponent } from './cart/cart.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';

export const routes: Routes = [
    { path: '', component: NewArrivalComponent },
    { path: 'overview/:id', component: NewArrivalOverviewComponent },
    { path: 'cart/:id', component: CartComponent },
    { path: 'userdetails', component: UserDetailComponent },
    { path: 'checkout', component: ProductCheckoutComponent }
];
