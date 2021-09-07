import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpNotifierComponent } from './emp-notifier.component';

describe('EmpNotifierComponent', () => {
  let component: EmpNotifierComponent;
  let fixture: ComponentFixture<EmpNotifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpNotifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
