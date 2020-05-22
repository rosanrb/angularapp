import { createAction, props } from '@ngrx/store';
import { Address } from 'src/app/services/address-book/addresses.types';

export const addAddress = createAction(
  '[Address Book] Add Address',
  props<{ address: Address }>()
);
export const deleteAddress = createAction(
  '[Address Book] Delete Address',
  props<{ address: Address }>()
);
export const changeAddress = createAction(
  '[Address Book] Change Address',
  props<{ newAddress: Address; oldAddress: Address }>()
);
export const loadAddresses = createAction('[Address Book] Load Addresses');
export const loadAddressesSuccess = createAction(
  '[Address Book] Load Addresses Succes',
  props<{ recievedAddresses: Address[] }>()
);
export const loadAddressesFailure = createAction(
  '[Address Book] Load Addresses Failure',
  props<{ error: boolean }>()
);
