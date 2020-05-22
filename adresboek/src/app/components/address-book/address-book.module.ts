import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './address-book.component';
import { AddressPresentationalModule } from '../address-presentational';

@NgModule({
  declarations: [
    AddressBookComponent,
  ],
  imports: [
    CommonModule,
    AddressPresentationalModule,
  ],
  exports: [
    AddressBookComponent,
  ],
})
export class AddressBookModule { }
