import React, { createContext, useReducer, useContext, ReactNode, Reducer } from 'react';

// Определяем типы действий для редуктора
export type ActionType = 'HOME' | 'CONTACTS' | 'NOTIFICATIONS' | 'CHATS' | 'SETTINGS';

// Определяем тип состояния
export type State = {
  currentComponent: ActionType;
};

// Инициализируем начальное состояние
export const initialState: State = {
  currentComponent: 'HOME',
};

// Определяем контекст для хранения состояния и диспетчера
type StateContextType = {
  state: State;
  dispatch: React.Dispatch<ActionType>;
};

// Создаем контекст для состояния
const StateContext = createContext<StateContextType | undefined>(undefined);

// Создаем хук для получения текущего состояния из контекста
export const useStateValue = (): StateContextType => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateValue must be used within a StateProvider');
  }
  return context;
};

// Определяем редуктор для обработки действий и обновления состояния
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

// Создаем обертку-провайдер для обеспечения доступа к состоянию через контекст
export const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
