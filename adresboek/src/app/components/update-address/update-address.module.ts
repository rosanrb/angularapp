import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateAddressComponent } from './update-address.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UpdateAddressComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UpdateAddressComponent,
  ],
})
export class UpdateAddressModule { }
