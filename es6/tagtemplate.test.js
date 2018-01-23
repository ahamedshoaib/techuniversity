const html = require('./tagtemplate');

test('given input return output', () => {
    let input = ['abc', '<> xyz'];
    let output = '<b>abc says</b>: "&lt;&gt; xyz"';
    expect(html`<b>${input[0]} says</b>: "${input[1]}"`).toBe(output);
});
