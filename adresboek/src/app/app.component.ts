import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressBookService } from './services/address-book/addresses.service';
import { Address } from './services/address-book/addresses.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adresboek';

  constructor(router: Router) {
    router.navigateByUrl('/adresboek');
  }
}
