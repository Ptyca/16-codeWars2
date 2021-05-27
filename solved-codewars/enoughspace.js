function enough(cap, on, wait) {
    const enough = cap - on - wait;
    if(enough >= 0){
        return 0;
    }
    if(enough < 0) {
        return -enough;
    }

    return enough;
  }




test('Example Tests', () => {
expect(enough(10, 5, 5)).toBe(0);
expect(enough(100, 60, 50)).toBe(10);
expect(enough(20, 5, 5)).toBe(0);
  });