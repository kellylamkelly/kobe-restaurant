import { Component, Input, KeyValueDiffers, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  order: Order = new Order();
  checkoutForm!: FormGroup;
  
  constructor(
    cartService: CartService, 
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private orderService: OrderService,
    private router: Router) {
      const cart = cartService.getCart();
      this.order.items = cart.items;
      this.order.subtotal = cart.subtotal;
      this.order.tax = cart.tax;
      this.order.totalPrice = cart.totalPrice;
    }

  ngOnInit(): void {
    let {name, phoneNumber} = this.userService.currentUser;
    let pickupTime = this.order.pickupTime;
    this.checkoutForm = this.formBuilder.group({
      name: [name, Validators.required],
      phoneNumber: [phoneNumber, [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      pickupTime: [pickupTime, Validators.required]
    });
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder() {
    if (this.checkoutForm.invalid) {
      this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }

    this.order.name = this.fc['name'].value;
    this.order.phoneNumber = this.fc['phoneNumber'].value;
    this.order.pickupTime = this.fc['pickupTime'].value;

    this.orderService.create(this.order).subscribe({
      next: () => {
        this.router.navigateByUrl('/order/payment');
      },
      error: (errorResponse) => {
        this.toastrService.error(errorResponse.error, 'Cart');
      }
    })
  }

  // changePickupTime(pickupTime: string) {
  //   this.order.pickupTime = pickupTime;
  // }
}