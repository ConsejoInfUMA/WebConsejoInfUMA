import {LOAD_FROM_STORAGE} from '../actions/App';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FROM_STORAGE:
            if (action.id === 'logo_navbar') {
                return {
                    ...state,
                    navBarLogo: action.httpUrl
                };
            } else {
                return state;
            }
        default:
            return state;
    }
};
