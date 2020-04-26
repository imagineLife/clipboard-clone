import { app, BrowserWindow } from 'electron';


/*
	global reference of the window object,
	preventing js from garbage-collecting the mainWindow var;
*/
let mainWindow;
