import Image from "next/image";
import { Target, Heart, Users, Shield } from "lucide-react";

export default function Hakkimizda() {
  const values = [
    {
      icon: Target,
      title: "Misyonumuz",
      description:
        "Her hastamıza özel, bilimsel ve modern tedavi yöntemleriyle en iyi sonuçları elde etmek.",
    },
    {
      icon: Heart,
      title: "Değerlerimiz",
      description:
        "Hasta odaklı yaklaşım, etik değerler ve sürekli gelişim ilkelerimizin temelini oluşturur.",
    },
    {
      icon: Users,
      title: "Ekip Ruhu",
      description:
        "Uzman kadromuzla multidisipliner yaklaşımı benimseyerek en iyi tedavi sonuçlarını hedefliyoruz.",
    },
    {
      icon: Shield,
      title: "Güvenilirlik",
      description:
        "Hastalarımızın güvenini ve memnuniyetini her zaman ön planda tutuyoruz.",
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "Kuruluş",
      description:
        "Fizyotto Markası ile fizyoterapistlere özel sosyal medya içerikleri oluşturmaya başladık.",
    },
    {
      year: "2021",
      title: "Büyüme",
      description:
        "Fizyotto Plus Markası ile toplumsal bilinç ve faydayı gözeterek egzersiz ve sağlıklı yaşam üzerine sosyal medya içerikleri üretmeye başladık.",
    },
    {
      year: "2023",
      title: "Teknoloji Yatırımı",
      description:
        "Fizyotto Live Markası ile fizyoterapistler ve FTR öğrencileri için eğitim organizasyonları düzenlemeye başladık.",
    },
    {
      year: "2025",
      title: "Yeni Dönem",
      description:
        "Fizyotto Plus Tokat, Fizyotto Plus Markasının ilk kurumu olarak Tokat'ta açıldı.",
    },
  ];

  const team = [
    {
      name: "Fzt. Mücahit AYDIN",
      role: "Kurucu & Fizyoterapist",
      specialty: "Manuel Terapi ve Egzersiz Danışmanlığı",
      image: "/images/fzt1.png",
    },
    {
      name: "Fzt. Neslihan AYDOĞAN",
      role: "Kıdemli Fizyoterapist",
      specialty: "Nörolojik Rehabilitasyon ve Skolyoz Tedavisi",
      image: "/images/fzt2.png",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
                Hakkımızda
              </h1>
              <div className="text-lg text-gray-600">
                Fizyotto Plus Tokat, işinde uzman, kendini sürekli geliştiren
                ekibiyle hizmet üreten, kişiye özel sağlıklı yaşam programları
                hazırlayan, uygulayan ve uygulatan, uygulamalar için ergonomik,
                ferah ve şık mekanlar sunan, sağlıklı bireylere ve herhangi bir
                rahatsızlığı olup da egzersiz yapmak isteyen kişilere
                fizyoterapist eşliğinde egzersiz yaptıran, Dünya’da
                fizyoterapiye dair son gelişmeleri takip eden fizyoterapist
                ekibiyle fizyoterapide etkili ve bilimsel yöntemlerle
                danışanlara hizmet veren, saygın ve güvenilir bir Fizyoterapi ve
                Egzersiz Danışmanlık Merkezidir.
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/outside-new.jpeg" // Fotoğraf dosyasını projenize ekleyin
                alt="Hakkımızda"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tarihçemiz
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="w-1/2" />
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                      {item.year.slice(-2)}
                    </div>
                    <div
                      className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}
                    >
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="text-xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </div>
                        <div className="text-gray-600">{item.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ekibimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-72 w-60 mx-auto overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
