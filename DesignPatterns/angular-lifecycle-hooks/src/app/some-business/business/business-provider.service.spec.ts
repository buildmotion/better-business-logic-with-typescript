import { TestBed, inject } from '@angular/core/testing';

import { BusinessProviderService } from './business-provider.service';

describe('BusinessProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessProviderService]
    });
  });

  it('should be created', inject([BusinessProviderService], (service: BusinessProviderService) => {
    expect(service).toBeTruthy();
  }));
});
