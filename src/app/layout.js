import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fizyotto Tokat - Tokat'ta Sağlıklı Yaşamın Adresi",
  description:
    "Fizyotto Tokat, uzman fizyoterapistlerle sağlık ve rehabilitasyon hizmetleri sunar. Tokat'ta sağlık ve egzersiz programları için bize ulaşın.",
  keywords:
    "fizyoterapi, tokat, fizik tedavi, rehabilitasyon, sağlık, fizyotto, fizyotto plus, fizyottoplus",
  author: "Fizyotto Tokat",
  openGraph: {
    title: "Fizyotto Tokat - Tokat'ta Sağlıklı Yaşamın Adresi",
    description:
      "Fizyotto Tokat, uzman fizyoterapistlerle sağlık ve rehabilitasyon hizmetleri sunar. Tokat'ta sağlık ve egzersiz programları için bize ulaşın.",
    images: [
      {
        url: "https://fizyottotokat.com/images/fizyotto.jpeg",
        width: 1200,
        height: 630,
        alt: "Fizyotto Tokat Logo",
      },
    ],
    url: "https://fizyottotokat.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fizyotto Tokat - Tokat'ta Sağlıklı Yaşamın Adresi",
    description:
      "Fizyotto Tokat, uzman fizyoterapistlerle sağlık ve rehabilitasyon hizmetleri sunar. Tokat'ta sağlık ve egzersiz programları için bize ulaşın.",
    images: ["https://fizyottotokat.com/images/fizyotto.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased min-h-screen bg-[#EFF3F8] flex flex-col font-inter items-center`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
