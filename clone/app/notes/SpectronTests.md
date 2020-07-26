
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
 it('should have 1 clippings after button-click', async () => {
  //let ui load
  await app.client.waitUntilWindowaLoaded();
  await app.client.click('#copy-from-clipboard')
const clpItms = await app.client.$$('.clippings-list-item')
return assert.equal(clpItms.length, 1)
})
 ```

 ### Responds to user-input, removes a clipping
 ```
 it('should have 0 clippings after "removing" a clipping', async () => {
  //let ui load
  await app.client.waitUntilWindowaLoaded();
  await app.client
      .click('#copy-from-clipboard')
      .moveToObject('.clippings-list-item')
      .click('.remove-clipping')
const clpItms = await app.client.$$('.clippings-list-item')
return assert.equal(clpItms.length, 0)
})
 ```