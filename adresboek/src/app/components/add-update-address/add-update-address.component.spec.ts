import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { initialState } from '../../facade/state+/address-book.reducer';
import { AddUpdateAddressComponent } from './add-update-address.component';
import { AddressBookFacade } from 'src/app/facade/address-book.facade';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('AddUpdateAddressComponent', () => {
  let component: AddUpdateAddressComponent;
  let fixture: ComponentFixture<AddUpdateAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateAddressComponent],
      providers: [provideMockStore({ initialState })],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
