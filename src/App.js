import React, { useEffect, useRef } from 'react';
import { createStore, combineReducers } from 'redux'
import LikesAndDislikes from './test/LikesAndDislikes';
import likesReducer from './store/reducer/likes';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  likesAndDislike : likesReducer
});

const store = createStore(rootReducer);

const App = () => {
  
  return (
    <Provider store={store}><LikesAndDislikes /></Provider>
    )
}

export default App;
