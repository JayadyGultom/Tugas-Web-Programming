import React, { useState } from 'react';

function Upload_hasil_riview() {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileUpload = (event) => {
        // Logika untuk menangani upload file
        const newFiles = Array.from(event.target.files);
        setUploadedFiles([...uploadedFiles, ...newFiles]);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Upload Hasil Review</h1>
            
            {/* Form upload */}
            <form className="mb-8">
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Klik untuk upload</span> atau seret dan lepas</p>
                            <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 10MB)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileUpload} multiple />
                    </label>
                </div>
            </form>

            {/* Tabel file yang diupload */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nama File</th>
                            <th scope="col" className="px-6 py-3">Ukuran</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {uploadedFiles.map((file, index) => (
                            <tr key={index} className="bg-white border-b">
                                <td className="px-6 py-4">{file.name}</td>
                                <td className="px-6 py-4">{(file.size / 1024).toFixed(2)} KB</td>
                                <td className="px-6 py-4">Terupload</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Upload_hasil_riview;
