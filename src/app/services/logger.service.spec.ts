// import { TestBed } from '@angular/core/testing';

import { LoggerService } from "./logger.service";
import { SharedService } from "./shared.service";

// import { LoggerService } from './logger.service';

// describe('LoggerService', () => {
//   let service: LoggerService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(LoggerService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


// describe("LoggerService", () => {
//   const sharedService = new SharedService();
//   const loggerService = new LoggerService(sharedService);
//   it("should multiply two numbers", () => {
//     const result = loggerService.multiply(9,2);
//     expect(9*2).toBe(18);
//   })

//   it("should call the shared service", () => {
//     spyOn(sharedService, "mySharedFunction");
//     let result = loggerService.multiply(9,2);
//     expect(sharedService.mySharedFunction).toHaveBeenCalledTimes(1);
//   })

//   it("should log the message", () => {
//     spyOn(console, "log");
//     const msg = "Dummy message";
//     let result = loggerService.log(msg);
//     expect(console.log).withContext('Should have called only once').toHaveBeenCalledTimes(1);
//     expect(console.log).toHaveBeenCalledWith(`message: ${msg}`);
//   })
// });
