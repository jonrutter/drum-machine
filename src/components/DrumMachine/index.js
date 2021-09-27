import React from 'react';

import * as s from './DrumMachine.module.css';

// components
import Display from '../Display';
import Controls from '../Controls';
import DrumPad from '../DrumPad';

// data
import { bankHeater, bankPiano } from '../../data';

import { useGlobalContext } from '../../context';
import { logRoles } from '@testing-library/dom';

const DrumMachine = () => {
  const { bank } = useGlobalContext();
  return (
    <div className={s.wrapper} id="drum-machine">
      <div className={s.content}>
        <header className={s.header}>
          <Display />
          <Controls />
        </header>
        <div className={s.body}>
          <h2>Buttons</h2>
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
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
