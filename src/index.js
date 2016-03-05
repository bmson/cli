#!/usr/bin/env node

const clear       = require('./lib/helpers').clear;
const cursor      = require('./lib/helpers').cursor;
const character   = require('./lib/helpers').character;
const keyListener = require('./lib/keyListener');
const menu        = require('./lib/menu');

//
const output = process.stdout;

//
const navigation = [
    { on: '➤ Zero',  off: '  Zero'  },
    { on: '➤ One',   off: '  One'   },
    { on: '➤ Two',   off: '  Two'   },
    { on: '➤ Three', off: '  Three' },
    { on: '➤ Four',  off: '  Four'  }
];

const second_navigation = [
    { on: '➤ SECOND', off: '  SECOND'  },
    { on: '➤ THIRD',  off: '  THIRD'   },
    { on: '➤ FOURTH', off: '  FOURTH'   }
];

//
keyListener.on(key => {

    //
    if (key === character.close) {
        cursor.show();
        clear.screen();

        output.write('\n');
        output.write('  PAPERGUIDE\n');
        output.write('  Bye...\n');
        output.write('\n');

        process.exit();
    }

});

//
clear.screen();
cursor.hide();

//
output.write('\n');
output.write('  PAPERGUIDE\n');
output.write('  Wizzard\n');
output.write('\n');

//
var nav = menu.render(navigation);

//
nav.on(selection => {

    if (selection === 3) {
        nav.destroy(navigation);

        var test = menu.render(second_navigation);

    }

});
