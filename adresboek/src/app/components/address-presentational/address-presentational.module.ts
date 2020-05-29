import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressPresentationalComponent } from './address-presentational.component';
import { AddUpdateAddressModule } from '../add-update-address';

@NgModule({
  declarations: [
    AddressPresentationalComponent,
  ],
  imports: [
    CommonModule,
    AddUpdateAddressModule,
  ],
  exports: [
    AddressPresentationalComponent,
  ],
})
export class AddressPresentationalModule { }
