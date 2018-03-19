import { TestBed, inject } from '@angular/core/testing';

import { SomeService } from './some.service';

describe('SomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomeService]
    });
  });

  it('should be created', inject([SomeService], (service: SomeService) => {
    expect(service).toBeTruthy();
  }));
});
