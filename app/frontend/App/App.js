import React, { useState } from 'react';
import { clipboard } from 'electron';

const App = () => {
  const [clippings, setClipping] = useState([{ content: 'demo', id: 234 }]);

  const addClipping = () => {
    const content = clipboard.readText();
    const id = Date.now();

    const clipping = { id, content };

    setClipping({
      clippings: [clipping, ...clippings],
    });
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
          ...clippings will go here!
        </div>
      </section>
    </main>
  );
};

export default App;
