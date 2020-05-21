import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AddressBookState } from './reducer';

export const selectAddressBookState = createFeatureSelector<AddressBookState>('addressBook');

export const selectAddresses = createSelector(
    selectAddressBookState,
  (state: AddressBookState) => state.addresses
);
