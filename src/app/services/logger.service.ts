import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  multiply(a: number,b: number) {
    //this.sharedService.mySharedFunction();
    return a*b;
  }

  log(message: string) {
    console.log(`message: ${message}`);
  }
}
