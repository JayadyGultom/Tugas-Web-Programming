import React, { useState } from 'react';

function Upload_progres_pengabdian() {
    const [progres, setProgres] = useState([]);
    const [formData, setFormData] = useState({
        judul: '',
        tanggal: '',
        deskripsi: '',
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
        setProgres([...progres, formData]);
        setFormData({ judul: '', tanggal: '', deskripsi: '', file: null });
    };

    return (
        <div className="container mx-auto p-2 max-w-2xl">
            <h1 className="text-xl font-bold mb-2">Upload Progres Pengabdian</h1>
            
            <form onSubmit={handleSubmit} className="mb-4 space-y-2">
                <div>
                    <label htmlFor="judul" className="block text-sm font-medium">Judul:</label>
                    <input
                        type="text"
                        id="judul"
                        name="judul"
                        value={formData.judul}
                        onChange={handleInputChange}
                        className="w-full p-1 border rounded text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tanggal" className="block text-sm font-medium">Tanggal:</label>
                    <input
                        type="date"
                        id="tanggal"
                        name="tanggal"
                        value={formData.tanggal}
                        onChange={handleInputChange}
                        className="w-full p-1 border rounded text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="deskripsi" className="block text-sm font-medium">Deskripsi:</label>
                    <textarea
                        id="deskripsi"
                        name="deskripsi"
                        value={formData.deskripsi}
                        onChange={handleInputChange}
                        className="w-full p-1 border rounded text-sm"
                        rows="3"
                        required
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="file" className="block text-sm font-medium">Upload File:</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleInputChange}
                        className="w-full p-1 border rounded text-sm"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                    Submit
                </button>
            </form>

            <h2 className="text-lg font-bold mb-2">Hasil Progres Pengabdian</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border text-sm">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-1">Judul</th>
                            <th className="border p-1">Tanggal</th>
                            <th className="border p-1">Deskripsi</th>
                            <th className="border p-1">File</th>
                        </tr>
                    </thead>
                    <tbody>
                        {progres.map((item, index) => (
                            <tr key={index}>
                                <td className="border p-1">{item.judul}</td>
                                <td className="border p-1">{item.tanggal}</td>
                                <td className="border p-1">{item.deskripsi}</td>
                                <td className="border p-1">{item.file ? item.file.name : '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Upload_progres_pengabdian;
