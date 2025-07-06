import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

// import '@fortawesome/fontawesome-free/css/all.min.css';
import {Auth0Provider} from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain="dev-i7ao15ju5gf5qr8m.us.auth0.com"
    clientId="0C4cQleYoKaCF0FG5K9aBHJ5L2OHu6HD"
    authorizationParams={{
      redirect_uri: window.location.origin ,
    }}
    cacheLocation='localstorage'
  >
      <BrowserRouter>
       <App />
      </BrowserRouter>
  </Auth0Provider>

  

  
)
