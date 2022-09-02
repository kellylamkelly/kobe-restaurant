import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiMenuComponent } from './sushi-menu.component';

describe('SushiMenuComponent', () => {
  let component: SushiMenuComponent;
  let fixture: ComponentFixture<SushiMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SushiMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SushiMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
