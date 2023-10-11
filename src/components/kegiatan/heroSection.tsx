import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { kegiatanData } from "@/data/kegiatan";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import Blur from "../ui/blur";

interface Props {
  data: (typeof kegiatanData)[0];
}

function HeroSection({ data }: Props) {
  const {
    title,
    logo,
    description,
    image,
    termsAndConditions,
    judgeData,
    seminar,
  } = data;
  return (
    <section className="w-[90%] max-w-screen-xl m-auto mt-10">
      <div>
        <div className="flex justify-between items-start lg:mb-6 lg:items-center">
          <div>
            <Button
              variant="outline"
              className="gap-2 pl-2 border-2 border-black rounded-[30px] text-xs font-semibold leading-normal text-[#2F2F30] lg:text-base"
            >
              <ChevronLeft />
              kembali
            </Button>
            <p className="py-4 text-xs font-normal leading-normal text-[#00000066] lg:hidden">
              Lomba / Debat / Debat Nasional
            </p>
          </div>
          <img src={logo} alt={title} width={100} />
        </div>

        <Card className="bg-white mb-6 lg:bg-transparent">
          <CardContent className="p-0">
            <div className="w-full h-[392px] flex">
              <img
                src={image}
                alt="kegiatan image"
                className="rounded-3xl w-full object-cover"
              />
            </div>

            <p className="hidden lg:block pt-11 text-base font-normal leading-normal text-[#00000066]">
              Lomba / Debat / Debat Nasional
            </p>

            <div className="w-4/5 m-auto text-center flex flex-col items-center justify-center gap-6 py-6 lg:flex-row lg:justify-between lg:w-full">
              <h1 className="text-2xl leading-normal font-bold text-[#000] lg:text-5xl">
                {title}
              </h1>
              <Button className="bg-active-blue text-base font-semibold rounded-[30px] lg:text-xl lg:py-6 lg:px-6 leading-normal">
                Daftar Sekarang
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white mb-6 lg:p-0 lg:bg-transparent">
          <CardContent className="py-[30px] px-[15px] flex flex-col gap-[14px] lg:p-0">
            <h1 className="text-2xl font-bold leading-normal text-[#000] lg:text-[32px] lg:font-semibold">
              Deskripsi
            </h1>
            <p className="text-base font-normal leading-6 lg:text-2xl lg:text-[#000000CC]">
              {description}
            </p>
          </CardContent>
          <Separator
            orientation="horizontal"
            className="hidden lg:block mt-9 bg-[#D9D9D9] h-[1px]"
          />
        </Card>

        <Card className="bg-white mb-6 lg:p-0 lg:bg-transparent lg:mb-20">
          <Blur className="w-[470px] h-[480px] -top-56 left-96 bg-[#6CC8FC] blur-[300px]" />
          <CardContent className="py-[30px] px-[15px] flex flex-col gap-[14px]">
            <h1 className="text-2xl font-bold leading-normal text-[#000] lg:text-[32px] lg:font-semibold">
              Syarat dan Ketentuan
            </h1>

            <ol
              type="1"
              className="list-decimal list-outside text-base font-normal leading-6 pl-5 lg:text-2xl lg:text-[#000000CC]"
            >
              {termsAndConditions.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ol>
          </CardContent>
          <Separator
            orientation="horizontal"
            className="hidden lg:block bg-[#D9D9D9] h-[1px]"
          />
        </Card>

        {seminar ? (
          <>
            <Card className="bg-white mb-6 text-center px-3 py-7 lg:p-0 lg:bg-transparent lg:mb-40">
              <CardTitle className="text-2xl font-bold leading- pb-[14px] text-[#000000CC] lg:text-start lg:text-[32px] lg:pb-14">
                {seminar.title}
              </CardTitle>
              <CardContent className="text-[15px] text-[#00000099] font-semibold leading-6 italic lg:text-[28px] lg:leading-10">
                {seminar.tema}
              </CardContent>
            </Card>
          </>
        ) : null}

        <Card className="bg-white mb-6 lg:p-0 lg:bg-transparent">
          <Blur className="w-[470px] h-[480px] -bottom-96 -right-96 bg-[#FFDE59]" />
          <Blur className="w-[470px] h-[480px] -bottom-52 -left-[900px] bg-[#00BF63]" />
          {judgeData.map(
            ({ name, image, description, achievements }, index) => (
              <div key={index}>
                <CardTitle className="text-[#000] text-center lg:text-start">
                  <h3 className="text-xl font-semibold leading-normal lg:text-[32px]">
                    {seminar ? "Pembicara" : "Juri Kompetisi"}
                  </h3>
                  <h1 className="text-[32px] font-semibold leading-normal lg:hidden">
                    {name}
                  </h1>
                </CardTitle>
                <CardContent className="py-[30px] px-[15px] flex flex-col gap-[14px] lg:flex-row-reverse lg:justify-center lg:items-center lg:px-0">
                  <div className="relative m-auto lg:-top-20">
                    <div className="bg-active-blue z-10 w-2/3 max-w-[350px] h-2/3 max-h-[300px] absolute bottom-0 right-1/2 translate-x-1/2 rounded-t-[30px]"></div>
                    <img
                      src={image}
                      alt={name}
                      width={500}
                      className="relative z-50 bg-center bg-contain left-[5%]"
                    />
                  </div>

                  <div>
                    <h1 className="hidden lg:block text-[32px] font-semibold leading-normal">
                      {name}
                    </h1>

                    <p className="lg:py-10">{description}</p>

                    <h1 className="text-base text-[#000000CC] font-normal">
                      Achievments
                    </h1>

                    <ul className="list-disc list-outside pl-5">
                      {achievements.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>
            )
          )}
        </Card>
      </div>
    </section>
  );
}

export default HeroSection;
