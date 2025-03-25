import React from "react";

const Iletisim = () => {
  return (
    <section className="w-full min-h-screen">
      {/* Başlık */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">İletişim</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aşağıdaki bilgilerden bize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
        {/* İletişim Bilgileri ve Harita */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* İletişim Bilgileri */}
          <div className="bg-white p-8 rounded-md md:rounded-xl shadow-sm md:shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              İletişim Bilgileri
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#5170fe] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-gray-600">
                  Esentepe Mah. Fatih Cd. Gülten Apt No:47/B, 60100 Merkez/Tokat
                </p>
              </div>
              {/* Fzt. Mücahit AYDIN */}
              <div className="flex flex-col">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#5170fe] mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-1a7 7 0 00-7-7H6a2 2 0 01-2-2V5z"
                    />
                  </svg>
                  <p className="text-gray-600">Fzt. Mücahit AYDIN</p>
                </div>
                <a href="tel:+905412972153" className="text-[#5170fe] ml-8">
                  0 541 297 21 53
                </a>
              </div>
              {/* Fzt. Neslihan Aydoğan */}
              <div className="flex flex-col">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#5170fe] mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-1a7 7 0 00-7-7H6a2 2 0 01-2-2V5z"
                    />
                  </svg>
                  <p className="text-gray-600">Fzt. Neslihan Aydoğan</p>
                </div>
                <a href="tel:+905056545071" className="text-[#5170fe] ml-8">
                  0 505 654 50 71
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#5170fe] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:fizyottoplustokat@gmail.com "
                  className="text-gray-600"
                >
                  fizyottoplustokat@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Harita */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452.09833744676223!2d36.55656556903514!3d40.33473716035737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407db7a9c51d55f7%3A0xb5f4b103015b8933!2sF%C4%B0ZYOTTO%20PLUS%20TOKAT%20SA%C4%9ELIKLI%20YA%C5%9EAM%20MERKEZ%C4%B0!5e0!3m2!1str!2str!4v1741530811788!5m2!1str!2str"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iletisim;
