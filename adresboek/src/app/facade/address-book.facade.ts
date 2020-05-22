import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AddressBookState } from './state+/address-book.reducer';
import * as fromSelector from './state+/address-book.selectors';
import * as actions from './state+/address-book.actions';
import { Address } from '../services/address-book/addresses.types';

@Injectable({
  providedIn: 'root',
})
export class AddressBookFacade {
  addresses$ = this.store.pipe(select(fromSelector.selectAddresses));

  constructor(private store: Store<AddressBookState>) {}

  addAddress(newAddress: Address) {
    this.store.dispatch(actions.addAddress({ address: newAddress }));
  }

  deleteAddress(addressToDelete: Address) {
    this.store.dispatch(actions.deleteAddress({ address: addressToDelete }));
  }

  updateAddress(addressNew: Address, addressOld: Address) {
    this.store.dispatch(actions.changeAddress({ newAddress: addressNew, oldAddress: addressOld }));
  }

  loadAddresses() {
    this.store.dispatch(actions.loadAddresses());
  }
}
