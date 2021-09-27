import React from 'react';

// styling
import * as s from './Display.module.css';

import { useGlobalContext } from '../../context';

const Display = () => {
  const { isOn, bank, playing } = useGlobalContext();
  return (
    <div className={s.wrapper}>
      <section className={s.content}>
        <h2>Display</h2>
        <p>{isOn ? 'Power is on' : 'Power is not on'}.</p>
        <p>{isOn && `Bank: ${bank}.`}</p>
        <p>
          Currently playing: <span id="display">{isOn && playing}</span>
        </p>
      </section>
    </div>
  );
};

export default Display;
