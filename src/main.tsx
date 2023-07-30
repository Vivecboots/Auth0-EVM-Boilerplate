import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { WagmiConfig } from 'wagmi'
import { Auth0Provider } from '@auth0/auth0-react';

import { App } from './App'
import { config } from './wagmi'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <Auth0Provider
        domain="dev-izis0xfcx8kwkhd3.us.auth0.com"
        clientId="1kB9ySvN42L1N0pUNtP4OHnbGskosQ5D"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </WagmiConfig>
  </React.StrictMode>,
)
