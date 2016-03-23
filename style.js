//
const menu = {

  'navigation': [
      { on: style.green + '➤ New Hire' + style.reset,    off: '  New Hire'  },
      { on: style.green + '➤ New Project' + style.reset, off: '  New Project'   },
      { on: style.green + '➤ Docker' + style.reset,      off: '  Docker'   },
      { on: style.green + '➤ Exit' + style.reset,        off: '  Exit'  }
  ],

  'new_hire': [
      { on: style.green + '➤ Second' + style.reset, off: '  Second'  },
      { on: style.green + '➤ Third' + style.reset,  off: '  Third'   },
      { on: style.green + '➤ Back' + style.reset,   off: '  Back'   }
  ],

  'new_project': [
      { on: style.green + '➤ Second' + style.reset, off: '  Second'  },
      { on: style.green + '➤ Third' + style.reset,  off: '  Third'   },
      { on: style.green + '➤ Fourth' + style.reset, off: '  Fourth'   }
  ],

  'docker': [
      { on: style.green + '➤ Second' + style.reset, off: '  Second'  },
      { on: style.green + '➤ Third' + style.reset,  off: '  Third'   },
      { on: style.green + '➤ Fourth' + style.reset, off: '  Fourth'   }
  ]

};

//
const navigation  = new Menu(menu.navigation);
const new_hire    = new Menu(menu.new_hire);
const new_project = new Menu(menu.new_project);
const docker      = new Menu(menu.docker);

//
navigation.on(selection => {

  switch (selection) {
    case 0:
      navigation.destroy();
      new_hire.render();
    break;

    case 1:
      navigation.destroy();
      new_project.render();
    break;

    case 2:
      navigation.destroy();
      docker.render();
    break;
  }

});

new_hire.on(selection => {

  switch (selection) {
    case 0:
      new_hire.destroy();
    break;

    case 1:
      new_hire.destroy();
    break;

    case 2:
      new_hire.destroy();
      navigation.render();
    break;
  }

});

new_project.on(selection => {

  switch (selection) {
    case 0:
      new_project.destroy();
    break;

    case 1:
      new_project.destroy();
    break;

    case 2:
      new_project.destroy();
      navigation.render();
    break;
  }

});

docker.on(selection => {

  switch (selection) {
    case 0:
      docker.destroy();
    break;

    case 1:
      docker.destroy();
    break;

    case 2:
      docker.destroy();
      navigation.render();
    break;
  }

});

//
navigation.render();
