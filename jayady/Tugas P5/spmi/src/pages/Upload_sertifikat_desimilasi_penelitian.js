import React, { useState } from 'react';

function Upload_sertifikat_desimilasi_penelitian() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika untuk mengunggah file
        console.log('File yang diunggah:', file);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Upload Sertifikat Desimilasi Penelitian</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sertifikat">
                        Pilih Sertifikat
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="sertifikat"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Upload
                    </button>
                </div>
            </form>
            {file && (
                <p className="text-green-500">
                    File yang dipilih: {file.name}
                </p>
            )}
        </div>
    );
}

export default Upload_sertifikat_desimilasi_penelitian;
