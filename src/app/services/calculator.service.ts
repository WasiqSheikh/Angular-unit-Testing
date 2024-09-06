import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logger: LoggerService) { }
  add(a: number, b: number) {
    this.logger.log(`adding ${a} and ${b}`);
    return a + b;
  }

  multiply(a: number, b: number) {
    this.logger.log(`multiplying ${a} and ${b}`);
    return a * b;
  }
}
