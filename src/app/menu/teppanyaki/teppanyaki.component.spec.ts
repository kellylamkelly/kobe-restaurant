import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeppanyakiComponent } from './teppanyaki.component';

describe('TeppanyakiComponent', () => {
  let component: TeppanyakiComponent;
  let fixture: ComponentFixture<TeppanyakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeppanyakiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeppanyakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
