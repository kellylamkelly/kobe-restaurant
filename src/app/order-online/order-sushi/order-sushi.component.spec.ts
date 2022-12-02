import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSushiComponent } from './order-sushi.component';

describe('OrderSushiComponent', () => {
  let component: OrderSushiComponent;
  let fixture: ComponentFixture<OrderSushiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSushiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSushiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
