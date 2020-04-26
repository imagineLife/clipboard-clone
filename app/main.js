import {
  app,
  BrowserWindow,

  // allowing Keyboard shortcuts
  globalShortcut,
} from 'electron';

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require('electron-squirrel-startup')) {
  app.quit();
}

/*
	global reference of the window object,
	preventing js from garbage-collecting the mainWindow var;
*/
let mainWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // load the frontent html && extended js files
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Auto-Open dev-tools
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    /*
			Dereference the window object
			NOTE: the app CAN store windows in an array
			to support multi windows
			this is the time the corresponding element should be deleted (self-'garbage-collection')
    */
    mainWindow = null;
  });

  // register Cmd + Shift + ! to save new txt to clipboard
  const createClippingShortcut = globalShortcut.register('CommandOrControl+!', () => {
    // emit a socket-style event
    mainWindow.webContents.send('create-new-clipping');
  });

  // register Cmd + Shift + ! to save new txt to clipboard
  const copyClipToBoard = globalShortcut.register('CommandOrControl+@', () => {
    // emit a socket-style event
    mainWindow.webContents.send('copy-to-board');
  });

  // event-registration error handling
  if (!createClippingShortcut) {
    console.error('Event Registration Failed:', 'create-new-clipping');
  }

  // event-registration error handling
  if (!copyClipToBoard) {
    console.error('Event Registration Failed:', 'copy-to-board');
  }
};

/*
	...when Electron has finished initialization
	&&
	is ready to create browser windows.
	Some APIs can only be used after this event occurs
*/
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  /*
		prevent app window(s) from staying open in osx
	*/
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  /*
		open a window after clicking a dock-icon && there ARE NONE
	*/
  if (mainWindow === null) {
    createWindow();
  }
});
