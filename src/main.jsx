import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiConfig } from 'wagmi';
import { Auth0Provider } from '@auth0/auth0-react';

import { App } from './App';
import { config } from './wagmi';

const auth0ProviderOptions = {
  domain: "dev-izis0xfcx8kwkhd3.us.auth0.com",
  clientId: "1kB9ySvN42L1N0pUNtP4OHnbGskosQ5D",
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
};


ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(
    React.StrictMode,
    {},
    React.createElement(
      WagmiConfig,
      { config: config },
      React.createElement(
        Auth0Provider,
        auth0ProviderOptions,
        React.createElement(App)
      )
    )
  )
);
