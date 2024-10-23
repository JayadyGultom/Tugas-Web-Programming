import React, { useState } from 'react';

function Upload_proposal_pkm() {
    const [file, setFile] = useState(null);
    const [proposals, setProposals] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            setProposals([...proposals, { name: file.name, size: file.size, date: new Date().toLocaleDateString() }]);
            setFile(null);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Upload Proposal PKM</h1>
            
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="mb-4">
                    <label htmlFor="proposal" className="block text-sm font-medium text-gray-700 mb-2">
                        Pilih file proposal:
                    </label>
                    <input
                        type="file"
                        id="proposal"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Upload
                </button>
            </form>

            <h2 className="text-xl font-semibold mb-2">Daftar Proposal</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">Nama File</th>
                            <th className="py-2 px-4 border-b">Ukuran</th>
                            <th className="py-2 px-4 border-b">Tanggal Upload</th>
                        </tr>
                    </thead>
                    <tbody>
                        {proposals.map((proposal, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="py-2 px-4 border-b">{proposal.name}</td>
                                <td className="py-2 px-4 border-b">{(proposal.size / 1024).toFixed(2)} KB</td>
                                <td className="py-2 px-4 border-b">{proposal.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Upload_proposal_pkm;
