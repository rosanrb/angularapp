import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUpdateAddressComponent } from './add-update-address.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddUpdateAddressComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AddUpdateAddressComponent,
  ],
})
export class AddUpdateAddressModule { }
