import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { InAppProvider } from './lib/provider/Provider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InAppProvider>
      <App />
    </InAppProvider>
  </React.StrictMode>
)