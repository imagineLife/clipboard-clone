import { app, BrowserWindow } from 'electron';


/*
	global reference of the window object,
	preventing js from garbage-collecting the mainWindow var;
*/
let mainWindow;

const createWindow = () => {
  console.log('-- CREATE WINDOW FN--');
};

/*
	...when Electron has finished initialization
	&&
	is ready to create browser windows.
	Some APIs can only be used after this event occurs
*/
app.on('ready', createWindow);
