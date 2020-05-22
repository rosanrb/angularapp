import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressBookService } from './services/address-book/addresses.service';
import { Address } from './services/address-book/addresses.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'adresboek';
  adressen$: Observable<Address[]>;

  constructor(private adressenService: AddressBookService) { }

  ngOnInit() {
    this.adressen$ = this.adressenService.get();
  }
}
