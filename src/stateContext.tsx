import React, { createContext, useReducer, useContext, ReactNode, Reducer } from 'react';

export type ActionType = 'HOME' | 'CONTACTS' | 'NOTIFICATIONS' | 'CHATS' | 'SETTINGS';

export type State = {
  currentComponent: ActionType;
};

export const initialState: State = {
  currentComponent: 'HOME',
};

type StateContextType = {
  state: State;
  dispatch: React.Dispatch<ActionType>;
};

const StateContext = createContext<StateContextType | undefined>(undefined);

export const useStateValue = (): StateContextType => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateValue must be used within a StateProvider');
  }
  return context;
};

const stateReducer: Reducer<State, ActionType> = (state, action) => {
  switch (action) {
    case 'HOME':
      return { ...state, currentComponent: 'HOME' };
    case 'CONTACTS':
      return { ...state, currentComponent: 'CONTACTS' };
    case 'NOTIFICATIONS':
      return { ...state, currentComponent: 'NOTIFICATIONS' };
    case 'CHATS':
      return { ...state, currentComponent: 'CHATS' };
    case 'SETTINGS':
      return { ...state, currentComponent: 'SETTINGS' };
    default:
      return state;
  }
};

export const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
