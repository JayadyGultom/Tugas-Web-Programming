import React from 'react';

function Pkm() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Selamat Datang di PKM</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="nama" className="block text-gray-700 font-semibold mb-2">Nama</label>
                        <input type="text" id="nama" name="nama" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Masukkan nama Anda" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Masukkan email Anda" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="pesan" className="block text-gray-700 font-semibold mb-2">Pesan</label>
                        <textarea id="pesan" name="pesan" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tulis pesan Anda"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Kirim</button>
                </form>
            </div>
        </div>
    );
}

export default Pkm;
