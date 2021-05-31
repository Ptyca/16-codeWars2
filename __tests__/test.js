function reverse(string){
  return string.split(' ').reverse().join(' ');
}

test('reverse', () => {
expect(reverse('I am an expert at this')).toBe('this at expert an am I');
expect(reverse('This is so easy')).toBe('easy so is This');
expect(reverse('no one cares')).toBe('cares one no');
expect(reverse('')).toBe('');
expect(reverse('CodeWars')).toBe('CodeWars');
});