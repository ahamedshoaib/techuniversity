const fun = require('./fun.js');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

test('should print input becomes output', () => {
    let input = ['hello', 'world'];
    let result = 'hw';
    fun(input);
    expect(global.console.log)
    .toHaveBeenCalledWith(`[${input}] becomes "${result}"`);
});

test('given input return result', () => {
  let input = ['hello', 'world'];
  let result = 'hw';
  expect(fun(input)).toBe(result);
});

