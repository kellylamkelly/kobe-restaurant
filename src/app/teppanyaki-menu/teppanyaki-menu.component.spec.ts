import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeppanyakiMenuComponent } from './teppanyaki-menu.component';

describe('TeppanyakiMenuComponent', () => {
  let component: TeppanyakiMenuComponent;
  let fixture: ComponentFixture<TeppanyakiMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeppanyakiMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeppanyakiMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
