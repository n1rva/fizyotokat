import React from "react";
import Image from "next/image";

export default function Hakkimizda() {
  return (
    <div className="min-h-screen bg-[#EFF3F8] p-6 my-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hakkımızda Bölümü - Sol Taraf Fotoğraf, Sağ Taraf Metin */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Fotoğraf */}
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/outside.jpeg" // Fotoğraf dosyasını projenize ekleyin
              alt="Hakkımızda"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {/* Metin */}
          <div className="bg-white/30 md:backdrop-blur-lg shadow-sm rounded-sm md:rounded-2xl p-4 md:p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Hakkımızda
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Fizyotto Plus Tokat, işinde uzman, kendini sürekli geliştiren
              ekibiyle hizmet üreten, kişiye özel sağlıklı yaşam programları
              hazırlayan, uygulayan ve uygulatan, uygulamalar için ergonomik,
              ferah ve şık mekanlar sunan, sağlıklı bireylere ve herhangi bir
              rahatsızlığı olup da egzersiz yapmak isteyen kişilere
              fizyoterapist eşliğinde egzersiz yaptıran, Dünya’da fizyoterapiye
              dair son gelişmeleri takip eden fizyoterapist ekibiyle
              fizyoterapide etkili ve bilimsel yöntemlerle danışanlara hizmet
              veren, saygın ve güvenilir bir Fizyoterapi ve Egzersiz Danışmanlık
              Merkezidir.
            </p>
          </div>
        </div>

        {/* Misyon ve Vizyon Bölümü - Alt Kısımda Yan Yana */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misyon */}
          <div className="bg-white/30 md:backdrop-blur-lg rounded-md md:rounded-2xl shadow-sm p-4 md:p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Misyonumuz
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Misyonumuz; bireysel tedavi ve rehabilitasyon çözümleri sunarak
              toplumumuzun yaşam kalitesini artırmak ve sağlıklı yaşamı
              desteklemektir.
            </p>
          </div>
          {/* Vizyon */}
          <div className="bg-white/30 md:backdrop-blur-lg rounded-md md:rounded-2xl shadow-sm p-4 md:p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Vizyonumuz
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Vizyonumuz; Tokat ve çevresinde en güvenilir fizyoterapi ve
              egzersiz danışmanlık merkezi olmak, yenilikçi teknikler ve sürekli
              gelişimle sektörümüzde lider konuma ulaşmaktır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
