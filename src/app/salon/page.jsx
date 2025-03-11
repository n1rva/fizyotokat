"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/sal1.jpeg",
  "/images/sal2.jpeg",
  "/images/sal3.jpeg",
  "/images/sal4.jpeg",
  "/images/sal5.jpeg",
  "/images/sal6.jpeg",
  "/images/sal7.jpeg",
  "/images/sal8.jpeg",
  "/images/sal9.jpeg",
  "/images/sal10.jpeg",
  "/images/sal11.jpeg",
  "/images/sal12.jpeg",
  "/images/sal13.jpeg",
  "/images/sal14.jpeg",
  "/images/sal15.jpeg",
  "/images/sal16.jpeg",
  "/images/sal17.jpeg",
  "/images/sal18.jpeg",
];

export default function Salonumuz() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="min-h-screen bg-[#EFF3F8] max-w-7xl md:p-2">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-700 my-12">
        Salonumuz
      </h1>
      {/* Galeri Grid: 16:9 oranında fotoğraflar */}
      <div className="px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative w-full aspect-video cursor-pointer min-h-64"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Salon ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modalı */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-screen h-screen md:mx-16 overflow-auto flex items-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 0.9 }}
              exit={{ scale: 1.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full" ref={imageRef}>
                <Image
                  src={images[currentIndex]}
                  alt="Salon Görüntüsü"
                  fill
                  className="object-contain rounded-lg"
                />
                {/* Sol Ok */}
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-2xl hover:bg-opacity-75 transition"
                >
                  &lt;
                </button>
                {/* Sağ Ok */}
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-2xl hover:bg-opacity-75 transition"
                >
                  &gt;
                </button>
              </div>
              {/* Kapatma Butonu */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-xl hover:bg-opacity-75 transition"
              >
                x
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// import React from "react";
// import Image from "next/image";

// const Salonumuz = () => {
//   return (
//     <section className="w-full min-h-screen py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Başlık */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Salonumuz</h1>
//           <p className="text-lg text-gray-600">
//             Fizyotto Plus Tokat'ta sizler için özenle hazırlanmış, ferah ve şık
//             bir ortam.
//           </p>
//         </div>

//         {/* Salon Özellikleri */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {/* Ergonomik Tasarım */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
//             <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
//               <Image
//                 src="/images/ergonomik-tasarim.jpg" // Resim dosyasını projenize ekleyin
//                 alt="Ergonomik Tasarım"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">
//               Ergonomik Tasarım
//             </h3>
//             <p className="text-gray-600">
//               Salonumuz, rahat ve konforlu bir deneyim sunmak için özenle
//               tasarlandı.
//             </p>
//           </div>

//           {/* Modern Ekipmanlar */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
//             <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
//               <Image
//                 src="/images/modern-ekipmanlar.jpg" // Resim dosyasını projenize ekleyin
//                 alt="Modern Ekipmanlar"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">
//               Modern Ekipmanlar
//             </h3>
//             <p className="text-gray-600">
//               En son teknolojiye sahip ekipmanlarımızla etkili ve güvenli bir
//               hizmet sunuyoruz.
//             </p>
//           </div>

//           {/* Ferah ve Şık Mekan */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
//             <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
//               <Image
//                 src="/images/ferah-mekan.jpg" // Resim dosyasını projenize ekleyin
//                 alt="Ferah ve Şık Mekan"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">
//               Ferah ve Şık Mekan
//             </h3>
//             <p className="text-gray-600">
//               Geniş ve aydınlık mekanımız, sizlere huzurlu bir ortam sunar.
//             </p>
//           </div>
//         </div>

//         {/* Salon Galerisi */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//             Salon Galerisi
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[1, 2, 3, 4, 5, 6].map((item) => (
//               <div
//                 key={item}
//                 className="relative w-full h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
//               >
//                 <Image
//                   src={`/images/salon-${item}.jpg`} // Resim dosyalarını projenize ekleyin
//                   alt={`Salon ${item}`}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Salonumuz;
