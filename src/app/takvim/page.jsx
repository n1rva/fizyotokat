import React from "react";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";

import { FiPhone } from "react-icons/fi";

export const metadata = {
  title: "Fizyotto Tokat - Randevu Takvimi",
  description: "Fizyotto Tokat'ta randevu almak için takvime bakın.",
  keywords: "fizyoterapi, tokat, randevu, fizik tedavi",
  openGraph: {
    title: "Fizyotto Tokat - Randevu Takvimi",
    description: "Fizyotto Tokat'ta randevu almak için takvime bakın.",
    images: [
      {
        url: "https://fizyottotokat.com/images/fizyotto.jpeg",
        width: 1200,
        height: 630,
        alt: "Fizyotto Tokat Logo",
      },
    ],
    url: "https://fizyottotokat.com/randevu",
    type: "website",
  },
};

export default function PilatesCalendar() {
  const info = [
    {
      icon: FaRegClock,
      title: "Çalışma Saatleri",
      description: "Pazartesi - Cumartesi: 09:00 - 21:00",
    },
    {
      icon: FaRegCalendarAlt,
      title: "Randevu Süresi",
      description: "Seanslarımız ortalama 45-60 dakika sürmektedir.",
    },
    {
      icon: FiPhone,
      title: "İptal/Değişiklik",
      description:
        "Randevu değişikliği için en az 24 saat önceden haber veriniz.",
    },
  ];
  return (
    <section className="w-full min-h-screen">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Randevu Takvimi
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Size en uygun tarih ve saati seçerek bizi arayıp randevunuzu
              kolayca oluşturabilirsiniz.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="w-full h-[800px] rounded-xl overflow-hidden">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=4aca7a9af12ce7b4410eb0b25fe5a803d33828845d7ae990a1bd794456d37cae%40group.calendar.google.com&ctz=Europe%2FIstanbul" // YOUR_CALENDAR_ID'i kendi Google Calendar ID'nizle değiştirin
                style={{ border: 0 }}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-1 flex items-center">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Randevu Bilgilendirmesi
              </h2>
              <div className="space-y-6">
                {info.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-medium text-blue-900 mb-2">
                  Yardıma mı ihtiyacınız var?
                </h3>
                <p className="text-blue-700 mb-4">
                  Randevu alma sürecinde herhangi bir sorunla karşılaşırsanız
                  bizi arayabilirsiniz.
                </p>
                <a
                  href="tel:+905412972153"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  <FiPhone className="w-5 h-5 mr-2" />
                  +90 541 297 21 53
                </a>
                <a
                  href="tel:+905056545071"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  <FiPhone className="w-5 h-5 mr-2" />
                  +90 505 654 50 71
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
