import React from 'react';
import { Instagram, Facebook, Clock, MapPin, MessageCircle } from 'lucide-react';

// --- IMPORT GAMBAR (Pastikan semua ini ada) ---
import tiktokImg from './assets/tiktok.png'; 
import waImg from './assets/wa.png';           // Tambahan
import shopeeImg from './assets/shopee.png';   // Tambahan
import tokpedImg from './assets/tokopedia.png'; // Tambahan

const Kontak = () => {
  return (
    <section className="bg-purple-50 px-10 md:px-20 py-20 min-h-[70vh]">
      <div className="max-w-4xl">
        
        {/* JUDUL & SOSMED ICON */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <h2 className="text-3xl font-bold text-purple-600">
                Hubungi <span className="text-orange-400">Kami</span>
            </h2>

            <div className="flex gap-4 items-center flex-wrap">
                
                {/* 1. Instagram */}
                <a href="https://www.instagram.com/scenthusiasm._?igsh=MW5odTR2ZG9vMDdvaw==" target="_blank" rel="noopener noreferrer">
                    <Instagram className="text-pink-500 hover:scale-110 transition cursor-pointer" size={32} />
                </a>
                
                {/* 2. Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61580445527528" target="_blank" rel="noopener noreferrer">
                    <Facebook className="text-blue-700 hover:scale-110 transition cursor-pointer" size={32} />
                </a>

                {/* 3. TikTok */}
                <a href="https://tiktok.com/@scenthusiasm_" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                    <img src={tiktokImg} alt="TikTok" className="w-8 h-8 object-contain" />
                </a>

                {/* 4. WhatsApp */}
                <a href="https://wa.me/6285216106543" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                    <img src={waImg} alt="WhatsApp" className="w-8 h-8 object-contain" />
                </a>

                {/* 5. Shopee */}
                <a href="https://id.shp.ee/RAHDx7o" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                    <img src={shopeeImg} alt="Shopee" className="w-8 h-8 object-contain" />
                </a>

                {/* 6. Tokopedia */}
                <a href="https://tk.tokopedia.com/ZS5kWgGod/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                    <img src={tokpedImg} alt="Tokopedia" className="w-8 h-8 object-contain" />
                </a>

            </div>
        </div>

        <p className="text-gray-600 mb-10 max-w-lg">
          Hubungi kami melalui <span className="text-orange-400 font-semibold">WhatsApp</span> kami siap melayani Anda sesuai jam kerja.
        </p>

        {/* INFO JAM & LOKASI */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-4 text-gray-700">
            <div className="p-2 border border-orange-200 rounded-full">
              <Clock className="text-orange-400" size={24} />
            </div>
            <span className="text-lg font-medium">Senin-Jumat - 08.00 - 17.00</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <div className="p-2 border border-orange-200 rounded-full">
              <MapPin className="text-orange-400" size={24} />
            </div>
            <span className="text-lg font-medium">Pekanbaru, Riau</span>
          </div>
        </div>

        {/* TOMBOL WHATSAPP BESAR */}
      <a 
          href="https://wa.me/6285216106543" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-8 py-4 rounded-full shadow-lg transition-all group w-full md:w-auto justify-center"
        >
          {/* Bagian Icon diganti dengan Gambar WA */}
          <div className="bg-white p-2 rounded-full flex items-center justify-center">
            <img src={waImg} alt="WhatsApp" className="w-7 h-7 object-contain" />
          </div>
          <span className="text-xl font-bold tracking-wider">+62 852-1610-6543</span>
        </a>

      </div>
    </section>
  );
};

export default Kontak; 