import { TestBed, inject } from '@angular/core/testing';

import { RuleService } from './index';
import { Thing } from './index';
import { Mocks } from './index';

describe('RuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuleService]
    });
  });

  it('should ...', inject([RuleService], (service: RuleService) => {
    expect(service).toBeTruthy();
  }));

  it('should ...determine thing is in use.', inject([RuleService], (service: RuleService) => {
    expect(service).toBeTruthy();

    const thingMock = Mocks.thing();
    const result = service.simpleValidation(thingMock);

    expect(result.isValid).toBeTruthy();

    service.writeValidationErrors();
  }));

  it('should ...determine thing is NOT in use.', inject([RuleService], (service: RuleService) => {
    expect(service).toBeTruthy();

    let thingMock = Mocks.thing();
    thingMock.isInUse = false; // INVALID;
    const result = service.simpleValidation(thingMock);

    expect(result.isValid).toBe(false, `The thing is not in use...`);

    service.writeValidationErrors();
  }));

  it('should ...determine thing is valid.', inject([RuleService], (service: RuleService) => {
    expect(service).toBeTruthy();

    const thingMock = Mocks.thing();
    const result = service.fullValidation(thingMock);
    expect(result.isValid).toBeTruthy();

    service.writeValidationErrors();
  }));

  it('should ...determine thing is NOT valid.', inject([RuleService], (service: RuleService) => {
    expect(service).toBeTruthy();

    const thingMock = new Thing();
    const result = service.fullValidation(thingMock);
    expect(result.isValid).toBe(false, `Expect nothing valid about an invalid thing.`);

    service.writeValidationErrors();
  }));

});
