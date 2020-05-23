import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from 'src/app/services/address-book/addresses.types';

@Component({
  selector: 'app-address-presentational',
  templateUrl: './address-presentational.component.html',
  styleUrls: ['./address-presentational.component.scss']
})
export class AddressPresentationalComponent implements OnInit {
  @Input() address: Address;
  @Output() deleteAddress: EventEmitter<Address> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteClicked() {
    this.deleteAddress.next(this.address);
  }
}
