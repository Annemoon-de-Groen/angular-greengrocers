import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartRouteComponent } from './cart-route.component';

describe('CartRouteComponent', () => {
  let component: CartRouteComponent;
  let fixture: ComponentFixture<CartRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartRouteComponent]
    });
    fixture = TestBed.createComponent(CartRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
