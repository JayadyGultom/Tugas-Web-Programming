import React, { useState } from 'react';

function Upload_hasil_riview_p3mk() {
    const [file, setFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            setUploadedFiles([...uploadedFiles, file]);
            setFile(null);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Upload Hasil Review P3MK</h1>
            
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                        Pilih File
                    </label>
                    <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700
                            hover:file:bg-blue-100"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Upload
                </button>
            </form>

            <h2 className="text-xl font-semibold mb-2">Daftar File Terunggah</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">No</th>
                        <th className="border border-gray-300 px-4 py-2">Nama File</th>
                        <th className="border border-gray-300 px-4 py-2">Ukuran</th>
                    </tr>
                </thead>
                <tbody>
                    {uploadedFiles.map((file, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-300 px-4 py-2">{file.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{(file.size / 1024).toFixed(2)} KB</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Upload_hasil_riview_p3mk;
