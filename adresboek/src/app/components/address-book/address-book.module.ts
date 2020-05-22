import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './address-book.component';

@NgModule({
  declarations: [
    AddressBookComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddressBookComponent,
  ],
})
export class AddressBookModule { }
