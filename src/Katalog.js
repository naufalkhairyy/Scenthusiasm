import React from 'react';

import diorImg from './assets/sauvage.png'; 
import whiskeyImg from './assets/whiskey.png'; 
import ckImg from './assets/defy 1.png'; 
import elvictoImg from './assets/escobar (1) (1) 1.png'; 
import dieselImg from './assets/Diesel (1) (1) 1.png'; 
import yslImg from './assets/Yve (1) (1) 1.png'; 
import armaniImg from './assets/armani (3) 1.png'; 
import alienGoddessImg from './assets/AlienGoddes 1.png'; 
import jpgImg from './assets/JeanPaul (3) 1.png'; 
import alienMuglerImg from './assets/AlienMugler 1.png'; 

const products = [
  { 
    id: 1,
    brand: "Dior", 
    name: "Sauvage", 
    image: diorImg,
    price: "Rp125.000 - Rp225.000", 
    link: "https://shopee.co.id/Decant-Sauvage-Parfum-(-Parfume-for-Men-)-i.1632412648.43826069673?extraParams=%7B%22display_model_id%22%3A307119273011%7D", 
    topNotes: "Calabrian bergamot, Pepper",
    middleNotes: "Sichuan Pepper, Lavender, Pink Pepper, Vetiver, Patchouli, Geranium, Elemi",
    baseNotes: "Ambroxan, Cedar, Labdanum"
  },
  { 
    id: 2,
    brand: "Whiskey", 
    name: "Prestigious", 
    image: whiskeyImg,
    price: "Rp70.000 - 110.000", 
    link: "https://shopee.co.id/Decant-Parfume-Limited-Edition-Whiskey-%E2%80%9CPrestigious%E2%80%9D-i.1632412648.47350744747?extraParams=%7B%22display_model_id%22%3A325065676499%7D",
    topNotes: "Caramel, Vanilla, Honey",
    middleNotes: "Oud Wood, Warm Spicy (Cinnamon, Nutmeg)",
    baseNotes: "Smokey Oak, Toffee, Malt"
  },
  { 
    id: 3,
    brand: "CK", 
    name: "DEFY", 
    image: ckImg,
    price: "Rp75.000 - Rp130.000", 
    link: "https://shopee.co.id/Decant-Parfum-Unisex-Fresh-Clean-Type-EDT-i.1632412648.53950747217?extraParams=%7B%22display_model_id%22%3A320066658123%7D",
    topNotes: "Pink Pepper",
    middleNotes: "Lavender",
    baseNotes: "Cacao"
  },
  { 
    id: 4,
    brand: "Elvicto", 
    name: "Escobar", 
    image: elvictoImg,
    price: "Rp27.000 - Rp55.000", 
    link: "https://shopee.co.id/Decant-Parfum-Elvict0-Esconbar(Eau-de-Parfum-for-Men)-i.1632412648.56300703487?extraParams=%7B%22display_model_id%22%3A315063998138%7D",
    topNotes: "Bergamot, Lemon, and Spicy-Cardamom",
    middleNotes: "Lavender, Geranium, and Cinnamon",
    baseNotes: "Amberwood, Patchouli, Tonka Bean, and Vanilla"
  },
  { 
    id: 5,
    brand: "Diesel", 
    name: "Bad", 
    image: dieselImg,
    price: "Rp85.000 - Rp105.000", 
    link: "https://shopee.co.id/Decant-D1esel-B4d-Parfum-(Eau-de-Toilette-for-Men)-i.1632412648.52750694184?extraParams=%7B%22display_model_id%22%3A390063533896%7D",
    topNotes: "Lavender, Bergamot, Cardamom, Violet Leaf",
    middleNotes: "Caviar, Orris Root, Sage",
    baseNotes: "Woody Notes, Tobacco, Ambroxan, Tonka Bean, Patchouli"
  },
  { 
    id: 6,
    brand: "YSL", 
    name: "Y EDP", 
    image: yslImg,
    price: "Rp85.000 - Rp135.000", 
    link: "https://shopee.co.id/Decant-Parfum-Pria-%E2%80%9CSaint-Y-Signature%E2%80%9D-Eau-de-Parfum-i.1632412648.56700730490?extraParams=%7B%22display_model_id%22%3A400065944218%7D",
    topNotes: "Apple, Ginger, Bergamot",
    middleNotes: "Sage, Juniper Berries, Geranium",
    baseNotes: "Amberwood, Tonka Bean, Cedar, Vetiver, Olibanum"
  },
  { 
    id: 7,
    brand: "Emporio Armani", 
    name: "Stronger With You Intensely", 
    image: armaniImg,
    price: "Rp80.000 - Rp135.000", 
    link: "https://shopee.co.id/Decant-Parfum-Pria-Stronger-Intense-Type-EDP-i.1632412648.56200740714?extraParams=%7B%22display_model_id%22%3A425066074098%7D",
    topNotes: "Pink Pepper, Juniper, Violet",
    middleNotes: "Toffee, Cinnamon, Lavender, Sage",
    baseNotes: "Vanilla, Amber, Tonka Bean, Suede"
  },
  { 
    id: 8,
    brand: "Alien Goddess Supra", 
    name: "Florale Mugler", 
    image: alienGoddessImg,
    price: "Rp95.000 - Rp150.000", 
    link: "https://shopee.co.id/Decant-Parfum-Wanita-Goddess-Floral-Type-EDP-i.1632412648.52400736310?extraParams=%7B%22display_model_id%22%3A405066289415%7D",
    topNotes: "Prickly Pear, Cactus Flower",
    middleNotes: "Jasmine Sambac, Immortelle",
    baseNotes: "Amber, Musk, Desert Rose"
  },
  { 
    id: 9,
    brand: "Jean Paul Gaultier", 
    name: "Le Male Elixir", 
    image: jpgImg,
    price: "Rp95.000 - Rp135.000", 
    link: "https://shopee.co.id/Decan-Parfum-Pl-Elixir-Paul-Original-100--i.1632412648.48800750136?extraParams=%7B%22display_model_id%22%3A415065811256%7D",
    topNotes: "Lavender, Mint",
    middleNotes: "Vanilla, Benzoin",
    baseNotes: "Honey, Tonka Bean, Tobacco"
  },
  { 
    id: 10,
    brand: "Alien Mugler", 
    name: "Original", 
    image: alienMuglerImg,
    price: "Rp90.000 - Rp140.000", 
    link: "https://shopee.co.id/Decant-Parfum-Wanita-Mystic-Aura-Type-EDP-i.1632412648.42276083889?extraParams=%7B%22display_model_id%22%3A365066606973%7D",
    topNotes: "Jasmine Sambac",
    middleNotes: "Cashmeran",
    baseNotes: "Amber"
  },
];

