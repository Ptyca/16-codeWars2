var summation = function (num) {
    let sum = 0;
    for(let i=0; i <= num; i++){
        sum += i;
    }
    return sum;
  }


test('num', () => {
expect(summation(1)).toBe(1);
expect(summation(8)).toBe(36);
})
