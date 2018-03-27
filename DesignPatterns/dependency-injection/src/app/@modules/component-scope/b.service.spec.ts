import { TestBed, inject } from '@angular/core/testing';

import { BService } from './b.service';

describe('BService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BService]
    });
  });

  it('should be created', inject([BService], (service: BService) => {
    expect(service).toBeTruthy();
  }));
});
