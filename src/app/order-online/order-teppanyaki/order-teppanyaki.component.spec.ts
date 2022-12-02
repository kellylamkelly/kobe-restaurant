import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTeppanyakiComponent } from './order-teppanyaki.component';

describe('OrderTeppanyakiComponent', () => {
  let component: OrderTeppanyakiComponent;
  let fixture: ComponentFixture<OrderTeppanyakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTeppanyakiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderTeppanyakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
