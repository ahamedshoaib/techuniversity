const print = require('./string.js');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

test('should print given ', () => {
    let person = 'Abc';
    print(person);
    expect(global.console.log).toHaveBeenCalledWith(`Hello, Abc!
Your name lowercased is "abc".`);
});
