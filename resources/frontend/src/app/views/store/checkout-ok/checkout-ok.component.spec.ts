import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutOkComponent } from './checkout-ok.component';

describe('CheckoutOkComponent', () => {
  let component: CheckoutOkComponent;
  let fixture: ComponentFixture<CheckoutOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
