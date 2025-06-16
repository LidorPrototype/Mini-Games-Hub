import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

const environment = import.meta.env.VITE_ENVIRONMENT?.trim() || "unknown";
console.log("ENV:", import.meta.env.VITE_ENVIRONMENT);
let color;
/*
 * #16a34a
 * #dc2626
 * #eab308
**/
if (environment === "preprod") color = "#16a34a";
else if (environment === "prod") color = "#dc2626";
else if (environment === "unknown") color = "#eab308";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {environment && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 9999,
          backgroundColor: color,
          color: '#fff',
          fontSize: '0.75rem',
          fontWeight: '700',
          fontFamily: 'sans-serif',
          padding: '0.25rem 2.5rem',
          transform: 'rotate(45deg) translate(35%, -70%)',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          pointerEvents: 'none',
          textTransform: 'uppercase',
        }}
      >
        {environment.toUpperCase()}
      </div>
    )}
    <App />
  </StrictMode>,
)
