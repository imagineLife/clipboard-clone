## MenuBar
MODULES
- tray
	- creating 'traditional' menus
- menubar
	- https://github.com/maxogden/menubar
	- puts a menu in the tray
	- puts a little browser window that 'looks && feels' like a menu


### Process
- Install package
  - ```npm install menubar```
- add menubar to main.js
	- ```import Menubar from 'menubar'```
	- ```
	const mb = Menubar({
		preloadWindow: true //pre-render the menu-bar,
		index: `file://${__dirname}/index.jade`
	})
	mb.on('ready', () => {
		... cut && paste 4 bits...
		- const createClippingShortcut...
		- if(!createClippingChortcut)...
		- const writeToClipboardShortcut...
		- if(!writeToClipboardShortcut)...
	})
```
- comment-out the app.onReady