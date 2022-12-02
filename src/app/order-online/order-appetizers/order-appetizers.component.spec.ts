import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAppetizersComponent } from './order-appetizers.component';

describe('OrderAppetizersComponent', () => {
  let component: OrderAppetizersComponent;
  let fixture: ComponentFixture<OrderAppetizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderAppetizersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderAppetizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
