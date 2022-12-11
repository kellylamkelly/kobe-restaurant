import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PickupOrderComponent } from './pickup-order.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

const routes: Routes = [
  {
    path: '', component: PickupOrderComponent, children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuPageComponent},
      { path: 'menu/:id', component: ItemPageComponent},
      { path: 'cart', component: CartPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: 'checkout', component: CheckoutPageComponent },
      { path: 'payment', component: PaymentPageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickupOrderRoutingModule { }
