import { combineReducers } from 'redux';
import names from './names.reducer';
import sample1 from './sample1.reducer';

const rootReducer = combineReducers({
	names,
  	sample1
});

export default rootReducer;