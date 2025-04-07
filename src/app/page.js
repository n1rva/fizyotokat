"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@/components/accordion";

export default function Home() {
  useEffect(() => {
    const fizyoterapistResim = document.getElementById("fizyoterapist-resim");
    const fizyoterapistResim2 = document.getElementById(
      "fizyoterapist-resim-2"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("translate-y-20", "opacity-0");
            entry.target.classList.add("translate-y-0", "opacity-100");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (fizyoterapistResim) {
      observer.observe(fizyoterapistResim);
    }
    if (fizyoterapistResim2) {
      observer.observe(fizyoterapistResim2);
    }

    return () => {
      if (fizyoterapistResim) {
        observer.unobserve(fizyoterapistResim);
      }
      if (fizyoterapistResim2) {
        observer.unobserve(fizyoterapistResim2);
      }
    };
  }, []);

  const faqData = [
    {
      question: "Çalışma saatleri nedir?",
      answer:
        "Çalışma saatlerimiz 09.00-21.00'dır. Kurumumuz pazar günleri kapalıdır.",
    },
    {
      question: "Hangi hizmetler mevcut?",
      answer:
        "Reformer pilates, hamile pilatesi, klinik pilates, skolyoz terapisi, sporcu yaralanmaları, manuel terapi, masaj, bireysel egzersiz ve duruş bozukluklarına yönelik danışmanlık hizmetleri vermekteyiz.",
    },
    {
      question: "Hizmetlerimiz kimlere yönelik?",
      answer:
        "Hizmetlerimiz geniş bir yelpazede yer alıyor ve herkesi kapsayacak şekilde tasarlandı. Sporcular, hareketli bir yaşam tarzı benimseyenler, fiziksel rahatsızlıkları olanlar veya sadece sağlığını önemseyen herkes hizmetlerimizden yararlanabilir.",
    },
    {
      question: "Nasıl randevu alabilirim?",
      answer:
        "İletişim sayfasında yer alan bilgiler üzerinden bizlere ulaşabilirsiniz.",
    },
  ];

  const galleryImages = [
    "/images/sal9.jpeg",
    "/images/sal11.jpeg",
    "/images/sal18.jpeg",
  ];

  return (
    <>
      <div className="w-full">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center ">
          <div className="max-w-7xl flex  flex-col md:flex-row items-center my-10 px-4 lg:px-0 ">
            {/* Resim sadece mobilde gösterilsin ve üstte olsun */}
            <div className="md:hidden w-full flex justify-center">
              <div className="relative w-full h-64">
                <Image
                  src="/images/hero-mobil.webp"
                  alt="Physiotherapy session"
                  fill
                  className="rounded-[20px] object-cover"
                />
              </div>
            </div>
            {/* Metin içeriği */}
            <div className="w-full px-6 py-8 md:w-1/2 md:px-0 text-left xl:mr-40">
              <div className="text-4xl md:text-6xl font-medium leading-tight">
                <h2 className="bg-gradient-to-b from-[#5170fe] to-gray-400 bg-clip-text text-transparent leading-tight">
                  Fizyotto Plus
                </h2>
                <h2 className="text-gray-600 text-2xl md:text-4xl leading-tight">
                  Tokat'ta Sağlıklı Yaşamın Adresi
                </h2>
              </div>
              <p className="mt-4 text-gray-500 text-lg md:text-xl">
                Uzman fizyoterapistlerimizle sağlığınıza değer katıyoruz.
              </p>
              <div className="mt-8">
                <Link
                  href={"/takvim"}
                  className="hover:bg-[#7890f8] px-6 py-3 my-6 rounded-lg border text-white text-sm transition-all duration-300 bg-[#5170fe] hover:text-white"
                >
                  Randevu takvimi
                </Link>
              </div>
            </div>
            {/* Resim sadece masaüstünde gösterilsin */}
            <div className="hidden md:flex md:w-1/2 mt-6 md:mt-0 justify-center">
              <div className="relative w-[450px] h-[600px]">
                <Image
                  src="/images/hero.webp"
                  alt="Physiotherapy session"
                  fill
                  className="rounded-[80px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fizyoterapist Bölümü */}
        <div className="min-h-screen bg-[#EFF3F8] flex flex-col items-center p-6 mt-20 md:mt-44">
          {/* Section Header */}
          <div className="w-full max-w-5xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-700">
              Fizyoterapistlerimiz
            </h2>
          </div>

          {/* Physiotherapists Cards */}
          <div className="grid grid-cols-1 gap-12 w-full max-w-5xl">
            {[
              {
                name: "Fzt. Mücahit AYDIN",
                specialty: "Manuel Terapi ve Egzersiz Danışmanlığı",
                infoCards: [
                  "Fizyotto, Fizyotto Live ve Fizyotto Plus markalarının kurucu ortağı olan Fzt. Mücahit AYDIN, artık Fizyotto Plus Tokat'ta siz değerli Tokat halkına hizmet veriyor.",
                  "Kurumumuzda manuel terapi, medikal masaj, egzersiz danışmanlığı, klinik pilates, postür-duruş bozuklukları ve egzersiz danışmanlığı gibi birçok hizmetle sağlığınıza katkı sunmaya devam ediyor.",
                ],
                photo: "/images/fzt1.png",
              },
              {
                name: "Fzt. Neslihan AYDOĞAN",
                specialty: "Nörolojik Rehabilitasyon ve Skolyoz Tedavisi",
                infoCards: [
                  "20 yılı aşkın mesleki tecrübesi ve değerli bilgi birikimi ile Fzt. Neslihan AYDOĞAN artık Fizyotto Plus Tokat'ta sizlere hizmet veriyor.",
                  "Kurumumuzda skolyoterapi, postür-duruş bozuklukları, manuel terapi, reformer pilates, klinik pilates, medikal masaj ve egzersiz danışmanlığı gibi birçok hizmetle sağlığınıza katkı sunmaya devam ediyor.",
                ],
                photo: "/images/fzt2.png",
              },
            ].map((physio, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl shadow-sm md:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="relative h-64 w-64 rounded-xl overflow-hidden mb-6 md:mb-0 md:mr-6">
                  <Image
                    src={physio.photo}
                    alt={physio.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col space-y-4 w-full">
                  <h3 className="text-2xl font-bold text-gray-700">
                    {physio.name}
                  </h3>
                  <p className="text-[#5170fe] font-semibold">
                    {physio.specialty}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {physio.infoCards.map((info, i) => (
                      <div
                        key={i}
                        className="bg-[#EFF3F8] p-4 rounded-lg shadow-md"
                      >
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {info}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* hizmetlerimiz */}
        <div className="min-h-screen bg-[#EFF3F8] flex flex-col items-center p-6 mt-20 md:mt-0">
          {/* Section Header */}
          <div className="w-full max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-700">
              Hizmetlerimiz
            </h2>
          </div>

          {/* Services Cards */}
          <div className="mt-12 w-full max-w-5xl space-y-8">
            {[
              {
                title: "Pilates",
                description:
                  "Duruşunuzu ve esnekliğinizi artırırken, core kaslarınızı güçlendiriyoruz. Pilates seanslarımız, beden ve zihin uyumunu ön planda tutar.",
                photo: "/images/p1.jpeg",
              },
              {
                title: "Manuel Terapi",
                description:
                  "Kas-iskelet sistemi rahatsızlıklarında kişiye özel müdahalelerle ağrıları hafifletir, mobiliteyi artırırız. Modern tekniklerle desteklenen uygulamalarımızla konforunuzu sağlıyoruz.",
                photo: "/images/man-ter1.jpeg",
              },
              {
                title: "Egzersiz Danışmanlığı",
                description:
                  "Yaşam tarzınıza uygun egzersiz programlarıyla sağlığınızı destekleyin. Profesyonel danışmanlık ile spor ve rehabilitasyon süreçlerinizi en iyi şekilde planlıyoruz.",
                photo: "/images/egz-dan2.jpeg",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white backdrop-blur-lg rounded-2xl shadow-md transform transition flex flex-col md:flex-row overflow-hidden"
              >
                {/* Fotoğraf Alanı */}
                <div className="relative h-48 md:h-auto md:w-1/2">
                  <Image
                    src={service.photo}
                    alt={`${service.title} Uygulaması`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                {/* Bilgi Kartı */}
                <div className="pl-6 pb-2 flex flex-col bg- md:w-1/2 md:min-h-48">
                  <h3 className="text-2xl font-bold mt-2 text-gray-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mt-2 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* sss */}
        <div className="p-12 space-y-12 mt-20 md:mt-0 bg-gray-50">
          <div className="w-full  mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-700 text-center">
              Sıkça Sorulan Sorular
            </h2>
          </div>
          <section className="max-w-5xl mx-auto">
            <Accordion>
              {faqData.map((item, index) => (
                <AccordionItem key={index} title={item.question}>
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4"
                  >
                    {item.answer}
                  </motion.p>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
        {/* salon */}
        <div className="p-6 space-y-12 mt-20 md:mt-0">
          <div className="w-full max-w-5xl text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-700">
              Kurumumuz
            </h2>
          </div>
          <section className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  alt={`Galeri ${index + 1}`}
                  className="rounded-2xl shadow-lg w-full h-48 object-fit"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
            <div className="flex justify-center my-4">
              <Link
                href={"/salon"}
                className="px-4 py-2 bg-[#5170fe] text-white rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                Daha Fazla Görüntü
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
