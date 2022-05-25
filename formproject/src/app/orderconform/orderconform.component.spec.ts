import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderconformComponent } from './orderconform.component';

describe('OrderconformComponent', () => {
  let component: OrderconformComponent;
  let fixture: ComponentFixture<OrderconformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderconformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderconformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
