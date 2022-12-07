import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupOrderRoutingModule } from './pickup-order-routing.module';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './items/items.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartComponent,
    ItemPageComponent,
    ItemsComponent,
    NotFoundComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    PickupOrderRoutingModule,
    ReactiveFormsModule
  ]
})
export class PickupOrderModule { }
