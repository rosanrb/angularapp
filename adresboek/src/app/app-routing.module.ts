import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookComponent } from './components';
import { AddAddressComponent } from './components/add-address';


const routes: Routes = [
  {
    path: 'adresboek',
    component: AddressBookComponent
  },
  {
    path: 'adres-toevoegen',
    component: AddAddressComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
