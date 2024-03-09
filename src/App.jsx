import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './content/Home'
import About from './content/About'

import './App.css';
import { Blog } from './content/Blog';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/blog' element={ <Blog /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
