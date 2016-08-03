const {app, Tray, Menu, BrowserWindow} = require('electron');
const path = require('path');
const brightness = require('./app')
const iconPath = path.join(__dirname, 'logo.png');
let appIcon = null;
let win = null;

const activeWin = require('active-win')


app.on('ready', function (){
  win = new BrowserWindow({show: false});
  appIcon = new Tray(iconPath);
  var contextMenu = Menu.buildFromTemplate([
    {
      icon: iconPath,
      label: 'Links',
      submenu: [
        { label: 'Website / GitHub' },
        { label: 'Discussion & Issues' }
      ]
    },
    { label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:',
    }
  ]);
  appIcon.setContextMenu(contextMenu);
});
