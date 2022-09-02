import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursLocationComponent } from './hours-location.component';

describe('HoursLocationComponent', () => {
  let component: HoursLocationComponent;
  let fixture: ComponentFixture<HoursLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoursLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoursLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
