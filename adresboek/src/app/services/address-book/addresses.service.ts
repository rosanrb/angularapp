import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Address } from './addresses.types';
@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  adressen: Address[] = [
    {
      straatnaam: 'Dorpstraat',
      huisnummer: 1,
      plaatsnaam: 'Oisterwijk',
      postcode: '1234AB',
      contactpersonen: [
        {
          voornaam: 'Harry',
          achternaam: 'Smits',
          leeftijd: 50,
          telefoonnummer: '0612345678',
        },
      ],
    },
    {
      straatnaam: 'Kerkstraat',
      huisnummer: 25,
      plaatsnaam: 'Tilburg',
      postcode: '5678YZ',
      contactpersonen: [
        {
          voornaam: 'Wilma',
          achternaam: 'Bakker',
          leeftijd: 32,
          telefoonnummer: '0687654321',
        },
      ],
    }
  ];
  constructor() { }

  get() {
    return of(this.adressen);
  }
}
