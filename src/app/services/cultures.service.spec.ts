import { TestBed } from '@angular/core/testing';

import { CulturesService } from './cultures.service';

describe('CulturesService', () => {
  let service: CulturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CulturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
