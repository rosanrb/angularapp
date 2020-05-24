import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Address } from 'src/app/services/address-book/addresses.types';
import { AddressBookFacade } from 'src/app/facade/address-book.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent {
  readonly form = new FormGroup({
    straatnaam: new FormControl('', Validators.required),
    huisnummer: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
    huisnummerToevoeging: new FormControl(''),
    plaatsnaam: new FormControl('', Validators.required),
    postcode: new FormControl('', Validators.required),
    voornaam: new FormControl('', Validators.required),
    achternaam: new FormControl('', Validators.required),
    leeftijd: new FormControl(null),
    telefoonnummer: new FormControl('', Validators.required),
    partner: new FormControl(null),
  }, { updateOn: 'change' });

  invalidFormOnSubmit = false;

  constructor(
    protected readonly facade: AddressBookFacade,
    private readonly router: Router,
  ) { }

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

      this.facade.addAddress(newAddress);
      this.router.navigateByUrl('/adresboek');
    }
    this.invalidFormOnSubmit = true;
  }

  protected getFormValue(formControlName: string): string | number {
    return this.form.get(formControlName).value;
  }
}
