import React, { useState } from 'react';
import { clipboard } from 'electron';

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
            <li key={`clipping-${clipIdx}`}>{clip.content}</li>))}
        </div>
      </section>
    </main>
  );
};

export default App;
