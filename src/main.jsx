import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <div className=" bg-white h-[500px] p-10 m-10 rounded-md inline-flex">
      <App />
    </div>
    </>
  </StrictMode>,
)
