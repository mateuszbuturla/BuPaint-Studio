import { combineReducers } from 'redux';
import titleReducer from 'actions/title';
import selectedToolReducer from 'actions/selectedTool';
const rootReducer = combineReducers({
  title: titleReducer,
  selectedTool: selectedToolReducer,
});

export default rootReducer;
