import React, { useState, useEffect } from 'react';
// Import logo dari folder assets Anda
import myLogo from './assets/logo.png'; 
import LandingPage from './LandingPage';
import ProfilUMKM from './ProfilUMKM';
import Katalog from './Katalog';
import Kontak from './Kontak';

function App() {
  const [activeSection, setActiveSection] = useState('beranda');

  // Fungsi Scroll Halus saat menu diklik
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Logika Deteksi Scroll Otomatis (Garis bawah biru otomatis saat scroll)
  useEffect(() => {
    const sections = ['beranda', 'profil', 'katalog', 'kontak'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Aktif saat bagian berada di tengah layar
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* NAVBAR STICKY DENGAN LOGO DAN TULISAN BIRU */}
      <nav className="flex justify-between items-center px-10 py-4 border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="flex items-center gap-2">
          {/* Container Logo Bulat */}
          <div className="w-12 h-12 bg-[#e5e1da] rounded-full flex items-center justify-center overflow-hidden border border-gray-100 shadow-sm">
            <img 
              src={myLogo} 
              alt="Scenthusiasm Logo" 
              className="w-full h-full object-contain p-1" 
            />
          </div>
          <span className="font-semibold text-gray-400 text-xl tracking-tight">Scenthusiasm</span>
        </div>
        
        {/* Navigasi Teks Biru dengan Garis Bawah */}
        <ul className="flex gap-8 text-sm font-bold">
          {[
            { id: 'beranda', label: 'Beranda' },
            { id: 'profil', label: 'Profil UMKM' },
            { id: 'katalog', label: 'Produk/Katalog' },
            { id: 'kontak', label: 'Kontak' }
          ].map((menu) => (
            <li 
              key={menu.id}
              onClick={() => scrollToSection(menu.id)}
              className={`cursor-pointer pb-1 transition-all duration-300 border-b-4 ${
                activeSection === menu.id 
                ? 'text-blue-600 border-blue-600' // Biru saat aktif sesuai permintaan
                : 'text-blue-400 border-transparent hover:text-blue-600'
              }`}
            >
              {menu.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* KONTEN HALAMAN MEMANJANG KE BAWAH */}
      <main>
        {/* Section Beranda */}
        <div id="beranda" className="scroll-mt-20">
          <LandingPage />
        </div>
        
        {/* Section Profil */}
        <div id="profil" className="scroll-mt-20">
          <ProfilUMKM />
        </div>
        
        {/* Section Katalog */}
        <div id="katalog" className="scroll-mt-20">
          <Katalog />
        </div>
        
        {/* Section Kontak */}
        <div id="kontak" className="scroll-mt-20">
          <Kontak />
        </div>
      </main>

      {/* FOOTER AKHIR */}
      <footer className="py-10 text-center text-gray-400 text-xs border-t border-gray-100 bg-purple-50">
        &copy; 2026 Scenthusiasm Pekanbaru. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;