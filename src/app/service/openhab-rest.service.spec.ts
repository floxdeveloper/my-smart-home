import { TestBed, inject } from '@angular/core/testing';

import { OpenhabRestService } from './openhab-rest.service';

describe('OpenhabRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenhabRestService]
    });
  });

  it('should be created', inject([OpenhabRestService], (service: OpenhabRestService) => {
    expect(service).toBeTruthy();
  }));
});
