import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-[#302F44] text-white py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* İletişim Bilgileri */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">İletişim</h3>
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
            <p className="">
              Esentepe Mah. Fatih Cd. Gülten Apt No:47/B, 60100 Merkez/Tokat
            </p>
          </div>
          {/* Fzt. Mücahit AYDIN */}
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
            <p className="">
              Fzt. Mücahit AYDIN -{" "}
              <a href="tel:+905412972153" className="text-[#5170fe]">
                0 541 297 21 53
              </a>
            </p>
          </div>
          {/* Fzt. Neslihan Aydoğan */}
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
            <p className="">
              Fzt. Neslihan Aydoğan -{" "}
              <a href="tel:+905056545071" className="text-[#5170fe]">
                0 505 654 50 71
              </a>
            </p>
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
            <a href="mailto:info@fizyottoplustokat.com" className="">
              info@fizyottoplustokat.com
            </a>
          </div>
        </div>

        {/* Hızlı Bağlantılar */}
        <div>
          <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/salon"
                className="text-gray-300 hover:text-[#5170fe]"
              >
                Kurumumuz
              </Link>
            </li>
            <li>
              <Link
                href="/hizmetler"
                className="text-gray-300 hover:text-[#5170fe]"
              >
                Hizmetler
              </Link>
            </li>
            <li>
              <Link
                href="/hakkimizda"
                className="text-gray-300 hover:text-[#5170fe]"
              >
                Hakkımızda
              </Link>
            </li>

            <li>
              <Link
                href="/iletisim"
                className="text-gray-300 hover:text-[#5170fe]"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* Sosyal Medya ve Harita */}
        <div>
          <h3 className="text-xl font-bold mb-4">Bizi Takip Edin</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/fizyottoplustokat356/"
              className="text-gray-300 hover:text-[#5170fe]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/fizyottoplus/"
              className="text-gray-300 hover:text-[#5170fe]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452.09833744676223!2d36.55656556903514!3d40.33473716035737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407db7a9c51d55f7%3A0xb5f4b103015b8933!2sF%C4%B0ZYOTTO%20PLUS%20TOKAT%20SA%C4%9ELIKLI%20YA%C5%9EAM%20MERKEZ%C4%B0!5e0!3m2!1str!2str!4v1741530811788!5m2!1str!2str"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Telif Hakkı */}
      <div className="text-center mt-8 pt-8 border-t border-gray-700">
        <p className="text-gray-300">
          © {year} Fizyotto Plus Tokat. Tüm hakları saklıdır.
        </p>
        <p className="text-gray-300 mt-2">
          <Link href="/gizlilik-politikasi" className="hover:text-white">
            Gizlilik Politikası
          </Link>{" "}
          |{" "}
          <Link href="/cerez-politikasi" className="hover:text-white">
            Çerez Politikası
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
