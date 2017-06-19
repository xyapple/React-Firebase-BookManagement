/*Redux's built-in combineReducers function to create
*a single object that contains a bunch of reducers
*/

import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';


const rootReducer = combineReducers({
  gifs: GifsReducer
  modal:ModalReducer
});

export default rootReducer;
