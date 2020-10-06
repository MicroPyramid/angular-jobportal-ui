import { TestBed } from '@angular/core/testing';

import { PeeljobsService } from './peeljobs.service';

describe('PeeljobsService', () => {
  let service: PeeljobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeeljobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
