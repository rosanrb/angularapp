import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as actions from './actions';
import { AddressBookService } from 'src/app/services/address-book/addresses.service';

@Injectable()
export class AddressBookEffects {

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadAddresses),
      mergeMap(() => this.addressBookService.get()
        .pipe(
          map(addresses => (actions.loadAddressesSuccess({recievedAddresses: addresses}))),
          catchError(() => of(actions.loadAddressesFailure({ error: true })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private addressBookService: AddressBookService
  ) {}
}
