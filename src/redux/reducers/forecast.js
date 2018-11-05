import * as types from './../actions';

import { dummyData } from './dummyData.js';

const forecast = (
  state = dummyData,
  action
) => {
  switch(action.type){
    case types.UPDATE_FORECAST:
      return (action.payload);
    default:
      return state;
  }
}

export default forecast;