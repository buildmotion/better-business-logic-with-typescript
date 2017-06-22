import { Injectable } from '@angular/core';

import * as tacos from './../pattern/index';

@Injectable()
export class TacoService {

  constructor() { }

  makeDenverShrimpTaco(customer: string, quantity: number) {
    const taco = new tacos.ShrimpTaco(customer, quantity);
    taco.execute();
  }

  makeSteakTaco(customer: string, quantity: number) {
    const taco = new tacos.SteakTaco(customer, quantity);
    taco.execute();
  }
}
