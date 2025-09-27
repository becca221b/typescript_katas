type ToRoman = (value : number) => string;

export const toRoman: ToRoman = (value) => {
    const digits: string[] = value.toString().split('');
    if (digits.length === 1) {
        
    }
    /*if (value >= 1 && value <= 3) {
        return 'I'.repeat(value);
    };
    if (value === 5) {
        return 'V';
    }
    if(value >= 6 && value <= 9) {
        return 'V' + 'I'.repeat(value - 5);
    }*/
    return ''; // Return an empty string or handle other cases as needed
}