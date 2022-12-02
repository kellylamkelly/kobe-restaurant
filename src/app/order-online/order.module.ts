import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CartComponent } from './cart/cart.component';
import { OrderAppetizersComponent } from './order-appetizers/order-appetizers.component';
import { OrderTeppanyakiComponent } from './order-teppanyaki/order-teppanyaki.component';
import { OrderSushiComponent } from './order-sushi/order-sushi.component';


@NgModule({
  declarations: [
    CartComponent,
    OrderAppetizersComponent,
    OrderTeppanyakiComponent,
    OrderSushiComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
