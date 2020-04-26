import React from 'react';

const App = () => (
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

export default App;
