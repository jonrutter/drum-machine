import React from 'react';

// styling
import * as s from './Display.module.css';

import { useGlobalContext } from '../../context';

const Display = () => {
  const { isOn, bank, playing } = useGlobalContext();
  return (
    <div className={isOn ? `${s.wrapper} ${s.on}` : s.wrapper}>
      <div className={s.content}>
        <p className={s.bank}>{bank.toUpperCase()}</p>
        <p id="display" className={s.playing}>
          {playing}
        </p>
      </div>
    </div>
  );
};

export default Display;
