import React, { useContext, useReducer } from 'react';
import { reducer } from './reducer';

const GlobalContext = React.createContext();

const defaultState = {
  isOn: true,
  bank: 'heater',
  volume: 20,
  playing: '',
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const playSound = (description) => {
    dispatch({ type: 'PLAY_SOUND', payload: description });
  };

  return (
    <GlobalContext.Provider value={{ ...state, dispatch, playSound }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default GlobalProvider;
