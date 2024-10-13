import React, { useState, useEffect, useMemo } from 'react';
import { FaPlay, FaTicketAlt } from 'react-icons/fa';

// Impor poster
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

function Banner() {
    const [currentPoster, setCurrentPoster] = useState(0);
    const posters = useMemo(() => [poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8, poster9, poster10, poster11, poster12, poster13], []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPoster((prev) => (prev + 1) % posters.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [posters.length]);

    // Function to get the previous and next poster indices
    const getSurroundingPosters = (current) => [
        (current - 1 + posters.length) % posters.length,
        current,
        (current + 1) % posters.length
    ];

    return (
        <div className="relative h-[70vh] bg-gradient-to-r from-black to-gray-900 overflow-hidden">
            {/* Background video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20"
                >
                    <source src="/path-to-your-cinema-background-video.mp4" type="video/mp4" />
                    <p className="text-white text-center">Your browser does not support the video tag.</p>
                </video>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-between px-8 md:px-16">
                <div className="text-white max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-red-600 drop-shadow-lg">Bioskop Megah</h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-300">
                        Pengalaman menonton terbaik dengan teknologi canggih dan kenyamanan premium
                    </p>
                    
                    <div className="flex space-x-4">
                        <a
                            href="/tickets"
                            className="flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                        >
                            <FaTicketAlt className="mr-2" /> Beli Tiket Sekarang
                        </a>
                    </div>
                </div>

                {/* Updated Poster Carousel */}
                <div className="hidden md:flex items-center space-x-4">
                    {getSurroundingPosters(currentPoster).map((index, i) => (
                        <div
                            key={index}
                            className={`relative w-48 h-72 transition-all duration-500 ${
                                i === 1
                                    ? 'scale-110 z-10'
                                    : 'scale-90 blur-sm'
                            }`}
                        >
                            <img
                                src={posters[index]}
                                alt={`Movie Poster ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent"></div>
            <div className="absolute top-4 left-4 w-24 h-24 border-4 border-red-600 rounded-full opacity-50"></div>
            <div className="absolute bottom-4 right-4 w-32 h-32 border-4 border-red-600 rounded-full opacity-50"></div>
        </div>
    );
}

export default Banner;
