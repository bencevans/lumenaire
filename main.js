const {app, Tray, Menu, BrowserWindow} = require('electron');
const path = require('path');

const iconPath = path.join(__dirname, 'logo.png');
let appIcon = null;
let win = null;

app.on('ready', function(){
  win = new BrowserWindow({show: false});
  appIcon = new Tray(iconPath);
  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Enabled',
      type: 'radio',
      icon: iconPath,
      checked: true,
      click: function () {
        console.log(this)
      }
    },
    {
      label: 'Links',
      submenu: [
        { label: 'GitHub' },
        { label: 'Issues' }
      ]
    },
    { label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:',
    }
  ]);
  appIcon.setToolTip('This is my application.');
  appIcon.setContextMenu(contextMenu);
});
