import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Impor ikon-ikon yang diperlukan
import { FaHome, FaFlask, FaHandsHelping, FaUpload, FaClipboardCheck, FaChartLine, FaCertificate, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';

function Navbar() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [openMenus, setOpenMenus] = useState({});
    const navigate = useNavigate();

    const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    const toggleMenu = (menu) => {
        setOpenMenus(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
        if (menu === 'beranda') {
            navigate('/beranda');
        } else if (menu === 'penelitian') {
            navigate('/penelitian');
        } else if (menu === 'desimilasiPenelitian') {
            navigate('Desimilasi_hasil');
        } else if (menu === 'pkm') {
            navigate('/pkm');
        }
    };

    const menuItemClass = "flex items-center w-full py-2 px-4 hover:bg-gray-700 rounded transition-all duration-200 ease-in-out";
    const submenuItemClass = "flex items-center w-full py-2 px-4 hover:bg-gray-600 rounded transition-all duration-200 ease-in-out text-sm";
    const iconClass = "w-5 h-5 mr-3";

    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logging out...');
        // For example: clear local storage, reset auth state, redirect to login page, etc.
    };

    return (
        <nav className="bg-gray-800 text-gray-100 w-64 min-h-screen p-4 shadow-lg flex flex-col justify-between">
            <ul className="space-y-2">
                {['beranda', 'penelitian', 'pkm'].map((menu) => (
                    <li 
                        key={menu}
                        onMouseEnter={() => handleMouseEnter(menu)} 
                        onMouseLeave={handleMouseLeave}
                        className="relative"
                    >
                        <button onClick={() => toggleMenu(menu)} className={menuItemClass}>
                            {menu === 'beranda' && <FaHome className={iconClass} />}
                            {menu === 'penelitian' && <FaFlask className={iconClass} />}
                            {menu === 'pkm' && <FaHandsHelping className={iconClass} />}
                            <span className="flex-grow text-left capitalize">{menu}</span>
                            <svg className={`w-4 h-4 transform transition-transform duration-200 ${activeMenu === menu || openMenus[menu] ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <ul className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-200 ${activeMenu === menu || openMenus[menu] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <li><Link to="/beranda/update_info_progress_penelitian" className={submenuItemClass}>
                                <FaChartLine className="mr-2" />
                                Update info progress penelitian dan PKM
                            </Link></li>
                            <li><Link to="/penelitian/Upload_Proposal" className={submenuItemClass}>
                                <FaUpload className="mr-2" />
                                Upload Proposal
                            </Link></li>
                            <li><Link to="/Upload_hasil_review" className={submenuItemClass}>
                                <FaClipboardCheck className="mr-2" />
                                Upload Hasil Review P3MK
                            </Link></li>
                            <li><Link to="/Upload_progress_penelitian" className={submenuItemClass}>
                                <FaChartLine className="mr-2" />
                                Upload Progress Penelitian
                            </Link></li>
                            <li> 
                                <button onClick={() => toggleMenu('desimilasiPenelitian')} className={menuItemClass}>
                                    <FaCertificate className="mr-2" />
                                    <span>Desimilasi Hasil Penelitian</span>
                                    <svg className={`ml-auto h-5 w-5 transform ${openMenus.desimilasiPenelitian ? 'rotate-180' : ''} transition-transform duration-300`} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {openMenus.desimilasiPenelitian && (
                                    <ul className="pl-4 mt-2 space-y-1">
                                        <li><Link to="/penelitian/Desimilasi_hasil" className={submenuItemClass}>
                                            <FaFileAlt className="mr-2" />
                                            Desimilasi Hasil Penelitian
                                        </Link></li>
                                        <li><Link to="/penelitian/Desimilasi_hasil/Upload_sertifikat_desimilasi_penelitian" className={submenuItemClass}>
                                            <FaUpload className="mr-2" />
                                            Upload Sertifikat Desimilasi
                                        </Link></li>
                                    </ul>
                                )}
                            </li>
                            <li><Link to="/Upload_laporan_penelitian" className={submenuItemClass}>
                                <FaUpload className="mr-2" />
                                Upload Laporan Penelitian
                            </Link></li>
                            <li><Link to="/Upload_proposal_pkm" className={submenuItemClass}>
                                <FaUpload className="mr-2" />
                                Upload Proposal
                            </Link></li>
                            <li><Link to="/Upload_hasil_riview_p3mk" className={submenuItemClass}>
                                <FaClipboardCheck className="mr-2" />
                                Upload Hasil Review P3MK
                            </Link></li>
                            <li><Link to="/Upload_progres_pengabdian" className={submenuItemClass}>
                                <FaChartLine className="mr-2" />
                                Upload Progress Pengabdian
                            </Link></li>
                            <li>
                                <button onClick={() => toggleMenu('desimilasiPKM')} className={menuItemClass}>
                                    <FaCertificate className="mr-2" />
                                    <span>Desimilasi Hasil PKM</span>
                                    <svg className={`ml-auto h-5 w-5 transform ${openMenus.desimilasiPKM ? 'rotate-180' : ''} transition-transform duration-300`} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {openMenus.desimilasiPKM && (
                                    <ul className="pl-4 mt-2 space-y-1">
                                        <li><Link to="/Desimilasi_hasil_pkm" className={submenuItemClass}>
                                            <FaFileAlt className="mr-2" />
                                            Desimilasi Hasil PKM
                                        </Link></li>
                                        <li><Link to="/Upload_sertifikat_PKM" className={submenuItemClass}>
                                            <FaUpload className="mr-2" />
                                            Upload Sertifikat Desimilasi
                                        </Link></li>
                                    </ul>
                                )}
                            </li>
                            <li><Link to="/Upload_laporan_pkm" className={submenuItemClass}>
                                <FaUpload className="mr-2" />
                                Upload Laporan PKM
                            </Link></li>
                        </ul>
                    </li>
                ))}
            </ul>
            
            <button 
                onClick={handleLogout} 
                className="mt-auto flex items-center w-full py-2 px-4 hover:bg-red-600 rounded transition-all duration-200 ease-in-out text-left"
            >
                <FaSignOutAlt className={iconClass} />
                <span>Logout</span>
            </button>
        </nav>
    );
}

export default Navbar;
