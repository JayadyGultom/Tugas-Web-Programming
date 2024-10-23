import React, { useState } from 'react';

function Upload_Proposal() {
    const [file, setFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            setUploadedFiles([...uploadedFiles, { name: file.name, size: file.size, date: new Date().toLocaleString() }]);
            setFile(null);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Upload Proposal</h1>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                        Pilih File
                    </label>
                    <input 
                        type="file" 
                        onChange={handleFileChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="file"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        type="submit" 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Unggah
                    </button>
                </div>
            </form>

            <h2 className="text-2xl font-semibold text-center text-gray-800 mt-8 mb-4">Daftar File yang Diunggah</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full bg-white shadow-md rounded">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Nama File</th>
                            <th className="py-3 px-6 text-left">Ukuran</th>
                            <th className="py-3 px-6 text-left">Tanggal Unggah</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {uploadedFiles.map((file, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">{file.name}</td>
                                <td className="py-3 px-6 text-left">{file.size} bytes</td>
                                <td className="py-3 px-6 text-left">{file.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Upload_Proposal;
