export const countUppercaseLetters1 = (str) => {
  const found = str.match(/[A-Z]/g);
  if (!found) return 0
  return found.length
};
export const countUppercaseLetters = (str) => str.match(/[A-Z]/g) ? str.match(/[A-Z]/g).length : 0

export const combineStrings = (n1, n2, s1, s2) => {
  const str1 = s1.slice(0, n1);
  const str2 = s2.slice(-n2);
  const bigStr = `${str1}${str2}`;
  if (n1 === 0 && n2 === 0) {
    return "";
  }
  return bigStr;
};

export const containsSubstring = (s, so) => {
  if (s.includes(so)) {
    return true;
  }
  return false;
};

export const countWordsWithSameLetters = (s, s1, s2) => {
  let spl = s.split(' ');
  for (let i = 0; i < sentence.length; i += 1) {
    if (spl[i] === s1) {
      spl[i] = s2;
      break;
    }
    return spl;
  }
};
