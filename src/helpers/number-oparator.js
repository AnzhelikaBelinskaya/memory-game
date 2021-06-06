export class NumberOperator {
  constructor() { }
  generate(length) {
    const arr = []
    for (let i = 1; i <= length; i++) {
      if (i === 1) {
        const digit = Math.floor(Math.random() * 9) + 1;
        arr.push(digit)
      } else {
        const digit = Math.floor(Math.random() * 10);
        arr.push(digit)
      }
    }
    return Number(arr.join(''))
  }

  compare(number1, number2) {
    return Number(number1) === Number(number2)
  }
}