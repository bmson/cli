#!/usr/bin/env node

//
const output = process.stdout;

//
exports.character = {
    'up':     '\u001b[A',
    'right':  '\u001b[C',
    'down':   '\u001b[B',
    'left':   '\u001b[D',
    'enter':  '\u000d',
    'delete': '\u007f',
    'close':  '\u0003'
};

exports.style = {
  'green':      '\x1b[32m',
  'gray':       '\x1b[2m',
  'bold':       '\x1b[1m',
  'underscore': '\x1b[4m',
  'blink':      '\x1b[5m',
  'reset':      '\x1b[0m'
};

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
