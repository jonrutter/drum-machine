import React from 'react';

import * as s from './Controls.module.css';

import { useGlobalContext } from '../../context';

const Controls = () => {
  const { isOn, bank, dispatch } = useGlobalContext();

  const togglePower = () => {
    dispatch({ type: 'TOGGLE_POWER' });
  };

  const toggleBank = () => {
    dispatch({ type: 'TOGGLE_BANK' });
  };

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <h2>Controls</h2>
        <button className={s.powerButton} onClick={togglePower}>
          Power Button
        </button>
        <br />
        <button className={s.powerButton} onClick={toggleBank}>
          Change Bank
        </button>
      </div>
    </div>
  );
};

export default Controls;
