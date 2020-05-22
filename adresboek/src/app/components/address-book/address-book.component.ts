import { Component, OnInit } from '@angular/core';
import { AddressBookFacade } from 'src/app/facade/address-book.facade';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {
  addresses$ = this.facade.addresses$;

  constructor(private readonly facade: AddressBookFacade) { }

  ngOnInit(): void {
  }

  loadAddresses() {
    this.facade.loadAddresses();
  }

}
