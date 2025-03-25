"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Sayfanın herhangi bir yerine tıklandığında menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center max-w-7xl py-4 px-4 md:px-0 mx-auto">
        <div className="flex-shrink-0 flex items-center">
          <Link href={"/"}>
            <Image
              src="/images/asdz.png"
              alt="Fizyoterapi Salonu"
              width={125}
              height={48}
              className="object-contain "
            />
          </Link>
        </div>

        {/* Hamburger Menü */}
        <button
          className="md:hidden text-gray-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Masaüstü Navigasyon */}
        <nav className="hidden md:flex space-x-6 text-gray-500 font-medium">
          <Link href="/salon" className="hover:text-[#5170fe]">
            Kurumumuz
          </Link>
          <Link href="/hizmetler" className="hover:text-[#5170fe]">
            Hizmetlerimiz
          </Link>
          <Link href="/hakkimizda" className="hover:text-[#5170fe]">
            Hakkımızda
          </Link>
          <Link href="/iletisim" className="hover:text-[#5170fe]">
            İletişim
          </Link>
        </nav>

        {/* Randevu Butonu */}
        <Link
          href={"/takvim"}
          className="hidden md:block bg-transparent px-6 py-3 rounded-lg border text-gray-500 text-sm transition-all duration-300 hover:bg-[#5170fe] hover:text-white"
        >
          Randevu takvimi
        </Link>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute top-16 right-0 w-full bg-white shadow-lg z-50"
          >
            <nav className="flex flex-col space-y-4 p-4 text-gray-500 font-medium">
              <Link
                href="/salon"
                className="hover:text-black"
                onClick={closeMenu}
              >
                Salonumuz
              </Link>
              <Link
                href="/hizmetler"
                className="hover:text-black"
                onClick={closeMenu}
              >
                Hizmetlerimiz
              </Link>
              <Link
                href="/hakkimizda"
                className="hover:text-black"
                onClick={closeMenu}
              >
                Hakkımızda
              </Link>
              <Link
                href="/iletisim"
                className="hover:text-black"
                onClick={closeMenu}
              >
                İletişim
              </Link>
              <Link
                href={"/takvim"}
                className="bg-transparent px-6 py-3 rounded-lg border text-gray-500 text-sm transition-all duration-300 hover:bg-gray-500 hover:text-white text-center"
                onClick={closeMenu}
              >
                Randevu takvimi
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
