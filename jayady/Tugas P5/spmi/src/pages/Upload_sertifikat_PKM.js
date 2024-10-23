import React, { useState } from 'react';

function Upload_sertifikat_PKM() {
    const [file, setFile] = useState(null);
    const [certificates, setCertificates] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            setCertificates([...certificates, { name: file.name, date: new Date().toLocaleDateString() }]);
            setFile(null);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Upload Sertifikat PKM</h1>
            
            <form onSubmit={handleSubmit} className="mb-6">
                <div className="mb-4">
                    <label htmlFor="certificate" className="block mb-2">Pilih Sertifikat:</label>
                    <input
                        type="file"
                        id="certificate"
                        onChange={handleFileChange}
                        className="border p-2 w-full"
                        accept=".pdf,.jpg,.jpeg,.png"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Upload
                </button>
            </form>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 text-left">Nama File</th>
                            <th className="p-2 text-left">Tanggal Upload</th>
                        </tr>
                    </thead>
                    <tbody>
                        {certificates.map((cert, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-2">{cert.name}</td>
                                <td className="p-2">{cert.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Upload_sertifikat_PKM;
