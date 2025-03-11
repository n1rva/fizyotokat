"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Pilates",
    description:
      "Duruşunuzu ve esnekliğinizi artırırken, core kaslarınızı güçlendiren, beden-zihin uyumunu ön planda tutan pilates seanslarımızla sağlıklı bir yaşam sunuyoruz.",
    photos: ["/images/p1.jpeg", "/images/sal11.jpeg"],
    physioText: `"Pilates ile hem vücut postürünüzü düzeltiyor hem de kaslarınızın güçlenmesini sağlayarak günlük yaşamınızda daha esnek ve güçlü olmanıza yardımcı oluyoruz."`,
  },
  {
    title: "Manuel Terapi",
    description:
      "Kişiye özel müdahalelerle kas-iskelet sistemi rahatsızlıklarında ağrıları hafifletiyor ve hareket kabiliyetinizi artırıyoruz.",
    photos: ["/images/man-ter1.jpeg", "/images/sal18.jpeg"],
    physioText: `"Manuel terapi teknikleriyle ağrılarınızı hafifletiyor, eklem ve kas fonksiyonlarınızı iyileştirerek hareket kabiliyetinizi artırıyoruz."`,
  },
  {
    title: "Egzersiz Danışmanlığı",
    description:
      "Yaşam tarzınıza uygun egzersiz programlarıyla sağlığınızı destekliyor, spor ve rehabilitasyon süreçlerinizi en iyi şekilde planlıyoruz.",
    photos: ["/images/egz-dan2.jpeg", "/images/sal15.jpeg"],
    physioText: `"Kişiye özel egzersiz programlarıyla hem sağlıklı bir yaşam tarzı benimsemenizi hem de hedeflerinize ulaşmanızı sağlıyoruz."`,
  },
];

export default function ServicesPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Modal açıkken sayfa scroll'unu engelle
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-[#EFF3F8] p-6 md:p-2">
      <header className="text-center my-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Hizmetlerimiz
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Uzman ekibimiz ve modern tekniklerle size özel hizmetler sunuyoruz.
        </p>
      </header>
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white my-6 md:backdrop-blur-lg rounded-md md:rounded-2xl shadow-sm md:shadow-md overflow-hidden"
        >
          {/* Hizmet Başlığı ve Açıklaması */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-700">
              {service.title}
            </h2>
            <p className="text-gray-700 mt-3 text-base leading-relaxed">
              {service.description}
            </p>
          </div>
          {/* İki Fotoğraftan Oluşan Galeri */}
          <div className="grid grid-cols-2 gap-2 px-8 py-2">
            {service.photos.map((photo, idx) => (
              <motion.div
                key={idx}
                className="relative h-56 w-full cursor-pointer"
                whileHover={{ scale: 1.01 }}
                onClick={() => setSelectedImage(photo)}
              >
                <Image
                  src={photo}
                  alt={`${service.title} ${idx + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
            ))}
          </div>
          {/* Fizyoterapistlerimiz Bilgisi */}
          <div className="bg-[#EFF3F8] p-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              {service.physioText}
            </p>
          </div>
        </div>
      ))}

      {/* Modal: Tıklanan fotoğrafın büyütülmesi */}
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
              className="relative w-screen h-screen mx-16 overflow-auto flex items-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 0.9 }}
              exit={{ scale: 1.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Hizmet Fotoğrafı"
                fill
                className="object-contain rounded-lg"
                objectFit="contain"
              />
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
