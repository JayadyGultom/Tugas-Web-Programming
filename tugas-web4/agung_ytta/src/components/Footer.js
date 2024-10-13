import React from 'react';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-950 to-indigo-950 text-gray-300 py-12 font-sans">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-3xl font-bold mb-4 font-serif text-yellow-500">Cinema Jaya Film</h3>
                        <p className="text-gray-400 mb-4">Nikmati pengalaman menonton terbaik di bioskop kami.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold mb-4 text-yellow-500">Tautan Cepat</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li><a href="#" className="hover:text-yellow-500 transition duration-300">Film Terkini</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition duration-300">Jadwal Tayang</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition duration-300">Promo</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition duration-300">Tentang Kami</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold mb-4 text-yellow-500">Hubungi Kami</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li><i className="far fa-envelope mr-2"></i>jayadigultom@gmail.com</li>
                            <li><i className="fas fa-phone mr-2"></i>+62 895 3962 12032</li>
                            <li><i className="fas fa-map-marker-alt mr-2"></i>Jl. Roda Pembangunan , bogor</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Cinema Jaya Film. Hak Cipta Dilindungi.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
