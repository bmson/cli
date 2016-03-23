#!/usr/bin/env node

const clear       = require('./lib/helpers').clear;
const cursor      = require('./lib/helpers').cursor;
const character   = require('./lib/helpers').character;
const style       = require('./lib/helpers').style;
const keyListener = require('./lib/keyListener');
const menu        = require('./lib/menu');

//
const output = process.stdout;

//
const navigation = [
    { on: style.green + '➤ New Hire' + style.reset,  off: '  New Hire'  },
    { on: style.green + '➤ New Project' + style.reset,   off: '  New Project'   },
    { on: style.green + '➤ Docker' + style.reset,   off: '  Docker'   },
    { on: style.green + '➤ Exit' + style.reset,  off: '  Exit'  }
];

const new_hire = [
    { on: style.green + '➤ Second' + style.reset, off: '  Second'  },
    { on: style.green + '➤ Third' + style.reset,  off: '  Third'   },
    { on: style.green + '➤ Back' + style.reset, off: '  Back'   }
];

const new_project = [
    { on: style.green + '➤ Second' + style.reset, off: '  Second'  },
    { on: style.green + '➤ Third' + style.reset,  off: '  Third'   },
    { on: style.green + '➤ Fourth' + style.reset, off: '  Fourth'   }
];

const docker = [
    { on: style.green + '➤ Second' + style.reset, off: '  Second'  },
    { on: style.green + '➤ Third' + style.reset,  off: '  Third'   },
    { on: style.green + '➤ Fourth' + style.reset, off: '  Fourth'   }
];

//
keyListener.on(key => {

    //
    if (key === character.close) {
        cursor.show();
        clear.screen();

        output.write(style.green + style.bold + '♥︎ Zendesk\n' + style.reset);
        output.write(style.gray + '  Orchid\n' + style.reset);
        output.write('\n');
        output.write(style.gray + '  Bye...\n' + style.reset);

        process.exit();
    }

});

//
clear.screen();
cursor.hide();

//
output.write(style.green + style.bold + '♥︎ Zendesk\n' + style.reset);
output.write(style.gray + '  Orchid\n' + style.reset);
output.write('\n');

//
var instance = {
  'navigation':  new menu.init(navigation),
  'new_hire':    new menu.init(new_hire),
  'new_project': new menu.init(new_project),
  'docker':      new menu.init(docker)
}

//
instance.navigation.render();

//
instance.navigation.on(selection => {

  switch (selection) {
    case 0:
      instance.navigation.destroy();
      instance.new_hire.render();
    break;

    case 1:
      instance.navigation.destroy();
      instance.new_project.render();
    break;

    case 2:
      instance.navigation.destroy();
      instance.docker.render();
    break;

    case 3:
      cursor.show();
      clear.screen();

      output.write(style.green + style.bold + '♥︎ Zendesk\n' + style.reset);
      output.write(style.gray + '  Orchid\n' + style.reset);
      output.write('\n');
      output.write(style.gray + '  Bye...\n' + style.reset);

      process.exit();
    break;
  }

});

//
instance.new_hire.on(selection => {

  switch (selection) {
    case 0:
      instance.navigation.destroy();
      instance.new_hire.render();
    break;

    case 1:
      instance.navigation.destroy();
      instance.new_project.render();
    break;

    case 2:
      instance.docker.destroy();
      instance.navigation.render();
    break;
  }

});
