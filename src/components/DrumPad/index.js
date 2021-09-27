import React, { useRef, useEffect } from 'react';

import * as s from './DrumPad.module.css';

import { useGlobalContext } from '../../context';

// helper function
const createId = (description) => {
  return description.toLowerCase().split(' ').join('-');
};

const DrumPad = ({ keyCode, keyName, description, url }) => {
  const audioRef = useRef(null);
  const { isOn, playSound } = useGlobalContext();

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handle = () => {
    if (!isOn) return;
    if (audioRef.current !== null) {
      playSound(description);
      audioRef.current.play();
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === keyCode) {
      handle();
    }
  };

  return (
    <button
      className={`drum-pad ${s.btn}`}
      id={createId(description)}
      onClick={handle}
    >
      {keyName}
      <audio src={url} className="clip" id={keyName} ref={audioRef}></audio>
    </button>
  );
};

export default DrumPad;
