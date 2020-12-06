import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Amplify from 'aws-amplify';
Amplify.configure({
  Auth: {
      identityPoolId: 'ap-northeast-1:7d48a52a-f59c-4218-8a54-4b3eb5d0aabe',
      region: 'ap-northeast-1',
      userPoolId: 'ap-northeast-1_m2jC1w0se',
      userPoolWebClientId: '1t1rvpden51ggpj10mepbq0mgr',
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
