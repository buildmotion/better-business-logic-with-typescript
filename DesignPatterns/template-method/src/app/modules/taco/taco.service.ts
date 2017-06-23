import { Injectable } from '@angular/core';

import * as tacos from './../pattern/index';
import { TacoModel } from './taco.model';

@Injectable()
export class TacoService {

  constructor() { }

  makeDenverShrimpTaco(customer: string, quantity: number): TacoModel {
    const taco = new tacos.ShrimpTaco(customer, quantity);
    return taco.execute();
  }

  makeSteakTaco(customer: string, quantity: number): TacoModel {
    const taco = new tacos.SteakTaco(customer, quantity);
    return taco.execute();
  }
}
