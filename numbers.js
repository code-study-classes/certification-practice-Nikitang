export const calculateDistance = (x1, x2) => {
    if (x1 > x2) {
        return x1 - x2;
    } else  {
        return x2 - x1;
    }
};

 export const calculateSegmentProduct = (a, b, c) => {
  const final = (c - a) * (b - c);
  return final; 
 };

 export const calculateKilobytes = (fileSizeInBytes) => {
  const del = fileSizeInBytes / 1024;
  const round = Math.floor(del);
  return round;
 };
 
 export const calculateSegments = (lenghtA, lenghtB) => {
  const len = lenghtA / lenghtB;
  const floore = Math.floor(len);
  return floore;
 };

 export const calculateDigitSum = (twoDigitNumber) => {
    const toStr = twoDigitNumber.toString();
    const calc = Number(toStr[0]);
    const calc2 = Number(toStr[1]);
    const last = calc + calc2;
  return last;
 };

 export const swapHundredsAndTens = (threeDigitNumber) => {
  const str = threeDigitNumber.toString();
  const num2 = str[1];
  const num1 = str[0];
  const num3 = str[2];
  const last = `${num2}${num1}${num3}`;
  const final = Number(last);
  return final;
 };

 export const getHundredsDigit = (number) => {
  const calc = number / 100;
  const calc2 = calc % 10;
  const calc3 = Math.floor(calc2);
    if (number > 999) {
      return calc3;
    }
    return 0;
};

export const getFullHours = (second) => {
  const min = second / 60;
  const hour = min / 60;
  const floor = Math.floor(hour);
  return floor;
};

export const getDayOfWeek = (dayOfYear) => {
        if (getDayOfWeek % 7 === 0) {
            return 0;
        } else if (dayOfYear % 7 === 1) {
            return 1;
        } else if (dayOfYear % 7 === 2) {
            return 2;
        } else if (dayOfYear % 7 === 3) {
            return 3; 
        } else if (dayOfYear % 7 === 4) {
            return 4;
        } else if (dayOfYear % 7 === 5) {
            return 5;
        } else if (dayOfYear % 7 === 6) {
            return 6;
        } else if (dayOfYear % 7 === 7) {
             return 7;
        }
};
  
export const countSquares = (a, b, c) => {
  const prem = a * b;
  const kvadro = c * c;
  const kvadro2 = Math.floor(kvadro);
  const last = prem / kvadro2;
  return last;
};

