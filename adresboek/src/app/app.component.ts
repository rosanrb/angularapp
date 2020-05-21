import { Component, OnInit } from '@angular/core';
import { Adres } from './services/adressen/adressen.types';
import { AdressenService } from './services/adressen/adressen.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'adresboek';
  adressen$: Observable<Adres[]>;

  constructor(private adressenService: AdressenService) { }

  ngOnInit() {
    this.adressen$ = this.adressenService.get();
  }
}
