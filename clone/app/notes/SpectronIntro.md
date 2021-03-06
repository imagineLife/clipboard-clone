
## Intro to Spectron
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

SETUP TESTING BLOCK && 'Smoke' tests

- describe('tests', () => {
	- this.timeout(10000) //buy time for re-building


	// before && after
	beforeEach(() => {
		return app.start()
	})

	afterEach(() => {
		return app.stop()
	})

	//removable smoke-test
	it('should just work!!', () => {
		assert.ok(true);
	})

	it('shows initial window' async () => {
		const count = await app.client.getWindowCount()
		return assert(count, 1);
	})

	it('has the correct title', async () => {
		const t = await app.client.waitUntilWindowLoaded.getTitle()
		return assert.equal(t,'the-title-goes-here')
	})

	it('doesn't have the dev tools open', async () => {
	const t = devToolsOpen app.client.waitUntilWindowLoaded.browserWindow.isDevToolsOpened()
		return assert.equal(devToolsOpen,false)
	})
- })