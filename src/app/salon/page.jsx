import Salon from "@/components/salon";

export const metadata = {
  title: "Fizyotto Tokat - Kurumumuz",
  description: "Fizyotto Tokat kurumumuza ait görüntüler.",
  keywords: "fizyoterapi, tokat, iletişim, randevu",
  openGraph: {
    title: "Fizyotto Tokat - Kurumumuz",
    description: "Fizyotto Tokat kurumumuza ait görüntüler.",
    images: [
      {
        url: "https://fizyottotokat.com/images/fizyotto.jpeg",
        width: 1200,
        height: 630,
        alt: "Fizyotto Tokat Logo",
      },
    ],
    url: "https://fizyottotokat.com/iletisim",
    type: "website",
  },
};

export default function Salonumuz() {
  return (
    <div className="w-full">
      <Salon />
    </div>
  );
}
