import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Contactperson } from 'src/app/services/address-book/addresses.types';
import { AddressBookFacade } from 'src/app/facade/address-book.facade';
import { telephoneNumberValidator } from '../add-update-address.component';

@Component({
  selector: 'app-add-update-partner',
  templateUrl: './add-update-partner.component.html',
  styleUrls: ['./add-update-partner.component.scss']
})
export class AddUpdatePartnerComponent implements OnChanges {
  @Input() partnerToUpdate: Contactperson;
  @Output() addOrUpdatePartner = new EventEmitter<Contactperson>();
  
  readonly form = new FormGroup({
    voornaam: new FormControl('', Validators.required),
    achternaam: new FormControl('', Validators.required),
    leeftijd: new FormControl(null),
    telefoonnummer: new FormControl('', [Validators.required, telephoneNumberValidator]),
  }, { updateOn: 'change' });

  invalidFormOnSubmit = false;

  constructor(
    protected readonly facade: AddressBookFacade,
    private readonly router: Router,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.contact && this.partnerToUpdate) {
      this.form.patchValue({
        voornaam: this.partnerToUpdate.voornaam,
        achternaam: this.partnerToUpdate.achternaam,
        leeftijd: this.partnerToUpdate.leeftijd,
        telefoonnummer: this.partnerToUpdate.telefoonnummer,
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const newPartner = {
        voornaam: this.getFormValue('voornaam').toString(),
        achternaam: this.getFormValue('achternaam').toString(),
        leeftijd: this.getFormValue('leeftijd') ? Number(this.getFormValue('leeftijd')) : null,
        telefoonnummer: this.getFormValue('telefoonnummer').toString(),
      };
      this.addOrUpdatePartner.emit(newPartner);
    }
    this.invalidFormOnSubmit = true;
  }

  protected getFormValue(formControlName: string): string | number {
    return this.form.get(formControlName).value;
  }
}
