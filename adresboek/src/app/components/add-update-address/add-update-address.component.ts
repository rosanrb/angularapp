import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Address, Contactperson } from 'src/app/services/address-book/addresses.types';
import { AddressBookFacade } from 'src/app/facade/address-book.facade';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-add-update-address',
  templateUrl: './add-update-address.component.html',
  styleUrls: ['./add-update-address.component.scss']
})
export class AddUpdateAddressComponent implements OnChanges {
  @Input() addressToUpdate: Address;
  addPartnerClicked$ = new BehaviorSubject(null);
  
  readonly form = new FormGroup({
    straatnaam: new FormControl('', Validators.required),
    huisnummer: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
    huisnummerToevoeging: new FormControl(''),
    plaatsnaam: new FormControl('', Validators.required),
    postcode: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$')]),
    voornaam: new FormControl('', Validators.required),
    achternaam: new FormControl('', Validators.required),
    leeftijd: new FormControl(null),
    telefoonnummer: new FormControl('', [Validators.required, telephoneNumberValidator]),
  }, { updateOn: 'change' });

  invalidFormOnSubmit = false;

  partner: Contactperson;

  constructor(
    protected readonly facade: AddressBookFacade,
    private readonly router: Router,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.addressToUpdate && this.addressToUpdate) {
      this.form.patchValue({
        straatnaam: this.addressToUpdate.straatnaam,
        huisnummer: this.addressToUpdate.huisnummer,
        huisnummerToevoeging: this.addressToUpdate.huisnummerToevoeging,
        plaatsnaam: this.addressToUpdate.plaatsnaam,
        postcode: this.addressToUpdate.postcode,
        voornaam: this.addressToUpdate.contactpersoon.voornaam,
        achternaam: this.addressToUpdate.contactpersoon.achternaam,
        leeftijd: this.addressToUpdate.contactpersoon.leeftijd,
        telefoonnummer: this.addressToUpdate.contactpersoon.telefoonnummer,
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
        partner: this.partner,
      };

      const newAddress: Address = {
        straatnaam: this.getFormValue('straatnaam').toString(),
        huisnummer: Number(this.getFormValue('huisnummer')),
        huisnummerToevoeging: this.getFormValue('huisnummerToevoeging')?.toString(),
        plaatsnaam: this.getFormValue('plaatsnaam').toString(),
        postcode: this.getFormValue('postcode').toString(),
        contactpersoon: newContact,
      };

      if (!this.addressToUpdate) {
        this.facade.addAddress(newAddress);
        this.router.navigateByUrl('/adresboek');  
      } else {
        this.facade.updateAddress(newAddress, this.addressToUpdate);
      }
    }
    this.invalidFormOnSubmit = true;
  }

  addPartnerClicked() {
    this.addPartnerClicked$.next(true);
  }

  addOrUpdatePartner(partner: Contactperson) {
    this.partner = {
      voornaam: partner.voornaam,
      achternaam: partner.achternaam,
      telefoonnummer: partner.telefoonnummer,
      leeftijd: partner.leeftijd,
    }

    this.addPartnerClicked$.next(false);
  }

  protected getFormValue(formControlName: string): string | number {
    return this.form.get(formControlName).value;
  }
}

export function telephoneNumberValidator(control: AbstractControl): {[key: string]: boolean} {
  const landlineNumber = /^(((0)[1-9]{2}[0-9][-]?[1-9][0-9]{5})|((\\+31|0|0031)[1-9][0-9][-]?[1-9][0-9]{6}))$/;
  const mobileNumber = /^(((\\+31|0|0031)6){1}[1-9]{1}[0-9]{7})$/i;
  const invalidPhoneNumber = (landlineNumber.test(control.value) || mobileNumber.test(control.value));
  return invalidPhoneNumber ? null : { phoneNumber: true };
}