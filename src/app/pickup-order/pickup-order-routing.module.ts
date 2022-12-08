import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PickupOrderComponent } from './pickup-order.component';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './items/items.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: '', component: PickupOrderComponent, children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: ItemsComponent},
      { path: 'menu/:id', component: ItemPageComponent},
      { path: 'cart', component: CartComponent },
      { path: 'login', component: LoginPageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickupOrderRoutingModule { }