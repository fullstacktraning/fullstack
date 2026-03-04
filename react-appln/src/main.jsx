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
import Master from './components/Master.jsx'
import Main from './components/Main.jsx'
import GetEx1 from './components/GetEx1.jsx'
import GetEx2 from './components/GetEx2.jsx'
createRoot(document.getElementById('root')).render(
   <GetEx2></GetEx2>,
)
