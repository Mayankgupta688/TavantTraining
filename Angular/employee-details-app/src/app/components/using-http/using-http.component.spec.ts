import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingHttpComponent } from './using-http.component';

describe('UsingHttpComponent', () => {
  let component: UsingHttpComponent;
  let fixture: ComponentFixture<UsingHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
