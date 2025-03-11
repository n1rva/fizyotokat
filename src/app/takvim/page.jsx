import React from "react";

export default function PilatesCalendar() {
  return (
    <section className="w-full min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Randevu Takvimi
          </h1>
          <p className="text-lg text-gray-600">
            Pilates randevularınızı planlamak için aşağıdaki takvimi
            kullanabilirsiniz.
          </p>
        </div>

        {/* Google Calendar Embed */}
        <div className="w-full h-[800px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=4aca7a9af12ce7b4410eb0b25fe5a803d33828845d7ae990a1bd794456d37cae%40group.calendar.google.com&ctz=Europe%2FIstanbul" // YOUR_CALENDAR_ID'i kendi Google Calendar ID'nizle değiştirin
            style={{ border: 0 }}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>

        {/* Açıklama */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Randevu almak için takvimde uygun bir zaman seçin veya bizimle
            iletişime geçin.
          </p>
        </div>
      </div>
    </section>
  );
}
