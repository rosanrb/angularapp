import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { initialState } from '../../facade/state+/address-book.reducer';
import { AddAddressComponent } from './add-address.component';
import { AddressBookFacade } from 'src/app/facade/address-book.facade';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('AddAddressComponent', () => {
  let component: AddAddressComponent;
  let fixture: ComponentFixture<AddAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddAddressComponent],
      providers: [provideMockStore({ initialState })],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
