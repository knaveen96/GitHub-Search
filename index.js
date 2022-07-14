import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

//dev-lkxwejsw.us.auth0.com
//GRrIQGkfRbSomgUeAxNWZCdGD4Duy5Zq

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-lkxwejsw.us.auth0.com'
      clientId='GRrIQGkfRbSomgUeAxNWZCdGD4Duy5Zq'
      redirectUri={window.location.origin}>
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

serviceWorker.unregister();
