import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUpdateAddressComponent } from './add-update-address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUpdatePartnerComponent } from './add-update-partner';

@NgModule({
  declarations: [
    AddUpdateAddressComponent,
    AddUpdatePartnerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AddUpdateAddressComponent,
    AddUpdatePartnerComponent
  ],
})
export class AddUpdateAddressModule { }
