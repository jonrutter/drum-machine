import React from 'react';

import * as s from './Switch.module.css';

const Switch = ({ label = '', handler, value }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.label}>{label}</p>
      <label className={s.switcher}>
        <span className={s.srOnly}>{`Toggle switch for ${label}`}</span>
        <input
          type="checkbox"
          checked={value}
          onChange={handler}
          className={s.hiddenCheckbox}
        />
        <span className={s.slider}></span>
      </label>
    </div>
  );
};

export default Switch;
