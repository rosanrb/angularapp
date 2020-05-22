import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressPresentationalComponent } from './address-presentational.component';

@NgModule({
  declarations: [
    AddressPresentationalComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddressPresentationalComponent,
  ],
})
export class AddressPresentationalModule { }
