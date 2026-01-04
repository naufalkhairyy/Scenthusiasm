import React from 'react';
import { ShoppingBag, CheckCircle, Headphones } from 'lucide-react';

const LandingPage = () => {
  // Fungsi untuk scroll ke bagian Katalog
  const handleScrollToKatalog = () => {
    const element = document.getElementById('katalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-purple-50 px-16 py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-purple-600 leading-tight mb-4">
            Selamat datang di Scenthusiasm - Gerbang Menuju Dunia Aroma Eksklusif!
          </h1>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Apakah Anda ingin mencoba parfum sebelum membeli botol besar? Atau ingin koleksi banyak aroma tanpa menguras dompet? Anda berada di tempat yang tepat!
            Kami menyediakan decant parfum original dalam ukuran praktis 5ml dan 10ml, yang dibuat langsung dari botol parfum premium asli.
          </p>
          
          {/* TOMBOL LIHAT PRODUK */}
          <button 
            onClick={handleScrollToKatalog}
            className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-semibold transition shadow-md"
          >
            Lihat Produk
          </button>
        </div>
        
        {/* BAGIAN GAMBAR (Updated dengan gambar Dior Sauvage dari Unsplash) */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            // Menggunakan gambar Dior Sauvage estetik dari Unsplash
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlrZUGsNal1pnBJ25qRJEne_cCcTqBQss6Q&s" 
            alt="Dior Sauvage Hero" 
            className="w-80 rounded-lg shadow-xl object-contain"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-purple-50 py-12 text-center border-t border-purple-100">
        <h3 className="text-lg font-bold text-purple-600 mb-2">Perlu Konsultasi <span className="text-orange-400">Gratis?</span></h3>
        <p className="text-sm text-gray-500 mb-6">Langsung saja hubungi tim support kami kapanpun Anda membutuhkan konsultasi.</p>
        
        {/* Tombol Hubungi Kami */}
        <button 
          onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-orange-400 text-white px-10 py-3 rounded-full font-semibold shadow-md hover:bg-orange-500 transition"
        >
          Hubungi Kami
        </button>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-16 text-center bg-white">
        <h3 className="text-xl font-bold text-purple-600 mb-12">Mengapa <span className="text-orange-400">Harus</span> di Scenthusiasm?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* KARTU 1 */}
          <div className="bg-white p-10 rounded-3xl flex flex-col items-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)] transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <ShoppingBag className="text-purple-500 mb-6 w-14 h-14" />
            <p className="font-extrabold text-xl text-purple-700 tracking-wide">Harga Terjangkau</p>
          </div>

          {/* KARTU 2 */}
          <div className="bg-white p-10 rounded-3xl flex flex-col items-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)] transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <CheckCircle className="text-purple-500 mb-6 w-14 h-14" />
            <p className="font-extrabold text-xl text-purple-700 tracking-wide">Dijamin Original</p>
          </div>

          {/* KARTU 3 */}
          <div className="bg-white p-10 rounded-3xl flex flex-col items-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)] transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <Headphones className="text-purple-500 mb-6 w-14 h-14" />
            <p className="font-extrabold text-xl text-purple-700 tracking-wide">Konsultasi GRATIS</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;