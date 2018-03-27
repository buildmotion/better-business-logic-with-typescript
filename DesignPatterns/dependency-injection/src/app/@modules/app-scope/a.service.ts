import { Injectable } from '@angular/core';
import { AConfig } from './a-config';

@Injectable()
export class AService {

  source: string;

  constructor(
    public config: AConfig
  ) {
    this.source = `applicaton-level`;
  }

  toString() {
    return `${this.source}.${this.config.source}.${this.config.instance}.${this.config.timestamp}`;
  }
}
