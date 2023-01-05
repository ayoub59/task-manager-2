import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import Counter from './counter/Counter';
import { counterReducer } from './counter/counterReducers';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: {
    counter: counterReducer,


  }
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Counter />
    </Provider>

  </React.StrictMode>


);
