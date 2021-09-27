import React from 'react';

import * as s from './DrumMachine.module.css';

// components
import Display from '../Display';
import Controls from '../Controls';
import DrumPad from '../DrumPad';

// data
import { bankHeater, bankPiano } from '../../data';

// context
import { useGlobalContext } from '../../context';

const DrumMachine = () => {
  const { bank } = useGlobalContext();
  return (
    <div className={s.wrapper} id="drum-machine">
      <div className={s.content}>
        <header className={s.header}>
          <h1 className={s.title}>Drum Machine</h1>
          <Display />
        </header>
        <div className={s.body}>
          <ul className={s.padGrid}>
            {bank === 'heater'
              ? bankHeater.map((pad, index) => {
                  return (
                    <li key={index}>
                      <DrumPad {...pad} />
                    </li>
                  );
                })
              : bankPiano.map((pad, index) => {
                  return (
                    <li key={index}>
                      <DrumPad {...pad} />
                    </li>
                  );
                })}
          </ul>
          <div className={s.controlsWrap}>
            <Controls />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
