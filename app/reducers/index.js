import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appState from './appReducer';

const rootReducer = combineReducers({
    routing,
    appState
});

export default rootReducer;
