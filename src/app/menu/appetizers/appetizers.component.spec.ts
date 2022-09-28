import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppetizersComponent } from './appetizers.component';

describe('AppetizersComponent', () => {
  let component: AppetizersComponent;
  let fixture: ComponentFixture<AppetizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppetizersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppetizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
