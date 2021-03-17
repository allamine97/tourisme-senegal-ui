import { TestBed } from '@angular/core/testing';

import { PersonnalitesService } from './personnalites.service';

describe('PersonnalitesService', () => {
  let service: PersonnalitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnalitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
