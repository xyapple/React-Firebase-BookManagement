import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import ReduxPromise from 'redux-promise';

export default function configureStore(initialState){
  // Redux's createStore function to create store and passed the rootReducer
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(ReduxPromise),
      window.devToolsExtension ? window.devToolsExtension():undefined
    )
    //allow the Redux Dev Tools Chrome extension to access our store
    //window.devToolsExtension ? window.devToolsExtension():undefined
  );
  if (module.hot){
     // Enable Webpack hot module replacement for reducers
     module.hot.accept('../reducers', ()=>{
       const nextRootReducer = require('../reducers').default;
       store.replaceReducer(nextRootReducer);
     });
  }
  return store;
}
