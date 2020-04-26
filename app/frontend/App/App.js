import React, {
  useState,
  useEffect,
} from 'react';

import {
  clipboard,
  ipcRenderer,
} from 'electron';

import Clipping from '../Clipping';

const App = () => {
  const [clippings, setClipping] = useState([{ content: 'demo', id: 234 }]);
  const [clippingEffect, setClippingEffect] = useState(false);
  const [addToBoardFromApp, setAddToBoardFromApp] = useState(false);

  const writeToClipboard = (c) => {
    clipboard.writeText(c.content);
  };

  // side-effect to update app from clipboard
  useEffect(() => {
    if (clippingEffect) {
      const content = clipboard.readText();
      const id = Date.now();
      const clipping = { id, content };

      // prep new state
      const newClippings = [clipping, ...clippings];

      // update state
      setClipping(newClippings);
      setClippingEffect(false);
    }
  }, [clippingEffect]);

  useEffect(() => {
    if (addToBoardFromApp) {
      const firstClipping = clippings[0];
      console.log('firstClipping');
      console.log(firstClipping);

      if (firstClipping) writeToClipboard(firstClipping);
      setAddToBoardFromApp(false);
    }
  }, [addToBoardFromApp]);

  // register event listeners
  useEffect(() => {
  	ipcRenderer.on('create-new-clipping', () => {
      setClippingEffect(true);
    });

    ipcRenderer.on('copy-to-board', () => {
      setAddToBoardFromApp(true);
    });
  }, []);

  return (
    <main className="container">
      {/* Header */}
      <header className="controls">
        <button
          id="copy-from-clipboard"
          onClick={() => setClippingEffect(true)}
        >
          Copy From Clipboard
        </button>
      </header>

      {/* Content */}
      <section className="content">
        <div className="clipping-list">
          {clippings.map((clip, clipIdx) => (
            <Clipping
              key={`clipping-${clipIdx}`}
              content={clip.content}
              onClick={() => setAddToBoardFromApp(true)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
