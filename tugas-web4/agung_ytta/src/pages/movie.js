import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaInfoCircle, FaFilm } from 'react-icons/fa';

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

function MovieGallery() {
    const movieItems = [
        { id: 1, title: 'Inception', image: poster1, genre: 'Sci-Fi, Action', duration: '148 Minutes' },
        { id: 2, title: 'The Dark Knight', image: poster2, genre: 'Action, Crime', duration: '152 Minutes' },
        { id: 3, title: 'Interstellar', image: poster3, genre: 'Sci-Fi, Adventure', duration: '169 Minutes' },
        { id: 4, title: 'The Matrix', image: poster4, genre: 'Sci-Fi, Action', duration: '136 Minutes' },
        { id: 5, title: 'Avengers: Endgame', image: poster5, genre: 'Action, Adventure', duration: '181 Minutes' },
        { id: 6, title: 'The Avengers', image: poster6, genre: 'Action, Sci-Fi', duration: '143 Minutes' },
        { id: 7, title: 'John Wick', image: poster7, genre: 'Action, Thriller', duration: '101 Minutes' },
        { id: 8, title: 'The Batman', image: poster8, genre: 'Action, Crime', duration: '176 Minutes' },
        { id: 9, title: 'Pulp Fiction', image: poster9, genre: 'Crime, Drama', duration: '154 Minutes' },
        { id: 10, title: 'Forrest Gump', image: poster10, genre: 'Drama, Romance', duration: '142 Minutes' },
        { id: 11, title: 'The Shawshank Redemption', image: poster11, genre: 'Drama', duration: '142 Minutes' },
        { id: 12, title: 'The Godfather', image: poster12, genre: 'Crime, Drama', duration: '175 Minutes' },
        { id: 13, title: 'Fight Club', image: poster13, genre: 'Drama', duration: '139 Minutes' },
    ];

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            {/* Hero Section */}
            <div className="relative bg-black text-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                        <span className="block">Explore Our</span>
                                        <span className="block text-red-500">Movie Gallery</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        Discover a world of cinematic wonders. From thrilling action to heartwarming dramas, find your next favorite film here.
                                    </p>
                                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                                        <Link to="/#now-showing" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 transition duration-300">
                                            <FaPlay className="mr-2" /> Now Showing
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <FaFilm className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full text-red-500 opacity-20" style={{ fontSize: '20rem' }} />
                </div>
            </div>

            {/* Movie Gallery Section */}
            <div className="container mx-auto px-4 py-12" id="movie-gallery">
                <h2 className="text-3xl font-bold mb-8 text-red-600">Featured Movies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {movieItems.map((movie) => (
                        <div key={movie.id} className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                            <img src={movie.image} alt={movie.title} className="w-full h-auto object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-lg font-semibold text-white mb-1 truncate">{movie.title}</h3>
                                    <p className="text-sm text-gray-300 mb-2">{movie.genre} • {movie.duration}</p>
                                    <Link
                                        to="/#now-showing"
                                        className="block w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 text-sm text-center"
                                    >
                                        <FaInfoCircle className="inline mr-2" /> More Info
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action Section */}
            <section className="text-center py-12 bg-gray-800">
                <h2 className="text-3xl font-bold mb-8 text-red-600">Find Your Next Cinematic Adventure</h2>
                <p className="text-xl mb-8 text-gray-300">Explore our vast collection of movies and immerse yourself in captivating stories</p>
                <div className="flex justify-center space-x-4">
                    <Link to="/#now-showing" className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition duration-300">
                        <FaPlay className="mr-2" /> Now Showing
                    </Link>
                    <Link to="/showtimes" className="inline-flex items-center px-6 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-600 transition duration-300">
                        <FaInfoCircle className="mr-2" /> View Showtimes
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default MovieGallery;
