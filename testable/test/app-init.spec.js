// NODE
const assert = require('assert');
const path = require('path');

// APP
const Application = require('spectron').Application;
const electronPath = require('electron');

const app = new Application({
  path: electronPath,
  args: [path.join(__dirname, '..')],
});

describe('App Inits...', function() {
  const expectedTitle = 'Demo Testable';

  this.timeout(5000);

  beforeEach(() => {
    return app.start();
  });

  afterEach(() => {
    if (app && app.isRunning()) {
      return app.stop();
    }
  });

  it('smoke', () => {
    // Delete this test as soon as you write one of your own.
    assert.ok(true);
  });

  it('shows a single initial window', async () => {
    const windowCount = await app.client.getWindowCount();
    return assert.equal(windowCount, 1);
  });

  it('has the correct title', async () => {
    const windowTitle = await app.client.waitUntilWindowLoaded().getTitle()
    return assert.equal(windowTitle, expectedTitle);
  });

  it('does not have the developer tools open', async () => {
    const open = await app.client.waitUntilWindowLoaded()
      .browserWindow
      .isDevToolsOpened()
      return assert.equal(open, false)
  });
})