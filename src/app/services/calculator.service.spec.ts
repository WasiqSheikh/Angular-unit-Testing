// import { TestBed } from '@angular/core/testing';

import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

// describe('CalculatorService', () => {
//   let service: CalculatorService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CalculatorService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe("CalculatorService", () => {
  let logger: jasmine.SpyObj<LoggerService>;
  let calService: CalculatorService;
  beforeEach(() => {
    const loggerSpy = jasmine.createSpyObj("LoggerService", ["multiply", "log"])
    TestBed.configureTestingModule({
      providers: [CalculatorService, { provide: LoggerService, useValue: loggerSpy }]
    })
    calService = TestBed.inject(CalculatorService);
    logger = TestBed.inject(LoggerService) as jasmine.SpyObj<LoggerService>;
  })
  it("should add two numbers", () => {
    const result = calService.add(2, 2);
    expect(result).toBe(4);
    expect(logger.log).toHaveBeenCalledTimes(1);
  })

  it("should multiply two numbers", () => {
    const result = calService.multiply(3, 2);
    expect(result).toBe(6);
    expect(logger.log).toHaveBeenCalledTimes(1);
  })
})
