import React, { useState } from 'react';

function Desimilasi_hasil() {
    const [hasil, setHasil] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika untuk memproses form dan menambahkan hasil ke state
        const newHasil = {
            id: Date.now(),
            kata: e.target.kata.value,
            hasil: e.target.kata.value.replace(/([aiueo])\1+/g, '$1'),
        };
        setHasil([...hasil, newHasil]);
        e.target.reset();
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Desimilasi Hasil</h1>
            
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="mb-4">
                    <label htmlFor="kata" className="block mb-2 font-semibold">Kata:</label>
                    <input
                        type="text"
                        id="kata"
                        name="kata"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Proses
                </button>
            </form>

            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">No</th>
                        <th className="border p-2">Kata Asli</th>
                        <th className="border p-2">Hasil Desimilasi</th>
                    </tr>
                </thead>
                <tbody>
                    {hasil.map((item, index) => (
                        <tr key={item.id}>
                            <td className="border p-2">{index + 1}</td>
                            <td className="border p-2">{item.kata}</td>
                            <td className="border p-2">{item.hasil}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Desimilasi_hasil;
