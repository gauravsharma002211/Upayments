import React from 'react'
import Create from './Pages/Create/Create'
import Detail from './Pages/Detail/Detail'
// import Home from './Pages/Home/Home'
import Main from './Pages/Main/Main';
import { Routes, Route } from 'react-router-dom';

const AppRoute = () => {
  return (
    <Routes>
    <Route path='/' element={<Main/>} />
    <Route path='/create' element={<Create/>} />   
    <Route path='/detail/:id' element={<Detail/>} />

  </Routes>
  )
}

export default AppRoute