import { combineReducers } from 'redux';
import titleReducer from 'actions/title';
const rootReducer = combineReducers({
  title: titleReducer,
});

export default rootReducer;
