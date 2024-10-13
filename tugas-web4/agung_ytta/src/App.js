import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer'
import Banner from './components/Banner';
import MovieGallery from './pages/movie';

function App() {
  const [showMovies, setShowMovies] = useState(false);

  const handleMovieClick = () => {
    setShowMovies(true);
  };

  return (
    <Router>
      <Navbar />
      <Banner/>
      <Main />
      <Footer />
    </Router>
  );

}

export default App;
