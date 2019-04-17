import { TestBed } from '@angular/core/testing';

import { ShowsService } from './shows.service.';

describe('ShowsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowsService = TestBed.get(ShowsService);
    expect(service).toBeTruthy();
  });
});
