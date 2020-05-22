import { createReducer, on, State, Action } from '@ngrx/store';
import * as actions from './address-book.actions';
import { changeOldAddress } from '../address-book.mapper';
import { Address } from 'src/app/services/address-book/addresses.types';

export const addressBookStoreId = 'address-book';

export interface AddressBookState {
  addresses: Address[];
  addressesLoading: boolean;
  addressesError: boolean;
}

export const initialState: AddressBookState = {
  addresses: [],
  addressesLoading: false,
  addressesError: false,
};

const addressBookReducer = createReducer(
  initialState,
  on(actions.addAddress, (state, { address }) => ({
    ...state,
    addresses: {
      ...state.addresses,
      address,
    },
  })),
  on(actions.deleteAddress, (state, { address }) => ({
    ...state,
    addresses: state.addresses.filter((x) => x !== address),
  })),
  on(actions.changeAddress, (state, { newAddress, oldAddress }) => ({
    ...state,
    addresses: changeOldAddress(newAddress, oldAddress, state.addresses),
  })),
  on(actions.loadAddresses, state => ({
    ...state,
    addressesLoading: true,
    addressesError: false,
  })),
  on(actions.loadAddressesSuccess, (state, { recievedAddresses }) => ({
    ...state,
    addresses: recievedAddresses,
    addressesLoading: false,
    addressesError: false,
  })),
  on(actions.loadAddressesFailure, (state, { error }) => ({
    ...state,
    addressesLoading: false,
    addressesError: error,
  })),
);

export function getAddressBookReducer(state: AddressBookState, action: Action) {
  return addressBookReducer(state, action);
}
