let foot = {
    kick: function() {
        this.yelp = 'Ouch!';
        setImmediate(() => console.log(this.yelp));
    },
};
foot.kick();

module.exports = foot.kick;
