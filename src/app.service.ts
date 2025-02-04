import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  isPrime(n: number) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  isOdd(n: number) {
    if (n % 2 === 0) return false;
    return true;
  }

  isEven(n: number) {
    if (n % 2 === 0) return true;
    return false;
  }

  isArmstrong(num: number) {
    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(numStr[i]);
      sum += Math.pow(digit, numDigits);
    }

    return sum === num;
  }

  async funFact(num: number): Promise<string> {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`http://numbersapi.com/${num}/math`).pipe(
          catchError((error) => {
            throw error;
          }),
        ),
      );
      // Handle the response
      return response.data as string;
    } catch {
      return '';
    }
  }

  isPerfect(n: number): boolean {
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }

    return sum === n;
  }

  sumOfDigits(n: number) {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  }
}
