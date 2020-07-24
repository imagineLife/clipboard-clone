
## Spectron Tests
 ### Has element with text
 ```
 it('has button with txt "Copy from clipboard", async () => {
  const btnText = await app.client.getText('#copy-from-clipboard')
  return assert.equal(btnText, 'Copy from Clipboard')
})
 ```

 ### No 'Initial' Data via ui-represented data
 ```
 it('should have 0 clippings on-load', async () => {
  //let ui load
  await app.client.waitUntilWindowLoaded();
const clpItms = await app.client.$$('.clippings-list-item')
return assert.equal(clpItms.length, 0)
})
 ```
 
 ### Responds to user-input, stores clipping on-click
 ```
 it('should have 0 clippings on-load', async () => {
  //let ui load
  await app.client.waitUntilWindowaLoaded();
  await app.client.click('#copy-from-clipboard')
const clpItms = await app.client.$$('.clippings-list-item')
return assert.equal(clpItms.length, 1)
})
 ```