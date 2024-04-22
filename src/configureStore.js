import { createStore } from 'redux';

const initialState = {
    selectedIcon: null, 
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_ICON':
            return {
                ...state,
                selectedIcon: action.payload,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
