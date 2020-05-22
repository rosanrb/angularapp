import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPresentationalComponent } from './address-presentational.component';

describe('AddressPresentationalComponent', () => {
  let component: AddressPresentationalComponent;
  let fixture: ComponentFixture<AddressPresentationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressPresentationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressPresentationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
