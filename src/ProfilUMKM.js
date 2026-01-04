import React from 'react';
import { Instagram, Facebook, Clock, MapPin } from 'lucide-react';

// --- IMPORT SEMUA LOGO DARI ASSETS ---
import tiktokImg from './assets/tiktok.png';
import waImg from './assets/wa.png';
import shopeeImg from './assets/shopee.png';
import tokpedImg from './assets/tokopedia.png';

const ProfilUMKM = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      
      {/* --- BAGIAN ATAS: LATAR UNGU MUDA --- */}
      <section className="bg-purple-50 px-8 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* JUDUL */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">
              Profile UMKM Scenthusiasm
            </h2>
            <div className="h-2 w-full bg-purple-400/50 rounded-full"></div> 
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* TEKS */}
            <div className="md:w-1/2 text-gray-800 leading-relaxed space-y-6 text-base md:text-lg text-justify">
              <p>
                Scenthusiasm didirikan pada tahun 2025 dengan misi membawa antusiasme terhadap aroma ke setiap rumah. 
                Kami percaya bahwa parfum bukan hanya sekadar wewangian, melainkan sebuah pengalaman yang memikat.
              </p>
              <p>
                Visi: menjadi salah satu brand terfavorit bagi para penikmat parfum, Scenthusiasm hadir untuk 
                menginspirasi gaya hidup melalui aroma berkualitas serta menggunakan bahan-bahan original 
                dengan harga yang terjangkau bagi semua pecinta parfum.
              </p>
            </div>
            
            {/* GAMBAR */}
            <div className="md:w-1/2 w-full">
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800" 
                alt="Kegiatan Toko Scenthusiasm" 
                className="rounded-2xl shadow-lg w-full object-cover h-80 md:h-96 border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- BAGIAN BAWAH: LATAR PUTIH (KONTAK) --- */}
      <section className="bg-white px-8 md:px-20 py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          
          {/* HEADER KONTAK & ICON */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <h3 className="text-2xl font-bold text-purple-600">
              Hubungi <span className="text-orange-400">Kami</span>
            </h3>
            
            {/* DERETAN LOGO MEDSOS */}
            <div className="flex gap-4 items-center flex-wrap">
                
                {/* 1. Instagram (Tetap pakai Icon vector biar tajam, atau ganti img jika ada) */}
                <a href="https://instagram.com/scenthusiasm" target="_blank" rel="noopener noreferrer">
                    <Instagram className="text-pink-500 hover:scale-110 transition cursor-pointer" size={32} />
                </a>
                
                {/* 2. Facebook (Tetap pakai Icon vector) */}
                <a href="https://www.facebook.com/profile.php?id=61580445527528" target="_blank" rel="noopener noreferrer">
                    <Facebook className="text-blue-700 hover:scale-110 transition cursor-pointer" size={32} />
                </a>

                {/* 3. TikTok (Image) */}
                <a href="https://tiktok.com/@scenthusiasm_" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                    <img src={tiktokImg} alt="TikTok" className="w-8 h-8 object-contain" />
                </a>

                {/* 4. WhatsApp (Image) */}
                <a href="https://wa.me/6285216106543" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                    <img src={waImg} alt="WhatsApp" className="w-8 h-8 object-contain" />
                </a>

                {/* 5. Shopee (Image) */}
                <a href="https://id.shp.ee/RAHDx7o" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                    <img src={shopeeImg} alt="Shopee" className="w-8 h-8 object-contain" />
                </a>

                {/* 6. Tokopedia (Image) */}
                <a href="https://tk.tokopedia.com/ZS5kWgGod/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                    <img src={tokpedImg} alt="Tokopedia" className="w-8 h-8 object-contain" />
                </a>

            </div>
          </div>

          {/* TEKS DESKRIPSI */}
          <p className="text-sm md:text-base text-gray-600 mb-8 max-w-2xl">
            Hubungi kami melalui <span className="text-orange-400">WhatsApp</span> kami siap melayani Anda sesuai jam kerja.
          </p>

          {/* JAM & LOKASI */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                <div className="p-1.5 border border-orange-300 rounded-full">
                  <Clock size={20} className="text-orange-400" />
                </div>
                <span>Senin-Jumat - 08.00- 17.00</span>
            </div>
            <div className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                <div className="p-1.5 border border-orange-300 rounded-full">
                  <MapPin size={20} className="text-orange-400" />
                </div>
                <span>Pekanbaru, Riau</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProfilUMKM;