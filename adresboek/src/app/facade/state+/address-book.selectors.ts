import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AddressBookState, addressBookStoreId } from './address-book.reducer';

export const selectAddressBookState = createFeatureSelector<AddressBookState>(addressBookStoreId);

export const selectAddresses = createSelector(
    selectAddressBookState,
  (state: AddressBookState) => state.addresses
);
