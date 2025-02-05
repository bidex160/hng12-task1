<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  ## Description
HNG12 Task 0

A Get request API, that returns the below response in json format with status code 200.


## Project setup

```bash
$ git clone https://github.com/bidex160/hng12-task1

$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

 http://localhost:3000
```
## API DOCUMENTATION


## URL
```bash
 https://hng12-task1-jspn.onrender.com/api/classify-number
```

## Response Format:
```bash
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  // sum of its digits
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}
```
