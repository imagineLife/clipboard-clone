import React, { useState } from 'react';

const App = () => {
  const [clippings, setClipping] = useState([{ content: 'demo', id: 234 }]);
  return (
    <main className="container">
      {/* Header */}
      <header className="controls">
        <button id="copy-from-clipboard">
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
