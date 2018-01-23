const kick = require('./fun2.js');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

test('should call console log with the right this.yelp ', () => {
    kick();
    expect(global.console.log)
    .toHaveBeenCalledWith(`Ouch!`);
});
