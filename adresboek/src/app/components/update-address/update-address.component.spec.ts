import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { initialState } from '../../facade/state+/address-book.reducer';
import { UpdateAddressComponent } from './update-address.component';
import { AddressBookFacade } from 'src/app/facade/address-book.facade';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UpdateAddressComponent', () => {
  let component: UpdateAddressComponent;
  let fixture: ComponentFixture<UpdateAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAddressComponent],
      providers: [provideMockStore({ initialState })],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
