import { Injectable } from '@angular/core';
import { BConfig } from './b-config';
import { timeout } from 'q';

@Injectable()
export class BService {
  source: string;
  instance: number;
  timestamp: Date;
  constructor() {
    this.timestamp = new Date();
  }

  toString() {
    return `${this.source}.${this.instance}.${this.timestamp}`;
  }
}
