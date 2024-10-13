import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaTicketAlt, FaCalendarAlt, FaInfoCircle, FaFilm } from 'react-icons/fa';

// Import movie posters
import poster1 from '../poster/poster1.jpg';
import poster2 from '../poster/poster2.jpg';
import poster3 from '../poster/poster3.jpg';
import poster4 from '../poster/poster4.jpg';
import poster5 from '../poster/poster5.jpg';
import poster6 from '../poster/poster6.jpg';
import poster7 from '../poster/poster7.jpg';
import poster8 from '../poster/poster8.jpg';
import poster9 from '../poster/poster9.jpg';
import poster10 from '../poster/poster10.jpg';
import poster11 from '../poster/poster11.jpg';
import poster12 from '../poster/poster12.jpg';
import poster13 from '../poster/poster13.jpg';
import poster14 from '../poster/poster14.jpg';
import poster15 from '../poster/poster15.jpg';
import poster16 from '../poster/poster16.jpg';
import poster17 from '../poster/poster17.jpg';


function Home() {
    // Movie data
    const nowShowingMovies = [
        { id: 1, title: "Pulau Hantu", genre: "Horror", duration: "95 Minutes", poster: poster1 },
        { id: 2, title: "Kuasa Gelap", genre: "Horror", duration: "96 Minutes", poster: poster2 },
        { id: 3, title: "Kemah Terlarang Kesurupan Massal", genre: "Horror", duration: "110 Minutes", poster: poster3 },
        { id: 4, title: "Jigra", genre: "Action", duration: "153 Minutes", poster: poster4 },
        { id: 5, title: "Lembayung", genre: "Horror, Thriller", duration: "123 Minutes", poster: poster5 },
        { id: 6, title: "Sumala", genre: "Horror, Thriller", duration: "113 Minutes", poster: poster6 },
        { id: 7, title: "The Wild Robot", genre: "Animation, Adventure", duration: "102 Minutes", poster: poster7 },
        { id: 8, title: "Bolehkah Sekali Saja Kemenangis", genre: "Drama", duration: "101 Minutes", poster: poster8 },
        { id: 9, title: "Start Up Never Give Up", genre: "Drama, Komedi", duration: "99 Minutes", poster: poster9 },
        { id: 10, title: "Home Sweet Loan", genre: "Drama, Comedy", duration: "112 Minutes", poster: poster10 },
        { id: 11, title: "Joker: Folie à Deux (IMAX 2D)", genre: "Crime, Thriller, Musical", duration: "138 Minutes", poster: poster11 },
        { id: 12, title: "Panda Plan", genre: "Action, Comedy", duration: "99 Minutes", poster: poster12 },
        { id: 13, title: "Canary Black", genre: "Action", duration: "103 Minutes", poster: poster13 },
    ];

    const comingSoonMovies = [
        { id: 14, title: "Pantaskah Aku Berhijab", releaseDate: "21 November 2024", poster: poster14 },
        { id: 15, title: "Venom: The Last Dance (IMAX 2D)", releaseDate: "tahun ini", poster: poster15 },
        { id: 16, title: "Venom: The Last Dance", releaseDate: "tahun ini", poster: poster16 },
        { id: 17, title: "Red One", releaseDate: "tahun ini", poster: poster17 },
    ];

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            {/* Hero Section with Description */}
            <div className="relative bg-black text-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                        <div className="lg:py-24">
                                            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                                <span className="block">Welcome to</span>
                                                <span className="block text-red-500">Cinema Jaya Film</span>
                                            </h1>
                                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                                Experience the magic of cinema with state-of-the-art technology and unparalleled comfort. Immerse yourself in a world of stories, adventures, and emotions.
                                            </p>
                                            <div className="mt-10 sm:mt-12">
                                                <Link to="/movies" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 transition duration-300 mr-4">
                                                    <FaPlay className="mr-2" /> Explore Movies
                                                </Link>
                                                <Link to="/showtimes" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-red-600 bg-white hover:bg-gray-50 transition duration-300">
                                                    <FaCalendarAlt className="mr-2" /> View Showtimes
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                            <div className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none">
                                                <FaFilm className="animate-pulse text-red-500" style={{ fontSize: '20rem' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rest of the content */}
            <div className="container mx-auto px-4 py-12" id="now-showing">
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-red-600">Now Showing</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                        {nowShowingMovies.map((movie) => (
                            <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 group">
                                <div className="relative h-64 overflow-hidden">
                                    <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-4 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                                        <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                                        <p className="text-sm text-gray-400 mb-4">{movie.genre} • {movie.duration}</p>
                                        <Link to="/tickets" className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300">
                                            <FaTicketAlt className="mr-2" /> Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-red-600">Coming Soon</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {comingSoonMovies.map((movie) => (
                            <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex group">
                                <div className="w-1/3 overflow-hidden">
                                    <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <div className="p-4 flex-1">
                                    <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                                    <p className="text-sm text-gray-400 mb-4">Release Date: {movie.releaseDate}</p>
                                    <button className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition duration-300">
                                        <FaInfoCircle className="mr-2" /> More Info
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-bold mb-8 text-red-600">Experience the Magic of Cinema</h2>
                    <p className="text-xl mb-8">Immerse yourself in stunning visuals and crystal-clear sound</p>
                    <div className="flex justify-center space-x-4">
                        <Link to="/movies" className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition duration-300">
                            <FaPlay className="mr-2" /> View All Movies
                        </Link>
                        <Link to="/showtimes" className="inline-flex items-center px-6 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-600 transition duration-300">
                            <FaCalendarAlt className="mr-2" /> Check Showtimes
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
