import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbiStockComponent } from './sbi-stock.component';

describe('SbiStockComponent', () => {
  let component: SbiStockComponent;
  let fixture: ComponentFixture<SbiStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbiStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbiStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
