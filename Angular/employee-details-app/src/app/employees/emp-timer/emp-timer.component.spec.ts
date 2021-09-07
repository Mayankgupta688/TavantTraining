import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTimerComponent } from './emp-timer.component';

describe('EmpTimerComponent', () => {
  let component: EmpTimerComponent;
  let fixture: ComponentFixture<EmpTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
