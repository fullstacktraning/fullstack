import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Comp1 from './components/Comp1.jsx'
import Comp3 from './components/Comp3.jsx'
import State from './components/State.jsx'
import Parent1 from "./components/Parent1.jsx"
import Parent2 from './components/Parent2.jsx'
import Parent3 from './components/Parent3.jsx'
import Parent4 from './components/Parent4.jsx'
createRoot(document.getElementById('root')).render(
   <Parent4></Parent4>,
)
