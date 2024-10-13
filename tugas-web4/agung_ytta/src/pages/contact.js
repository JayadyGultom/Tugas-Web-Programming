import React, { useState, useEffect } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: 'general'
    });

    const [sponsors, setSponsors] = useState([]);
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        // Fetch sponsors and branches data here
        setSponsors(['Unbin', 'Cursor', 'Kominfo']);
        setBranches(['Jakarta', 'Surabaya', 'Bandung', 'Medan']);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '', subject: 'general' });
    };

    return (
        <div className="bg-gradient-to-r from-gray-900 to-black min-h-screen py-12 font-sans">
            <div className="container mx-auto px-4">
                <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">Hubungi Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-white font-bold mb-2">Nama</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="subject" className="block text-white font-bold mb-2">Subjek</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                                    >
                                        <option value="general">Pertanyaan Umum</option>
                                        <option value="ticket">Pemesanan Tiket</option>
                                        <option value="event">Acara Khusus</option>
                                        <option value="partnership">Kerjasama</option>
                                        <option value="feedback">Saran dan Masukan</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-white font-bold mb-2">Pesan</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                                        required
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-red-600 text-white font-bold py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
                                    >
                                        Kirim Pesan
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Cabang Bioskop Kami</h3>
                            <ul className="list-disc list-inside text-white mb-6">
                                {branches.map((branch, index) => (
                                    <li key={index}>{branch}</li>
                                ))}
                            </ul>
                            <h3 className="text-2xl font-bold text-white mb-4">Sponsor Kami</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {sponsors.map((sponsor, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300"
                                    >
                                        {sponsor}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
