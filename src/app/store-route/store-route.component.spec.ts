import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRouteComponent } from './store-route.component';

describe('StoreRouteComponent', () => {
  let component: StoreRouteComponent;
  let fixture: ComponentFixture<StoreRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreRouteComponent]
    });
    fixture = TestBed.createComponent(StoreRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
