import { combineReducers } from 'redux';
import titleReducer from 'actions/title';
import selectedToolReducer from 'actions/selectedTool';
import toolSettingsReducer from 'actions/toolSettings';
import selectedColorReducer from 'actions/selectedColor';

const rootReducer = combineReducers({
  title: titleReducer,
  selectedTool: selectedToolReducer,
  toolSettings: toolSettingsReducer,
  selectedColor: selectedColorReducer,
});

export default rootReducer;
