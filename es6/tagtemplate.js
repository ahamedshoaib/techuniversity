console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(strings, ...rest) {
    rest = rest.map((element) => {
        element = element.replace('\'', '&apos;');
        element = element.replace('"', '&quot;');
        element = element.replace('<', '&lt;');
        element = element.replace('>', '&gt;');
        element = element.replace('$', '&amp;');
        return element;
    });
    let len = rest.length;
    let output = '';
    let i = 0;
    for (i = 0; i < len; ++i) {
        output += strings[i] + rest[i];
    }
    output += strings[i];


    return output;
}

module.exports = html;

