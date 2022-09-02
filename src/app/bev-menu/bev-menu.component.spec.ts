import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevMenuComponent } from './bev-menu.component';

describe('BevMenuComponent', () => {
  let component: BevMenuComponent;
  let fixture: ComponentFixture<BevMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BevMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BevMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
