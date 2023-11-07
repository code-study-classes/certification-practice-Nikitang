export const incrementIfPositive = (number) => {
    if (number > 0) {
        return number + 1;
    }
    return number;
};

export const getIndexOfSmallerNumber = (number1, number2) => {
    if (number1 < number2) {
        return 1;
    } else if (number1 > number2) {
        return 2;  
    } else if (number1 === number2) {
        return 1;
    }
};

export const findMiddleNumber = (number1, number2, number3) => {
    if (number1 < number2 < number3) {
        return number2;
    } else if (number2 < number1 < number3) {
        return number1;
    } else if (number2 < number3 < number1) {
        return number3
    } else if (number1 < number3 < number2) {
        return number3;
    }
};