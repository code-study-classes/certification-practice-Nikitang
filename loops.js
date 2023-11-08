export const sumOfSquares = (a, n) => {
    let result = 0;
    for (let i = 0; a < n; i += 1) {
        const step = ((a + i));
        const
        result += Math.pow(step, 2);
        return result;
    }
};