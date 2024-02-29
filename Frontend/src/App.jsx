// import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CreateBook from './pages/CreateBook';
import Home from './pages/Home';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';

const  App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create" element={<CreateBook/>} />
      <Route path="/books/edit/:id" element={<EditBook/>} />
      <Route path="/books/details/:id" element={<ShowBook/>} />
      <Route path="/books/delete/:id" element={<DeleteBook/>} />
     
    </Routes>
  )
}

export default App
