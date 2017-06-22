import { TestBed, inject } from '@angular/core/testing';

import { TacoService } from './taco.service';

describe('TacoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TacoService]
    });
  });

  it('should ...', inject([TacoService], (service: TacoService) => {
    expect(service).toBeTruthy();
  }));

  it('should ...create a Denver Shrimp Taco', inject([TacoService], (service: TacoService) => {
    expect(service).toBeTruthy();
    service.makeDenverShrimpTaco('Mateo', 2);
  }));

it('should ...create a Steak Taco', inject([TacoService], (service: TacoService) => {
    expect(service).toBeTruthy();
    service.makeSteakTaco('Mateo', 4);
  }));
});
