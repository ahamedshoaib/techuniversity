const destructure = require('./destructuring');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

test('should pass output to console log ', () => {
    let input = [2, 'name', 'name@mail.com'];
    destructure(input);
    expect(global.console.log)
    .toHaveBeenCalledWith({username: 'name', email: 'name@mail.com'});
});

test('given input return output', () => {
    let input = [2, 'name', 'name@mail.com'];
    let output = {username: 'name', email: 'name@mail.com'};
    expect(destructure(input)).toEqual(output);
});
