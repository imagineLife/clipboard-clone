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

  const addClipping = () => {
  	// get new clipping from clipboard
    const content = clipboard.readText();
    const id = Date.now();
    const clipping = { id, content };

    // prep new state
    const newClippings = [clipping, ...clippings];

    // update state
    setClipping(newClippings);
  };

  // useEffect(() => {
  // 	ipcRenderer.on('create-new-clipping', addClipping);
  // }, []);

  const writeToClipboard = (c) => {
  	clipboard.writeText(c);
  };

  return (
    <main className="container">
      {/* Header */}
      <header className="controls">
        <button
          id="copy-from-clipboard"
          onClick={addClipping}
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
