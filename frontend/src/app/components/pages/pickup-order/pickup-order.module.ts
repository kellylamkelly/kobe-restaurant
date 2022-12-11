import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupOrderRoutingModule } from './pickup-order-routing.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputContainerComponent } from '../../partials/input-container/input-container.component';
import { InputValidationComponent } from '../../partials/input-validation/input-validation.component';
import { TextInputComponent } from '../../partials/text-input/text-input.component';
import { DefaultButtonComponent } from '../../partials/default-button/default-button.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { PaypalButtonComponent } from '../../partials/paypal-button/paypal-button.component';
import { PaymentSuccessPageComponent } from './payment-success-page/payment-success-page.component';

@NgModule({
  declarations: [
    CartPageComponent,
    ItemPageComponent,
    MenuPageComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent,
    CheckoutPageComponent,
    OrderItemsListComponent,
    PaymentPageComponent,
    PaypalButtonComponent,
    PaymentSuccessPageComponent
  ],
  imports: [
    CommonModule,
    PickupOrderRoutingModule,
    ReactiveFormsModule
  ]
})
export class PickupOrderModule { }