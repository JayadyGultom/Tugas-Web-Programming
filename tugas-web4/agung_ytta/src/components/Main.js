import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Showtimes from '../pages/showtimes';
import MovieGallery from '../pages/movie';
import Contact from '../pages/contact';

function Main() {
  return (
    <div className="min-h-screen w-full bg-blue-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Showtimes" element={<Showtimes />} />
        <Route path="/MovieGallery" element={<MovieGallery />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Main;
