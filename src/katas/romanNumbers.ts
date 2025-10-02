type ToRoman = (value : number) => string;

export const toRoman: ToRoman = (value) => {
    let romanNumber: string = '';
    
    let digit0 = getDigit(value, 0);
    if (digit0 >= 1 && digit0 <= 3) {
        romanNumber = 'I'.repeat(value);
    }
    if(digit0 === 4) {
        romanNumber = 'IV';
    }
    if (digit0 === 5) {
        return 'V';
    }
    if(digit0 >= 6 && digit0 <= 9) {
        return 'V' + 'I'.repeat(value - 5);
    }
    
    
    
    return romanNumber; // Return an empty string or handle other cases as needed
}

export const getDigit = (value: number, position: number): number => {
    return Math.floor(value / Math.pow(10, position)) % 10;
}
/*
const digits: string[] = value.toString().split('');
    if (digits.length === 1) {
        
    }
    if (value >= 1 && value <= 3) {
        return 'I'.repeat(value);
    };
    if (value === 5) {
        return 'V';
    }
    if(value >= 6 && value <= 9) {
        return 'V' + 'I'.repeat(value - 5);
    }
*/