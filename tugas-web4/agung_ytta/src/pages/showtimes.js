import React, { useState } from 'react';
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

function Showtimes() {
    const movies = [
        { title: "Movie 1", image: poster1, times: ["13:00", "16:30", "20:00"] },
        { title: "Movie 2", image: poster2, times: ["14:15", "17:45", "21:15"] },
        { title: "Movie 3", image: poster3, times: ["12:30", "15:45", "19:00", "22:15"] },
        { title: "Movie 4", image: poster4, times: ["11:00", "14:30", "18:00"] },
        { title: "Movie 5", image: poster5, times: ["13:45", "17:15", "20:45"] },
        { title: "Movie 6", image: poster6, times: ["10:00", "13:30", "17:00"] },
        { title: "Movie 7", image: poster7, times: ["12:00", "15:30", "19:00"] },
        { title: "Movie 8", image: poster8, times: ["14:00", "17:30", "21:00"] },
        { title: "Movie 9", image: poster9, times: ["15:15", "18:45", "22:15"] },
        { title: "Movie 10", image: poster10, times: ["16:30", "20:00", "23:30"] },
        { title: "Movie 11", image: poster11, times: ["17:45", "21:15", "00:45"] },
        { title: "Movie 12", image: poster12, times: ["19:00", "22:30", "02:00"] },
        { title: "Movie 13", image: poster13, times: ["20:15", "23:45", "03:15"] },
        { title: "Movie 14", image: poster14, times: ["COMING SOON"] },
        { title: "Movie 15", image: poster15, times: ["COMING SOON"] },
        { title: "Movie 16", image: poster16, times: ["COMING SOON"] },
        { title: "Movie 17", image: poster17, times: ["COMING SOON"] },
    ];

    return (
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen py-12 font-sans relative">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('https://example.com/path/to/cinema-background.jpg')"}}></div>
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
            <div className="container mx-auto px-4 relative z-20">
                
                <h1 className="text-4xl font-bold mb-8 text-white text-center">Jadwal Film</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {movies.map((movie, index) => (
                        <MovieCard 
                            key={index}
                            title={movie.title}
                            image={movie.image}
                            times={movie.times}
                        />
                    ))}
                </div>

                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Informasi Bioskop</h2>
                    <p className="text-white mb-4">
                        Bioskop kami menawarkan pengalaman menonton film terbaik dengan teknologi proyeksi dan suara terkini. Nikmati kursi yang nyaman dan makanan ringan lezat di food court kami.
                    </p>
                    <div className="text-center">
                        <a href="/booking" className="mt-4 bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block hover:bg-red-700">
                            Pesan Tiket Sekarang
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MovieCard({ title, image, times }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg shadow-md p-6 relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {times.map((time, index) => (
                    <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                        {time}
                    </span>
                ))}
            </div>
            <div 
                className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
                    isHovered ? 'opacity-75' : 'opacity-0 pointer-events-none'
                }`}
            ></div>
            <div 
                className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out ${
                    isHovered ? 'scale-100' : 'scale-90 opacity-0 pointer-events-none'
                }`}
            >
                <img 
                    src={image} 
                    alt={title} 
                    className="max-w-full max-h-full object-contain p-4"
                />
            </div>
        </div>
    );
}

export default Showtimes;
