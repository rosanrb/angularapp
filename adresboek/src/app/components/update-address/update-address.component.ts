import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Address } from 'src/app/services/address-book/addresses.types';
import { AddressBookFacade } from 'src/app/facade/address-book.facade';
import { Router } from '@angular/router';
import { AddAddressComponent } from '../add-address';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss']
})
export class UpdateAddressComponent extends AddAddressComponent implements OnChanges {
  @Input() oldAddress: Address;
  @Output() addressUpdated: EventEmitter<boolean> = new EventEmitter();

  invalidFormOnSubmit = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.oldAddress && this.oldAddress) {
      this.form.patchValue({
        straatnaam: this.oldAddress.straatnaam,
        huisnummer: this.oldAddress.huisnummer,
        huisnummerToevoeging: this.oldAddress.huisnummerToevoeging,
        plaatsnaam: this.oldAddress.plaatsnaam,
        postcode: this.oldAddress.postcode,
        voornaam: this.oldAddress.contactpersonen[0].voornaam,
        achternaam: this.oldAddress.contactpersonen[0].achternaam,
        leeftijd: this.oldAddress.contactpersonen[0].leeftijd,
        telefoonnummer: this.oldAddress.contactpersonen[0].telefoonnummer,
        partner: this.oldAddress.contactpersonen[0].partner,
      });
    } 
  }

  onSubmit() {
    if (this.form.valid) {
      const newContact = {
        voornaam: this.getFormValue('voornaam').toString(),
        achternaam: this.getFormValue('achternaam').toString(),
        leeftijd: this.getFormValue('leeftijd') ? Number(this.getFormValue('leeftijd')) : null,
        telefoonnummer: this.getFormValue('telefoonnummer').toString(),
      };

      const newAddress: Address = {
        straatnaam: this.getFormValue('straatnaam').toString(),
        huisnummer: Number(this.getFormValue('huisnummer')),
        huisnummerToevoeging: this.getFormValue('huisnummerToevoeging')?.toString(),
        plaatsnaam: this.getFormValue('plaatsnaam').toString(),
        postcode: this.getFormValue('postcode').toString(),
        contactpersonen: [newContact],
      };

      this.facade.updateAddress(newAddress, this.oldAddress);
      this.addressUpdated.next(true);
    }
    this.invalidFormOnSubmit = true;
  }
}
