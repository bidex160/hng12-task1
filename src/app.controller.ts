import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('classify-number')
  async getClassifyNumber(
    @Query('number') number: string,
    @Res() res: Response,
  ) {
    const classifyNumber = parseInt(number);
    if (isNaN(classifyNumber))
      return res.status(400).json({
        number: 'alphabet',
        error: true,
      });
    if (classifyNumber < 1)
      return res.status(200).json({
        number: 'negative number',
        error: true,
      });

    const properties: string[] = [];
    if (this.appService.isArmstrong(classifyNumber))
      properties.push('armstrong');
    if (this.appService.isOdd(classifyNumber)) properties.push('odd');
    if (this.appService.isEven(classifyNumber)) properties.push('even');
    const funFac: string = await this.appService.funFact(classifyNumber);
    return res.status(200).json({
      number: classifyNumber,
      is_prime: this.appService.isPrime(classifyNumber),
      is_perfect: this.appService.isPerfect(classifyNumber),
      properties: properties,
      digit_sum: this.appService.sumOfDigits(classifyNumber), // sum of its digits
      fun_fact: funFac, //gotten from the numbers API
    });
  }
}
