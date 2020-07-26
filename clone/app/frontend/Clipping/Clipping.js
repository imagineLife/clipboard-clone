import React from 'react';
import './Clipping.js';

const Clipping = ({ content, onClick }) => (
  <article className="clippings-list-item">
    <div className="clipping-text" disabled>
      {content}
    </div>
    <div className="clipping-controls">
      <button onClick={() => onClick(content)}>
        &rarr; Clipboard
      </button>
      <button>Update</button>
    </div>
  </article>
);


export default Clipping;
