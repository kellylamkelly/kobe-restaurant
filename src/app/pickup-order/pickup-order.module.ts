import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupOrderRoutingModule } from './pickup-order-routing.module';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './items/items.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputContainerComponent } from '../partials/input-container/input-container.component';
import { InputValidationComponent } from '../partials/input-validation/input-validation.component';
import { TextInputComponent } from '../partials/text-input/text-input.component';
import { DefaultButtonComponent } from '../partials/default-button/default-button.component';

@NgModule({
  declarations: [
    CartComponent,
    ItemPageComponent,
    ItemsComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent
  ],
  imports: [
    CommonModule,
    PickupOrderRoutingModule,
    ReactiveFormsModule
  ]
})
export class PickupOrderModule { }
