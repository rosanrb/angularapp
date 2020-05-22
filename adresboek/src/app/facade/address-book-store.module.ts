import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAddressBook from './state+/address-book.reducer';
import { AddressBookEffects } from './state+/address-book.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(
            fromAddressBook.addressBookStoreId,
            fromAddressBook.getAddressBookReducer,
        ),
        EffectsModule.forFeature([AddressBookEffects])
    ]
})
export class AddressBookStoreModule { }
