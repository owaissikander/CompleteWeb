import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import ContactUs from './page/ContactUs'
import NotFound from './page/NoteFound'
import Header from './components/Header'
import Auth from './page/Auth'
import SignIn from './page/Auth/signin'
import SignUp from './page/Auth/signup'
import Books from './page/book/book'
import BookDetail from './page/book/booksDetail'
function App() {

  return (

    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/NoteFound' element={<NotFound />} />

        <Route path='auth'>
          <Route index element={<Auth />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Route>


        <Route path='/books'>
          <Route index element={<Books />} />
          <Route path=':title' element={<BookDetail />} />

        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
