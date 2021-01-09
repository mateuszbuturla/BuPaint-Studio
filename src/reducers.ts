import { combineReducers } from 'redux';
import titleReducer from 'actions/title';
import selectedToolReducer from 'actions/selectedTool';
import toolSettingsReducer from 'actions/toolSettings';

const rootReducer = combineReducers({
  title: titleReducer,
  selectedTool: selectedToolReducer,
  toolSettings: toolSettingsReducer,
});

export default rootReducer;
