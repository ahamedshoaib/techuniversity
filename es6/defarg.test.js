const midpoint = require('./defarg.js');

test('given nothing return 0.5', () => {
    expect(midpoint()).toBe(0.5);
});

test('given 2, 3 return 2.5', () => {
    expect(midpoint(2, 3)).toBe(2.5);
});

test('given nothing, 3 return 1.5', () => {
    expect(midpoint(undefined, 3)).toBe(1.5);
});

test('given 4, nothing return 2.5', () => {
    expect(midpoint(4)).toBe(2.5);
});
