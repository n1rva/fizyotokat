import Hizmetler from "@/components/hizmetler";

export const metadata = {
  title: "Fizyotto Tokat - Hizmetlerimiz",
  description:
    "Fizyotto Tokat'ın sunduğu fizik tedavi, rehabilitasyon ve egzersiz programları hakkında bilgi alın.",
  keywords: "fizyoterapi, tokat, hizmetler, fizik tedavi, rehabilitasyon",
  openGraph: {
    title: "Fizyotto Tokat - Hizmetlerimiz",
    description:
      "Fizyotto Tokat'ın sunduğu fizik tedavi, rehabilitasyon ve egzersiz programları hakkında bilgi alın.",
    images: [
      {
        url: "https://fizyottotokat.com/images/fizyotto.jpeg",
        width: 1200,
        height: 630,
        alt: "Fizyotto Tokat Logo",
      },
    ],
    url: "https://fizyottotokat.com/hizmetler",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-2 xl:p-0 w-full">
      <Hizmetler />
    </div>
  );
}
