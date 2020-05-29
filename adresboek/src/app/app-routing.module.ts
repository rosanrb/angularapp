import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookComponent } from './components';
import { AddUpdateAddressComponent } from './components/add-update-address';


const routes: Routes = [
  {
    path: 'adresboek',
    component: AddressBookComponent
  },
  {
    path: 'adres-toevoegen-wijzigen',
    component: AddUpdateAddressComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
