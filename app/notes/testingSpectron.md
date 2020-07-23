
## Testing With Spectron
(https://www.electronjs.org/spectron)

Spectron is built on...
- webdriver, node-bindings built on...
  - selenium

### overview
```new Application()``` returns...
- ```client```: the underlying webdriver instance
- ```electron```: the renderer process api
- ```browserWindow```: the currently-active window
- ```webContents```: [see here](https://www.electronjs.org/docs/api/web-contents), but an eventEmitter, responsible for rendering and controlling a webpage && is a property of the [BrowserWindow](https://www.electronjs.org/docs/api/browser-window)
- ```mainProcess```: NODE's process object in the main process
- ```rendererProcess```: NODEs process object on the renderer process

### example Tests
SETUP
- build spec.js
- **dependencies**
	- assert
	- path
	- Application = require('spectron").Application
	- electronPath = require('electron')
- build app
	- new Application({
		- path: electronPath
		- args: [path.join[__dirname,'..]]
	- })

SETUP TESTING BLOCK
- describe('tests', () => {
	- this.timeout(10000) //
- })