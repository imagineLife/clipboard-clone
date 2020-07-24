## Spectron Tests
 ### Has element with text
 ```
 it('has button with txt "Copy from clipboard", () => {
  const btnText = await app.client.getText('#copy-from-clipboard')
  return assert.equal(btnText, 'Copy from Clipboard')
})
 ```