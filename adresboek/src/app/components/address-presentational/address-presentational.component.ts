import { Component, OnInit, Input } from '@angular/core';
import { Address } from 'src/app/services/address-book/addresses.types';

@Component({
  selector: 'app-address-presentational',
  templateUrl: './address-presentational.component.html',
  styleUrls: ['./address-presentational.component.scss']
})
export class AddressPresentationalComponent implements OnInit {
  @Input() address: Address;

  constructor() { }

  ngOnInit(): void {
  }

}
