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
    const taco = service.makeDenverShrimpTaco('Carmen', 2);

    expect(taco).toBeTruthy();
    expect(taco.Quantity).toBeGreaterThan(0);
    expect(taco.Quantity).toBeGreaterThanOrEqual(1);
    console.log(taco.toString());
  }));

  it('should ...create a Steak Taco', inject([TacoService], (service: TacoService) => {
    expect(service).toBeTruthy();
    const taco = service.makeSteakTaco('Mateo', 4);

    expect(taco).toBeTruthy();
    expect(taco.Quantity).toBeGreaterThan(0);
    expect(taco.Quantity).toBeGreaterThanOrEqual(1);
    console.log(taco.toString());
  }));
});
