import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { initialState } from '../../../facade/state+/address-book.reducer';
import { AddressBookFacade } from 'src/app/facade/address-book.facade';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AddUpdatePartnerComponent } from './add-update-partner.component';

describe('AddUpdateAddressComponent', () => {
  let component: AddUpdatePartnerComponent;
  let fixture: ComponentFixture<AddUpdatePartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdatePartnerComponent],
      providers: [provideMockStore({ initialState })],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdatePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
