import React, {
  useState,
  useEffect,
} from 'react';

import {
  clipboard,
  ipcRenderer,
} from 'electron';

import Clipping from '../Clipping';
import './App.css'

// DB!!
import clippingsDB from '../../database';

const App = () => {
  const [clippings, setClippings] = useState([{ content: 'demo', id: 234 }]);
  const [clippingEffect, setClippingEffect] = useState(false);
  const [addToBoardFromApp, setAddToBoardFromApp] = useState(false);

  // clippings fether
  const fetchDBClippings = () => {
    clippingsDB('clippings')
      .select()
      .then(setClippings);
  };

  // fetch db data!
  useEffect(() => {
    fetchDBClippings();
  }, []);

  // side-effect to update app clipping-list from system clipboard
  useEffect(() => {
    if (clippingEffect) {
      const content = clipboard.readText();
      const id = Date.now();
      const clipping = { id, content };

      // prep new state
      const newClippings = [clipping, ...clippings];

      // update state
      setClippings(newClippings);
      setClippingEffect(false);
    }
  }, [clippingEffect]);

  // 
  useEffect(() => {
    if (addToBoardFromApp) {
      clipboard.writeText(addToBoardFromApp);
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
              onClick={() => {
                setAddToBoardFromApp(clip.content)
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
