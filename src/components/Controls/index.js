import React from 'react';

import * as s from './Controls.module.css';

import { useGlobalContext } from '../../context';

import Switch from '../Switch';

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
      <div className={s.row}>
        <Switch label="Power" handler={togglePower} value={isOn} />
      </div>
      <div className={s.row}>
        <Switch label="Bank" handler={toggleBank} value={bank === 'heater'} />
      </div>
    </div>
  );
};

export default Controls;
