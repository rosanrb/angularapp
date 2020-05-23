import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAddressComponent } from './add-address.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddAddressComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AddAddressComponent,
  ],
})
export class AddAddressModule { }
