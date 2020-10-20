import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initalState } from './reducer';
// import "./index.css"



ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initalState} reducer={reducer}>
        <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
