import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AddressBookModule } from './components';
import { AddressBookStoreModule } from './facade/address-book-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AddressPresentationalComponent } from './components/address-presentational/address-presentational.component';
import { AddAddressComponent } from './components/add-address/add-address.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    AddressBookModule,
    AddressBookStoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
