import { TestBed } from '@angular/core/testing';

import { ScryfallClientService } from './scryfall-client.service';

describe('ScryfallClientService', () => {
  let service: ScryfallClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScryfallClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
