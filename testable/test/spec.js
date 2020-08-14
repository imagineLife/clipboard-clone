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

describe('App Functionality', function() {

  this.timeout(7000);

  beforeEach(() => {
    return app.start();
  });

  afterEach(() => {
    if (app && app.isRunning()) {
      return app.stop();
    }
  });

  it('has a button with the text "Copy from Clipboard"', async () => {
    const btnTxt = await app.client.getText('#copy-from-clipboard')
    return assert.equal(btnTxt,"Copy from Clipboard");
  });

  it('should not have any clippings when the application starts up', async () => {
    const clips = await app.client.$$('.clippings-list-item')
    return assert.equal(clips.length,0);
  });

  it('should have one clipping when the "Copy From Clipboard" button has been pressed', async () => {
    // load
    await app.client.waitUntilWindowLoaded();

    // click the btn
    await app.client.click('#copy-from-clipboard');

    // count clips
    const clips = await app.client.$$('.clippings-list-item')

    return assert.equal(clips.length, 1)
  });

  it('should successfully remove a clipping', async () => {
    // load
    await app.client.waitUntilWindowLoaded();

    // click the btn
    await app.client.click('#copy-from-clipboard')
    .moveToObject('.clippings-list-item')
    .click('.remove-clipping');

    // count clips
    const clips = await app.client.$$('.clippings-list-item')

    return assert.equal(clips.length, 0)
  });

  it('should have the correct text in a new clipping', async () => {
   const dt = "default text here";

   //load app
   await app.client.waitUntilWindowLoaded();

   //set text in clipboard
   await app.electron.clipboard.writeText(dt)

   //copy
   await app.client.click('#copy-from-clipboard')

   //assure text that was is IS on-screen
   const clipTxt = await app.client.getText('.clipping-text')
   return assert.equal(clipTxt,dt);

  });

  it.skip('it should write the text of the clipping to the clipboard', async () => {
    /*
     * Independent Exercise!
     *
     * In this test, we want to make sure that Clipmaster replaces whatever is
     * already on a the clipboard. We'll implement the following steps.
     *
     * - Write a string of text to the clipboard.
     * - Click "Copy from Clipboard"
     * - Write something else to the clipboard.
     * - Click the .copy-clippling element that was created when you added
     *   the first string to Clipmaster
     * - Assert that the clipboard currently contains that first string using
     *   `app.electron.clipboard.readText()`.
     *
     */
  });
});