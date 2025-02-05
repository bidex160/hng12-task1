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
    const absN = Math.abs(num);
    const numStr = absN.toString();
    const numDigits = numStr.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(numStr[i]);
      sum += Math.pow(digit, numDigits);
    }

    return sum === absN;
  }

  async funFact(num: number): Promise<string> {
    try {
      const response = await firstValueFrom(
        this.httpService
          .get(`http://numbersapi.com/${num}/math`, { timeout: 250 })
          .pipe(
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
    if (n < 0) return false;

    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }

    return sum === n;
  }

  sumOfDigits(n: number) {
    let absN = Math.abs(n);
    let sum = 0;
    while (absN > 0) {
      sum += absN % 10;
      absN = Math.floor(absN / 10);
    }
    return sum;
  }
}
