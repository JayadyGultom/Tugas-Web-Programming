import React from 'react';

function Beranda() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center relative flex flex-col justify-between" style={{backgroundImage: "url('/images/unbinbg.jpg')"}}>
            
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex-grow">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Selamat Datang di Beranda
                        </h1>
                        <p className="mt-5 max-w-xl mx-auto text-xl text-white">
                            Ini adalah halaman Beranda aplikasi Bogor-SPMI.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative z-10 text-center pb-8">
                <p className="text-white text-lg">Universitas Binaniaga Informatika</p>
            </div>
        </div>
    );
}

export default Beranda;
