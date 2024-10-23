import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Header({ onLogout }) {
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false);

    const handleLogoClick = () => {
        navigate('/Beranda');
    };

    const handleProfileClick = () => {
        setShowLogout(!showLogout);
    };

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };

    return (
        <header style={styles.header}>
            <div style={styles.leftSection} onClick={handleLogoClick}>
                <span style={styles.logo}>Bogor-SPMI</span>
            </div>
            <div style={styles.rightSection}>
                <span style={styles.name}>Jayady Managam Gultom</span>
                <div style={styles.profileContainer}>
                    <FaUserCircle style={styles.profileIcon} onClick={handleProfileClick} />
                    {showLogout && (
                        <div style={styles.logoutButton} onClick={handleLogout}>
                            Logout
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 24px',
        background: '#2c3e50',
        color: '#ffffff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    leftSection: {
        cursor: 'pointer',
    },
    logo: {
        fontSize: '1.4rem',
        fontWeight: 'bold',
        color: '#ffffff',
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
    },
    name: {
        marginRight: '15px',
        fontSize: '1rem',
        color: '#ffffff',
    },
    profileIcon: {
        fontSize: '1.8rem',
        color: '#ffffff',
    },
    profileContainer: {
        position: 'relative',
        cursor: 'pointer',
    },
    logoutButton: {
        position: 'absolute',
        top: '120%',
        right: 0,
        backgroundColor: '#ff0000', // Mengubah warna latar belakang tombol menjadi merah
        color: '#ffffff', // Mengubah warna teks logout menjadi putih
        padding: '8px 12px',
        borderRadius: '4px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        zIndex: 1000,
        fontSize: '0.9rem',
    },
};

export default Header;
