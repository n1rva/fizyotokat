import React from "react";

function CerezPolitikasi() {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Çerez Politikası
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bu sayfa, Fizyotto Tokat web sitesinde çerezlerin nasıl
              kullanıldığını açıklar.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 my-6 bg-white text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Çerez Politikası</h2>
        <p className="mb-4">Son güncellenme: 24/03/2024</p>
        <p className="mb-4">
          Fizyotto Tokat olarak, web sitemizde çerezler kullanmaktayız. Bu Çerez
          Politikası, hangi çerezleri, hangi amaçla kullandığımız ve çerez
          ayarlarınızı nasıl değiştirebileceğiniz konusunda sizi bilgilendirmeyi
          amaçlamaktadır.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Çerez Nedir?</h3>
        <p className="mb-4">
          Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla
          cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, siteyi
          daha verimli kullanmanıza ve kullanıcı deneyiminizi
          kişiselleştirmemize yardımcı olur.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">
          Hangi Çerezleri Kullanıyoruz?
        </h3>
        <p className="mb-4">
          Sitemizde aşağıdaki türde çerezler kullanılmaktadır:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <strong>Zorunlu Çerezler:</strong> Sitenin temel işlevlerini
            çalıştırmak için gereklidir. Örneğin, güvenlik önlemleri ve
            kullanıcı oturumlarını yönetmek için kullanılır.
          </li>
          <li className="mb-2">
            <strong>Performans Çerezleri:</strong> Sitenin performansını analiz
            etmek ve kullanıcı deneyimini iyileştirmek için kullanılır.
          </li>
          <li className="mb-2">
            <strong>İşlevsellik Çerezleri:</strong> Kullanıcı tercihlerini
            hatırlamak ve siteyi kişiselleştirmek için kullanılır.
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-2">
          Çerezleri Nasıl Kontrol Edebilirsiniz?
        </h3>
        <p className="mb-4">
          Tarayıcınızın ayarlarını kullanarak çerezleri kabul etmeyi
          reddedebilir veya çerezleri silmeyi tercih edebilirsiniz. Ancak, bazı
          çerezleri devre dışı bırakmanız, sitenin bazı işlevlerinin düzgün
          çalışmamasına neden olabilir.
        </p>
        <p className="mb-4">
          Çerez ayarlarınızı yönetmek için tarayıcınızın "Ayarlar" veya
          "Gizlilik" bölümünü ziyaret edebilirsiniz.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Üçüncü Taraf Çerezler</h3>
        <p className="mb-4">
          Sitemizde, Google Analytics gibi üçüncü taraf hizmetler tarafından
          çerezler kullanılabilir. Bu çerezler, üçüncü tarafların kendi gizlilik
          politikalarına tabidir.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">
          Çerez Politikasındaki Değişiklikler
        </h3>
        <p className="mb-4">
          Bu Çerez Politikası, gerektiğinde güncellenebilir. Değişiklikler
          yürürlüğe girdiğinde, sitemizde güncel tarihle birlikte
          yayınlanacaktır.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">İletişim</h3>
        <p className="mb-4">
          Çerezler veya bu politika hakkında sorularınız varsa, lütfen bizimle{" "}
          <a
            href="mailto:fizyottoplustokat@gmail.com "
            className="text-blue-500 underline"
          >
            fizyottoplustokat@gmail.com
          </a>{" "}
          üzerinden iletişime geçin.
        </p>
      </div>
    </div>
  );
}

export default CerezPolitikasi;
