"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "../utils/custom-swiper-bullet.css";

const images = [
  "/images/sal1.jpeg",
  "/images/sal2.jpeg",
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

function Salon() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Kurumumuz</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kurumumuza ait görüntüler.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#EFF3F8] flex flex-col items-center  overflow-hidden pt-10">
        {/* Swiper Slider */}
        <div className="w-full max-w-4xl px-4 xl:max-w-7xl">
          <Swiper
            loop={true}
            centeredSlides={true}
            slidesPerView={1.2} // Yanlar çok az görünecek
            spaceBetween={10}
            navigation={true}
            zoom={true}
            modules={[Navigation]}
            className="rounded-lg overflow-hidden"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 1.3 },
              1024: { slidesPerView: 1.4 },
            }}
          >
            {images.map((src, index) => {
              // Aktif slaytın sağında ve solundaki slaytları belirleme
              const isNextToActive =
                index === (activeIndex + 1) % images.length ||
                index === (activeIndex - 1 + images.length) % images.length;

              return (
                <SwiperSlide key={index} className="flex justify-center">
                  <div
                    className={`relative w-full aspect-[16/9] transition-all ${
                      isNextToActive
                        ? "scale-90 opacity-50"
                        : "scale-100 opacity-100"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Salon ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Salon;
