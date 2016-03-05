#!/usr/bin/env node

//
const output = process.stdout;

//
exports.character = {
    'up':    '\u001b[A',
    'right': '\u001b[C',
    'down':  '\u001b[B',
    'left':  '\u001b[D',
    'enter': '\u2386',
    'close': '\u0003'
}

//
exports.cursor = {

    'hide': () => output.write('\u001b[?25l'),
    'show': () => output.write('\u001b[?25h')

};

//
exports.clear = {

    'screen': (index) => {
        output.cursorTo(0, 0);
        output.clearScreenDown();
    },

    'line': (index) => {
        output.cursorTo(0, index);
        output.clearLine();
    }

};

//
exports.position = {

    //
    cur: 0,
    pre: 0,
    max: 0,

    //
    set move(offset) {
        this.cur += offset;

        this.cur = Math.max(this.cur, 0);
        this.cur = Math.min(this.cur, this.max);
    },

    //
    get move() {
        var offset = this.cur - this.pre;
        this.pre = this.cur;

        return offset;
    },

    //
    get index() {
        return this.cur;
    }

};
