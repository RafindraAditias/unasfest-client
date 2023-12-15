import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "@/assets/gallery/videotron_kdbi_2.webp";
import image2 from "@/assets/gallery/videotron_kdbi.webp";
import image3 from "@/assets/gallery/juara_lomba.webp";
import image4 from "@/assets/gallery/videotron_kdbi_3.webp";
import image5 from "@/assets/gallery/kompetisi_debat.webp";
import image6 from "@/assets/gallery/frontview_kdbi.webp";
import image7 from "@/assets/gallery/juri_lomba_2.webp";
import image8 from "@/assets/gallery/sertifikat_juara_lomba.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/kegiatanCarousel.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function KegiatanSection() {
  const galeriKegiatanData = [
    {
      title: "English Debate Competition UNASFEST 2022",
      description:
        "The English Debate Competition (EDC) is an English language debate competition where participants debate arguments and thoughts related to contemporary issues from various aspects, namely social, political, cultural, technological, economic, energy, legal, health and so on. Therefore, the English Debate Competition (EDC) aims to improve participants' ability to speak in public, develop analytical and critical thinking skills, and strengthen their ability to argue using effective and persuasive language.",
      carouselImages: [image1, image5],
    },

    {
      title: "Kompetisi Debat Bahasa Indonesia (KDBI)",
      description:
        "Kegiatan Kompetisi Debat Bahasa Indonesia dan bahasa inggris merupakan kompetisi debat dimana peserta beradu argumen dan pemikiran terkait isu-isu kontemporer dari berbagai aspek yakni sosial, politik, budaya, teknologi, ekonomi, energi, hukum, kesehatan dan lain sebagainya.",
      carouselImages: [image2, image6],
    },

    {
      title: "Seminar Nasional (SEMNAS)",
      description:
        "Seminar merupakan pertemuan kelompok yang membahas dan menemukan solusi dari topik atau masalah yang relevan dengan mempresentasikan dan menjelaskan solusi tersebut yang dilakukan oleh individu yang ahli di bidangnya. Hal yang menjadi topik pembahasan kita saat ini dimana kita akan membahas terkait bagaimana ‘penerapan teknologi di dalam inovasi maritim yang beracuan pada ekonomi biru yang mentransformasikan sistem ekonomi secara menyeluruh’. Hadirnya penyelenggaraan Seminar Nasional UNAS FEST 2023 yang diselenggarakan oleh Biro Kemahasiswaan dalam merayakan ulang tahun Universitas Nasional yang ke-74",
      carouselImages: [image3, image7],
    },

    {
      title: "Karya Tulis Ilmiah",
      description:
        "Lomba Karya Tulis Ilmiah UNAS FEST 2023 adalah salah satu dari tiga acara UNAS FEST 2023 yang berupa kompetisi Karya Tulis ilmiah Tingkat Nasional antar PTN & PTS se-Indonesia. Lomba Karya Tulis Ilmiah adalah kompetisi karya tulis yang diperoleh dari hasil observasi dan penelitian dalam bidang dan metode tertentu, dengan penulisan sistematis dan menggunakan bahasa Indonesia yang baik dan benar serta isinya dapat dipertanggungjawabkan kebenarannya/keilmiahannya.",
      carouselImages: [image4, image8],
    },
  ];

  return (
    <section className="w-full h-fit mt-20 lg:mt-48">
      {galeriKegiatanData.map(
        ({ title, description, carouselImages }, index) => (
          <Card
            key={index}
            className={`flex w-4/5 max-w-screen-xl m-auto justify-between flex-col border-[5px] p-5 lg:p-20 lg:gap-24 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } ${index > 0 && "mt-14"}`}
          >
            <CardHeader className="w-full lg:w-1/2 p-0">
              <div className="galeri-kegiatan">
                <Swiper
                  pagination={{
                    type: "bullets",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="galeri-kegiatan"
                  spaceBetween={100}
                >
                  {carouselImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        className="object-cover object-center w-full aspect-square rounded-xl shadow-xl"
                        width={500}
                        height={503}
                        loading="eager"
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </CardHeader>
            <CardContent className="font-inter w-full m-auto mt-6 p-0 lg:px-6 lg:mt-0">
              <CardTitle className="text-2xl leading-normal text-active-blue lg:text-4xl font-bold lg:leading-10 pb-4">
                {title}
              </CardTitle>
              <CardDescription className="text-base text-[#9795B5] lg:text-lg font-normal leading-8">
                {description}
              </CardDescription>
            </CardContent>
          </Card>
        )
      )}
    </section>
  );
}

export default KegiatanSection;
