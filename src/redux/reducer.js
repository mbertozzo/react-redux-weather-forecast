import { combineReducers } from 'redux';
import place from './reducers/place';
import forecast from './reducers/forecast';

export default combineReducers({
  place,
  forecast
})