import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.tsx'
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  console.error("Missing Clerk Publishable Key. Please check your .env file.")
  throw new Error("Missing Clerk Publishable Key")
}

if (!PUBLISHABLE_KEY.startsWith('pk_test_') && !PUBLISHABLE_KEY.startsWith('pk_live_')) {
  console.error("Invalid Clerk Publishable Key format. Key should start with 'pk_test_' or 'pk_live_'")
  throw new Error("Invalid Clerk Publishable Key format")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)
