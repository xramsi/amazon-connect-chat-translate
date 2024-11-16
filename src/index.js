import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "amazon-connect-streams"; // This will make the `connect` available in the current context.
import "amazon-connect-chatjs";


// Import semantic
import 'semantic-ui-less/semantic.less';

// Amplify imports for base install
import { Amplify } from "aws-amplify";
//import awsExports from "./aws-exports";
//import { Authenticator } from '@aws-amplify/ui-react'
//import '@aws-amplify/ui-react/styles.css'
import { Auth } from 'aws-amplify'

//Amplify.configure(awsExports);
// 
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: 'eud3venrcowtni0i',
      userPoolId: 'eu-west-2_yN7Qy3u0K',
      loginWith: { // Optional
        oauth: {
          responseType: 'code',
        },
        username: 'true',
        email: 'true', // Optional
        phone: 'false', // Optional
      }
    }
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
