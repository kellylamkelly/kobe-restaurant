import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNavBarComponent } from './order-nav-bar.component';

describe('OrderNavBarComponent', () => {
  let component: OrderNavBarComponent;
  let fixture: ComponentFixture<OrderNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
