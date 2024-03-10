import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './content/Home'
import About from './content/About'
import Blog from './content/Blog';
import { MarkdownBlog } from './components/Blogs';

import './App.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/blog'>
          <Route index element={ <Blog /> } />
          <Route path=':blogName' element={ <MarkdownBlog /> } />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
