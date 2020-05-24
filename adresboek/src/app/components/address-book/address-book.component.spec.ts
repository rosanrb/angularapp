import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AddressBookComponent } from './address-book.component';
import { AddressBookFacade } from 'src/app/facade/address-book.facade';
import { RouterTestingModule } from '@angular/router/testing';
import { initialState } from '../../facade/state+/address-book.reducer';
import { of } from 'rxjs';

describe('AddressBookComponent', () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookComponent ],
      providers: [
          provideMockStore({ initialState }),
          {
            provide: AddressBookFacade,
            useValue: {
              addresses$: of(null),
            }
          }
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
