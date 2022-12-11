import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-payment-success-page',
  templateUrl: './payment-success-page.component.html',
  styleUrls: ['./payment-success-page.component.css']
})
export class PaymentSuccessPageComponent implements OnInit {
  
  order!: Order;

  constructor(
    activatedRoute: ActivatedRoute,
    orderService: OrderService) {
    const params = activatedRoute.snapshot.params;
    if (!params['orderId']) return;

    orderService.confirmPaidById(params['orderId']).subscribe(order => {
      this.order = order;
    })
  }

  ngOnInit(): void {
  }

}
