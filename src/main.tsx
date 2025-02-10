import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../global.css'
//import './index.css'
//import Card from './components/card'
import AddButton from './components/addbutton'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex justify-center">
      <div className="grid p-5 px-32 m-5 font-bold border-2 lg:text-6xl md:text-5xl sm:text-4xl border-cyan-200 rounded-2xl place-items-center">
        Fake Data Generator
      </div>
    </div>
    <div className="grid place-items-center">
      <AddButton />
    </div>
  </StrictMode>
)