const Katalog = () => {
  return (
    <section className="bg-purple-50 px-4 py-20 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-64 gap-x-12 max-w-6xl mx-auto mt-40">
        {products.map((item) => (
          <div key={item.id} className="flex flex-col items-center relative h-full">
            
            {/* GAMBAR */}
            <div className="absolute -top-56 z-20 w-full flex justify-center pointer-events-none">
                <div className="w-64 h-80 flex items-end justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className={`max-h-full max-w-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-300 
                        ${item.id === 3 ? 'scale-[1.35]' : ''} 
                        ${item.id === 9 ? 'pb-2' : ''}
                      `} 
                    />
                </div>
            </div>

            {/* KARTU PRODUK */}
            {/* UPDATE:
                1. h-[420px]: Tinggi kotak diperpendek (dikecilkan).
                2. pt-36: Padding atas dikurangi agar pas dengan tinggi baru.
            */}
            <div className="bg-gray-200 rounded-[2.5rem] p-6 w-full shadow-md h-[420px] flex flex-col justify-between pt-36 relative z-10">
              
              {/* WRAPPER KONTEN ATAS */}
              <div className="flex-1 flex flex-col justify-start">
                {/* JUDUL */}
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-purple-600 w-1/3 leading-tight tracking-wide">
                    {item.brand}
                    </h3>
                    <div className="w-1/3"></div>
                    <h4 className="text-lg md:text-xl font-bold text-orange-400 w-1/3 text-right leading-tight">
                    {item.name}
                    </h4>
                </div>

                {/* NOTES (Tulisan Diperbesar) */}
                {/* text-xs (12px) dengan font-medium agar lebih jelas */}
                <div className="text-xs md:text-sm font-medium text-gray-700 space-y-1 px-1 mt-2">
                    <p className="leading-tight"><span className="text-orange-400 font-bold">Top Notes:</span> {item.topNotes}</p>
                    <p className="leading-tight"><span className="text-orange-400 font-bold">Middle Notes:</span> {item.middleNotes}</p>
                    <p className="leading-tight"><span className="text-orange-400 font-bold">Base Notes:</span> {item.baseNotes}</p>
                </div>
              </div>

              {/* HARGA */}
              <div className="text-center border-t border-gray-300 pt-3 pb-1 mt-auto">
                <p className="text-base font-extrabold text-black tracking-wide">
                  {item.price}
                </p>
              </div>
            </div>

            {/* TOMBOL BELI */}
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="z-30 -mt-6"
            >
                <button className="bg-orange-400 text-white font-bold py-3 px-16 rounded-full hover:bg-orange-500 transition shadow-lg transform hover:-translate-y-1 border-4 border-white cursor-pointer">
                Beli
                </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Katalog;