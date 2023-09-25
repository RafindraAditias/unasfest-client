import fragment5 from "@/assets/fragments/fragment5.svg";
import sphere from "@/assets/fragments/sphere.svg";
import sphere2 from "@/assets/fragments/sphere2.svg";
import sphere3 from "@/assets/fragments/sphere3.svg";
import cube from "@/assets/fragments/cube.svg";
import debatePoster from "@/assets/content/debate-poster.webp";

import { Card, CardContent } from "@/components/ui/card";
import Blur from "../ui/blur";

function CompetitionSection() {
  const competitionContents = [
    {
      poster: debatePoster,
      title: "Kompetisi Debat Bahasa Indonesia (KDBI)",
      description:
        "Kegiatan Kompetisi Debat Bahasa Indonesia dan bahasa inggris merupakan kompetisi debat dimana peserta beradu argumen dan pemikiran terkait isu-isu kontemporer dari berbagai aspek yakni sosial, politik, budaya, teknologi, ekonomi, energi, hukum, kesehatan dan lain sebagainya.",
    },

    {
      poster: debatePoster,
      title: "English Debate Competition (EDC)",
      description:
        "The English Debate Competition (EDC) is an English language debate competition where participants debate arguments and thoughts related to contemporary issues from various aspects, namely social, political, cultural, technological, economic, energy, legal, health and so on. Therefore, the English Debate Competition (EDC) aims to improve participants' ability to speak in public, develop analytical and critical thinking skills, and strengthen their ability to argue using effective and persuasive language.",
    },

    {
      poster: debatePoster,
      title: "Lomba Karya Tulis Ilmiah",
      description:
        "Lomba Karya Tulis Ilmiah adalah kompetisi karya tulis yang diperoleh dari hasil observasi dan penelitian dalam bidang dan metode tertentu, dengan penulisan sistematis dan menggunakan bahasa Indonesia yang baik dan benar serta isinya dapat dipertanggung jawabkan kebenarannya atau keilmiahannya.",
    },

    {
      poster: debatePoster,
      title: "Seminar Nasional",
      description:
        "Seminar merupakan pertemuan kelompok yang membahas dan menemukan solusi dari topik atau masalah yang relevan dengan mempresentasikan dan menjelaskan solusi tersebut yang dilakukan oleh individu yang ahli di bidangnya. Hal yang menjadi topik pembahasan kita saat ini dimana kita akan membahas terkait...",
    },
  ];

  return (
    <section id="lomba" className="relative w-full h-full mt-36 text-center">
      <div className="w-3/5 m-auto mb-8 -[5px]">
        <h1 className="text-5xl font-semibold tracking-normal capitalize mb-4">
          lomba universitas Nasional Festival 2023
        </h1>
        <p>Neque, pulvinar vestibulum non aliquam.</p>
      </div>

      <img
        src={sphere}
        alt="sphere"
        className="absolute -top-28 -left-16"
        width={180}
        height={180}
      />
      <img
        src={fragment5}
        alt="fragment"
        className="absolute -top-16 -right-32"
        width={220}
        height={220}
      />

      <Card className="py-24">
        <CardContent className="w-full flex flex-col justify-center items-center gap-24">
          {competitionContents.map((content, index) => (
            <div
              key={index}
              className={`flex justify-center items-start gap-16 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-fit h-fit">
                <img
                  src={content.poster}
                  alt="no image"
                  width={350}
                  height={550}
                  className="rounded-3xl"
                />
              </div>
              <div className="w-1/3 flex flex-col py-8 px-0 items-start">
                <h1 className="text-4xl leading-tight font-semibold tracking-normal capitalize text-left mb-8">
                  {content.title}
                </h1>
                <p className="text-lg text-left mb-8">{content.description}</p>
                <div className="flex gap-2">
                  <button className="bg-[#004AAD] rounded-3xl text-white py-1 px-4 font-semibold">
                    Daftar Sekarang
                  </button>
                  <button className="border-[#004AAD] border-2 rounded-3xl text-[#4E2CA3] py-1 px-4 font-semibold">
                    Informasi lebih lanjut
                  </button>
                </div>
              </div>
            </div>
          ))}

          <img
            src={sphere2}
            alt="fragment"
            className="absolute top-[20%] -left-24"
            width={150}
            height={150}
          />

          <img
            src={sphere3}
            alt="fragment"
            className="absolute bottom-1/3 -right-20"
            width={150}
            height={150}
          />

          <img
            src={cube}
            alt="fragment"
            className="absolute bottom-1/4 -left-24"
            width={200}
            height={200}
          />
        </CardContent>
      </Card>

      <Blur
        blurRadius={350}
        className="w-[470px] h-[480px] -left-1/2 top-0 bg-[#FFDE59] bg-opacity-60"
      />

      <Blur
        blurRadius={350}
        className="w-[470px] h-[480px] -right-1/3 -top-[10%] bg-[#00BF63] bg-opacity-60"
      />

      <Blur
        blurRadius={350}
        className="w-[470px] h-[480px] -left-1/4 top-1/2 bg-[#00BF63] bg-opacity-70"
      />

      <Blur
        blurRadius={350}
        className="w-[470px] h-[480px] left-2/4 top-1/4 bg-[#004AADB2]"
      />
      <Blur
        blurRadius={350}
        className="w-[470px] h-[480px] left-2/3 bottom-1/4 bg-[#6CC8FCB2]"
      />
      <Blur
        blurRadius={350}
        className="w-[470px] h-[480px] right-3/4 -bottom-[15%] bg-[#CB6CE699]"
      />
    </section>
  );
}

export default CompetitionSection;
