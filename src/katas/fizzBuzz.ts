type FizzBuzz = (valor: number) => string | number;

export const fizzBuzz: FizzBuzz = (valor) => {
   const isDivisibleBy3 = valor % 3 === 0;
   const isDivisibleBy5 = valor % 5 === 0;

    if (isDivisibleBy3 && isDivisibleBy5) {
        return "FizzBuzz";
    }if (isDivisibleBy3) {
        return "Fizz"
    }
    if (isDivisibleBy5) {
        return "Buzz"
    }
   
    return valor;
}
