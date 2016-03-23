#!/usr/bin/env node

//
var clear       = require('./helpers').clear;
var cursor      = require('./helpers').cursor;
var position    = require('./helpers').position;
var character   = require('./helpers').character;
var keyListener = require('./keyListener');

//
var output = process.stdout;
var list = null;
var callback = null;

//
var select = {

    'on': (list) => {
        clear.line();
        output.write(list[position.index].on);
    },

    'off': (list) => {
        clear.line();
        output.write(list[position.index].off);
    },

    'reset': (list) => {
        position.max = list.length - 1;
        output.moveCursor(0, -position.max - 1);
    },

    'index': (list, index) => {
        position.move = index;
        output.moveCursor(0, position.move);

        select.on(list);
    },

    'next': (list) => {
        select.off(list);

        position.move = +1;
        output.moveCursor(0, position.move);

        select.on(list);
    },

    'previous': (list) => {
        select.off(list);

        position.move = -1;
        output.moveCursor(0, position.move);

        select.on(list);
    }

};

//
var navigation = (key) => {

    //
    switch (key) {
        case character.up:
            select.previous(list);
        break;

        case character.down:
            select.next(list);
        break;
    }

};

var enter = (key) => {

    if (key === character.enter) {
        callback(position.index)
    }

}

//
exports.init = function(l) {

    this.list = l;

    return {

        'render': () => {
          list = this.list;

          //
          this.list.forEach(i => {
              output.write(i.off + '\n');
          });

          //
          select.reset(this.list);
          select.index(this.list, 0);

          //
          keyListener.on(navigation);
        },

        'destroy': () => {
            keyListener.off(navigation);
            keyListener.off(enter);

            select.index(this.list, -position.index);

            output.clearLine();
            output.clearScreenDown();
        },

        'on': (c) => {
            callback = c;
            //
            keyListener.on(enter);
        }

    };

};
