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

  // side-effect to update clipping
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
  // get new clipping FROM clipboard

  useEffect(() => {
  	ipcRenderer.on('create-new-clipping', () => {
      setClippingEffect(true);
    });
  }, []);

  const writeToClipboard = (c) => {
  	clipboard.writeText(c);
  };

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
              onClick={writeToClipboard}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
