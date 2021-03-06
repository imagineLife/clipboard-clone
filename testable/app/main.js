const { app, BrowserWindow, globalShortcut } = require('electron');

let mainWindow;

// trigger the self-running crash-reporter
require('./../crash-handler');

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 300,
    show: false,
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const createClipping = globalShortcut.register('CommandOrControl+!', () => {
    mainWindow.webContents.send('create-new-clipping');
  });

  const writeClipping = globalShortcut.register('CmdOrCtrl+Alt+@', () => {
    mainWindow.webContents.send('write-to-clipboard');
  });

  if (!createClipping) {
    console.error('Registration failed', 'createClipping');
  }
  if (!writeClipping) {
    console.error('Registration failed', 'writeClipping');
  }
});