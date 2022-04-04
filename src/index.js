import React from 'react';
import ReactDOM from 'react-dom';
// import ReactRouter from 'react-router-dom'
import './styles/index.css';
import App from './components/layouts/app';
// import Home from './components/home'
//import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';

const renderReactDom = () => {
  /*ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );*/
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

if(window.cordova) {
  document.addEventListener('deviceready', () => renderReactDom(), false);
} else {
  renderReactDom();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();