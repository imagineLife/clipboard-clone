import { app, BrowserWindow } from 'electron';


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
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
};

/*
	...when Electron has finished initialization
	&&
	is ready to create browser windows.
	Some APIs can only be used after this event occurs
*/
app.on('ready', createWindow);
