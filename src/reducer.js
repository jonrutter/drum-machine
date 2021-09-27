export const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_POWER':
      return { ...state, isOn: !state.isOn };
    case 'TOGGLE_BANK':
      const newBank = state.bank === 'heater' ? 'piano' : 'heater';
      return { ...state, bank: newBank };
    case 'PLAY_SOUND':
      return { ...state, playing: action.payload };
    default:
      // If unknown reducer action type, throw warning in console, but return the current state
      console.warn(`Warning: unknown reducer action type: ${action.type}`);
      return state;
  }
};
