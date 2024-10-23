import React, { useState } from 'react';

function Upload_laporan_pkm() {
    const [laporanPKM, setLaporanPKM] = useState([]);
    const [formData, setFormData] = useState({
        judul: '',
        tanggal: '',
        penulis: '',
        file: null
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLaporanPKM([...laporanPKM, formData]);
        setFormData({ judul: '', tanggal: '', penulis: '', file: null });
    };

    return (
        <div className="container mx-auto p-2">
            <h1 className="text-xl font-bold mb-3">Upload Laporan PKM</h1>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="grid grid-cols-2 gap-2 mb-2">
                    <div>
                        <label htmlFor="judul" className="block text-sm mb-1">Judul</label>
                        <input
                            type="text"
                            id="judul"
                            name="judul"
                            value={formData.judul}
                            onChange={handleInputChange}
                            className="w-full p-1 text-sm border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="tanggal" className="block text-sm mb-1">Tanggal</label>
                        <input
                            type="date"
                            id="tanggal"
                            name="tanggal"
                            value={formData.tanggal}
                            onChange={handleInputChange}
                            className="w-full p-1 text-sm border rounded"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                    <div>
                        <label htmlFor="penulis" className="block text-sm mb-1">Penulis</label>
                        <input
                            type="text"
                            id="penulis"
                            name="penulis"
                            value={formData.penulis}
                            onChange={handleInputChange}
                            className="w-full p-1 text-sm border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="file" className="block text-sm mb-1">File Laporan</label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleInputChange}
                            className="w-full p-1 text-sm border rounded"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600">
                    Upload Laporan
                </button>
            </form>

            {/* Tabel */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border text-sm">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-1">Judul</th>
                            <th className="border p-1">Tanggal</th>
                            <th className="border p-1">Penulis</th>
                            <th className="border p-1">File</th>
                        </tr>
                    </thead>
                    <tbody>
                        {laporanPKM.map((laporan, index) => (
                            <tr key={index}>
                                <td className="border p-1">{laporan.judul}</td>
                                <td className="border p-1">{laporan.tanggal}</td>
                                <td className="border p-1">{laporan.penulis}</td>
                                <td className="border p-1">{laporan.file ? laporan.file.name : '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Upload_laporan_pkm;
