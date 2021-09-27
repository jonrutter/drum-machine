import React, { useContext, useReducer } from 'react';
import { reducer } from './reducer';

const AppContext = React.createContext();

const defaultState = {
  isOn: true,
  bank: 'heater',
  volume: 20,
  playing: '',
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const playSound = (description) => {
    dispatch({ type: 'PLAY_SOUND', payload: description });
  };

  return (
    <AppContext.Provider value={{ ...state, dispatch, playSound }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
