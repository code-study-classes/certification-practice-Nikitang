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