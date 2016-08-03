const {app, Tray, Menu, BrowserWindow} = require('electron');
const path = require('path');
const brightness = require('./app')
const iconPath = path.join(__dirname, 'logo.png');
const open = require('open')
let appIcon = null;
let win = null;

const activeWin = require('active-win')


app.on('ready', function (){
  win = new BrowserWindow({show: false});
  appIcon = new Tray(iconPath);
  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Links',
      submenu: [
        {
          label: 'Website / GitHub',
          click: () => {
            open('https://github.com/bencevans/lumenaire')
          }
        },
        {
          label: 'Discussion / Issues',
          click: () => {
            open('https://github.com/bencevans/lumenaire/issues')
          }
        }
      ]
    },
    { label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:',
    }
  ]);
  appIcon.setContextMenu(contextMenu);
});
