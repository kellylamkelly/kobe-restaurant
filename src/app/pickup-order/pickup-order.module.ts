import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupOrderRoutingModule } from './pickup-order-routing.module';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './items/items.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    CartComponent,
    ItemPageComponent,
    ItemsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    PickupOrderRoutingModule
  ]
})
export class PickupOrderModule { }
