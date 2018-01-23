const minimum = require('./spread.js');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

test('should print minimum of input is output', () => {
    let input = [1, 2, 3];
    // let result = 1;
    minimum(input);
    expect(global.console.log)
    .toHaveBeenCalledWith(`The minimum of [1,2,3] is 1`);
});

test('given input return result', () => {
    let input = [1, 2, 3];
    let result = 1;
    expect(minimum(input)).toBe(result);
});
