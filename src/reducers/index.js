/*Redux's built-in combineReducers function to create
*a single object that contains a bunch of reducers
*/

import { combineReducers } from 'redux';
import GifsReducer from './gifs';

const rootReducer = combineReducers({
  gifs: GifsReducer
});

expord default rootReducer;
