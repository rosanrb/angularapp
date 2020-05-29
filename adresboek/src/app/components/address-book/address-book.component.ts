import { Component, OnInit } from '@angular/core';
import { AddressBookFacade } from 'src/app/facade/address-book.facade';
import { Router } from '@angular/router';
import { Address } from 'src/app/services/address-book/addresses.types';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {
  addresses$ = this.facade.addresses$;

  constructor(
    private readonly facade: AddressBookFacade,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  loadAddresses() {
    this.facade.loadAddresses();
  }

  addAddress() {
    this.router.navigateByUrl('/adres-toevoegen-wijzigen');
  }

  deleteAddress(addressToDelete: Address) {
    this.facade.deleteAddress(addressToDelete);
  }
}
