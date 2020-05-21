import { TestBed } from '@angular/core/testing';

import { AdressenService } from './adressen.service';

describe('AdressenService', () => {
  let service: AdressenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdressenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
