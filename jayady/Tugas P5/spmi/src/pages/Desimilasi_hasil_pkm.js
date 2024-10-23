import React, { useState } from 'react';

function Desimilasi_hasil_pkm() {
    const [hasil, setHasil] = useState([]);
    const [formData, setFormData] = useState({
        judul: '',
        penulis: '',
        tahun: '',
        jenis: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setHasil([...hasil, formData]);
        setFormData({ judul: '', penulis: '', tahun: '', jenis: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Desimilasi Hasil PKM</h1>
            
            <form onSubmit={handleSubmit} className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="judul" className="block mb-1 text-sm">Judul PKM</label>
                        <input
                            type="text"
                            id="judul"
                            name="judul"
                            value={formData.judul}
                            onChange={handleChange}
                            className="w-full p-1 border rounded text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="penulis" className="block mb-1 text-sm">Penulis</label>
                        <input
                            type="text"
                            id="penulis"
                            name="penulis"
                            value={formData.penulis}
                            onChange={handleChange}
                            className="w-full p-1 border rounded text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="tahun" className="block mb-1 text-sm">Tahun</label>
                        <input
                            type="number"
                            id="tahun"
                            name="tahun"
                            value={formData.tahun}
                            onChange={handleChange}
                            className="w-full p-1 border rounded text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="jenis" className="block mb-1 text-sm">Jenis PKM</label>
                        <select
                            id="jenis"
                            name="jenis"
                            value={formData.jenis}
                            onChange={handleChange}
                            className="w-full p-1 border rounded text-sm"
                            required
                        >
                            <option value="">Pilih Jenis PKM</option>
                            <option value="PKM-RE">PKM-RE</option>
                            <option value="PKM-RSH">PKM-RSH</option>
                            <option value="PKM-K">PKM-K</option>
                            <option value="PKM-PM">PKM-PM</option>
                            <option value="PKM-PI">PKM-PI</option>
                            <option value="PKM-KC">PKM-KC</option>
                            <option value="PKM-KI">PKM-KI</option>
                            <option value="PKM-VGK">PKM-VGK</option>
                            <option value="PKM-GFT">PKM-GFT</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="mt-4 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                    Tambah Data
                </button>
            </form>

            <h2 className="text-lg font-semibold mb-2">Hasil Desimilasi PKM</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border text-sm">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-1">Judul PKM</th>
                            <th className="border p-1">Penulis</th>
                            <th className="border p-1">Tahun</th>
                            <th className="border p-1">Jenis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hasil.map((item, index) => (
                            <tr key={index}>
                                <td className="border p-1">{item.judul}</td>
                                <td className="border p-1">{item.penulis}</td>
                                <td className="border p-1">{item.tahun}</td>
                                <td className="border p-1">{item.jenis}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Desimilasi_hasil_pkm;
