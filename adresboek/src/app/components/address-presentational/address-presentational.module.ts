import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressPresentationalComponent } from './address-presentational.component';
import { UpdateAddressModule } from '../update-address';

@NgModule({
  declarations: [
    AddressPresentationalComponent,
  ],
  imports: [
    CommonModule,
    UpdateAddressModule,
  ],
  exports: [
    AddressPresentationalComponent,
  ],
})
export class AddressPresentationalModule { }
