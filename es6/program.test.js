const hello = require('./program.js');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

test('should print HELLO ES6', () => {
    hello();
    expect(global.console.log).toHaveBeenCalledWith('HELLO ES6');
});
