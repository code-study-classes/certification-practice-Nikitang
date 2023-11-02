export const isPositive = (a) => {
    if (a > 0) {
        return true;
    } 
    return false;
};

export const isOdd = (a) => {
    if (a % 2 !== 0) {
        return true;
    } 
    return false;
};

export const checkInequality = (a, b) => {
    if (a > 2 && b <= 3) {
        return true;
    }
    return false;
};

export const checkInequality2 = (a, b) => {
    if (a >= 0 || b < (-2)) {
        return true;
    }
    return false;
};

export const checkBetweenNumbers = (a, b, c) => {
  if (a > b && b > c) {
    return true;
  } else if (a < b && b < c) {
    return true;
  } 
  return false;
};

export const checkOddThreeDigitNumber = (number) => {
  const numStr = `${number}`;
  const numLen = numStr.length;
  if (numLen === 3 && number % 2 !== 0) {
    return true
  }
  return false;
};

export const checkUniqueDigits = (number) => {
    const strN = `${number}`;
    const str1 = strN[0];
    const str2 = strN[1];
    const str3 = strN[2];
    const num1 = Number(str1);
    const num2 = Number(str2);
    const num3 = Number(str3);
    if (num1 !== num2 && num2 !== num3) {
        return true;
    }
    return false;
};

export const isSecondQuadrant= () => {

};

export const isIsoscelesTriangle = (a, b ,c) => {
  if (a === 0 && b === 0 && c === 0) {
    return false;
  } else if (a === b || a === c || b === c) {
    return true;
  } 
  return false;
};