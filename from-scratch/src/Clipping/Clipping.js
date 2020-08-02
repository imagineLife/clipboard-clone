import React from 'react';
import './Clipping.js';

const Clipping = ({ content, onClick, clipId, onRemove }) => (
  <article className="clippings-list-item">
    <div className="clipping-text" disabled>
      {content}
    </div>
    <div className="clipping-controls">

      <button onClick={() => onClick(content)}>
        &rarr; Clipboard
      </button>
    
      <button 
        className="remove-clipping" 
        onClick={() => onRemove(clipId)}
      >
        Remove
      </button>
    
    </div>
  </article>
);


export default Clipping;
