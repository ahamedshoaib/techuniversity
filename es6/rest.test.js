const average = require('./rest.js');


test('given input return result', () => {
    let input = [1, 2, 3];
    let result = 2;
    expect(average(...input)).toBe(result);
});


test('given input return result', () => {
    let input = [0, 0];
    let result = 0;
    expect(average(...input)).toBe(result);
});

test('given input return result', () => {
    let input = [1, 1, 4, 10];
    let result = 4;
    expect(average(...input)).toBe(result);
});


