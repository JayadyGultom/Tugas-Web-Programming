import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Beranda from './pages/Beranda';
import Penelitian from './pages/Penelitian';
import Pkm from './pages/Pkm';
import UpdateInfoProgressPenelitiandanpkm from './pages/Update_info_progres';
import Uploadproposal from './pages/Upload_Proposal'; 
import Uploadhasilriview from './pages/Upload_hasil_riview';
import Progrespenelitian from './pages/Upload_progres_penelitian';
import Desimilasihasil from './pages/Desimilasi_hasil';
import Uploadsertifikatdesimilasipenelitian from './pages/Upload_sertifikat_desimilasi_penelitian';
import Uploadlaporanpenelitian from './pages/Upload_laporan_penelitian';
import Uploadproposalpkm from './pages/Upload_proposal_pkm';
import Uploadhasilriviewp3mk from './pages/Upload_hasil_riview_p3mk';
import Uploadprogresspengabdian from './pages/Upload_progres_pengabdian';
import Desimilasihasilpkm from './pages/Desimilasi_hasil_pkm';
import Uploadsertifikatpkm from './pages/Upload_sertifikat_PKM';
import Uploadlaporanpkm from './pages/Upload_laporan_pkm';
import Login from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken'));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App flex flex-col h-screen">
        {isLoggedIn && <Header onLogout={handleLogout} />}
        <div className="flex flex-1 overflow-hidden">
          {isLoggedIn && <Navbar />}
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/login" element={
                isLoggedIn ? <Navigate to="/beranda" /> : <Login onLogin={handleLogin} />
              } />
              <Route
                path="/beranda"
                element={isLoggedIn ? <Beranda /> : <Navigate to="/login" />}
              />
              
              <Route path="/penelitian" element={isLoggedIn ? <Penelitian /> : <Navigate to="/login" />} />
              <Route path="/pkm" element={isLoggedIn ? <Pkm /> : <Navigate to="/login" />} />
              <Route path="/Beranda/update_info_progress_penelitian" element={<UpdateInfoProgressPenelitiandanpkm />} />
              <Route path="/penelitian/Upload_Proposal" element={<Uploadproposal />} />
              <Route path="/Upload_hasil_review" element={<Uploadhasilriview />} />
              <Route path="/Upload_progress_penelitian" element={<Progrespenelitian />} />
              <Route path="/Penelitian/Desimilasi_hasil" element={<Desimilasihasil />} />
              <Route path="/Penelitian/Desimilasi_hasil/Upload_sertifikat_desimilasi_penelitian" element={<Uploadsertifikatdesimilasipenelitian />} />
              <Route path="/Upload_laporan_penelitian" element={<Uploadlaporanpenelitian />} />
              <Route path="/Upload_proposal_pkm" element={<Uploadproposalpkm />} />
              <Route path="/Upload_hasil_riview_p3mk" element={<Uploadhasilriviewp3mk />} />
              <Route path="/Upload_progres_pengabdian" element={<Uploadprogresspengabdian />} />
              <Route path="/Desimilasi_hasil_pkm" element={<Desimilasihasilpkm />} />
              <Route path="/Upload_sertifikat_PKM" element={<Uploadsertifikatpkm />} />
              <Route path="/Upload_laporan_pkm" element={<Uploadlaporanpkm />} />
              <Route path="*" element={<Navigate to={isLoggedIn ? "/beranda" : "/login"} />} />
          
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
