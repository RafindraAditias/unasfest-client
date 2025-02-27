import sphere from "@/assets/random/sphere.webp";
import fragment5 from "@/assets/random/fragment5.webp";
import sphere2 from "@/assets/random/sphere2.webp";
import sphere3 from "@/assets/random/sphere3.webp";
import cube from "@/assets/random/cube.svg";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Blur from "../ui/blur";
import { Button } from "../ui/button";
import { competitionData } from "@/data/competition";
import { Suspense } from "react";
import Loading from "../loading";
import { createSearchParams, useNavigate } from "react-router-dom";

function CompetitionSection() {
  const navigate = useNavigate();
  return (
    <section
      id="kegiatan"
      className="relative w-full max-w-screen-xl m-auto mt-36 text-center lg:w-4/5"
    >
      <Suspense fallback={<Loading />}>
        <div className="hidden w-3/5 m-auto mb-8 lg:block">
          <h1 className="text-5xl font-semibold tracking-normal capitalize mb-4">
            Universitas Nasional Festival 2023
          </h1>
          <p>Daftar perlombaan unas Festival 2023 yang dapat anda ikuti</p>

          <img
            src={sphere}
            alt="sphere"
            className="hidden lg:block absolute -top-28 -left-16"
            width={180}
            height={180}
          />
          <img
            src={fragment5}
            alt="fragment"
            className="hidden lg:block absolute -top-16 -right-32"
            width={220}
            height={220}
          />
        </div>

        <Card className="w-[90%] m-auto py-14 p-8 border border-active-blue lg:w-full lg:rounded-[50px] lg:border-none lg:py-24">
          <CardHeader className="p-0 pb-12">
            <CardTitle className="capitalize text-black text-[32px] font-semibold tracking-tight text-pretty leading-normal mb-4 lg:hidden">
              Universitas Nasional Festival 2023
            </CardTitle>
            <CardDescription className="text-system-grey-600 text-base font-normal tracking-tight leading-normal text-pretty lg:hidden">
              Daftar perlombaan unas Festival 2023 yang dapat anda ikuti
            </CardDescription>
          </CardHeader>

          <CardContent className="w-full flex flex-col justify-center items-center gap-24">
            {competitionData.map((content, index) => (
              <div
                key={index}
                className={`flex flex-col gap-8 lg:justify-center lg:gap-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div
                  className="hidden cursor-pointer lg:block overflow-hidden rounded-3xl"
                  onClick={() =>
                    navigate({
                      pathname: "kegiatan",
                      search: createSearchParams({
                        query: content.path,
                      }).toString(),
                    })
                  }
                >
                  <img
                    src={content.poster}
                    alt="no image"
                    width={350}
                    height={550}
                    className="hover:scale-105 duration-200"
                  />
                </div>

                <div className="flex flex-col gap-8 w-full basis-1/3 text-center lg:text-start">
                  <h1
                    className="text-lg text-system-grey-900 font-bold leading-normal tracking-tight lg:text-4xl lg:font-semibold cursor-pointer"
                    onClick={() =>
                      navigate({
                        pathname: "kegiatan",
                        search: createSearchParams({
                          query: content.path,
                        }).toString(),
                      })
                    }
                  >
                    {content.title}
                  </h1>
                  <div className="lg:hidden">
                    <img
                      src={content.poster}
                      alt="no image"
                      width={350}
                      height={550}
                      className="rounded-3xl m-auto"
                    />
                  </div>
                  <p className="text-base font-normal text-system-grey-600 leading-normal lg:text-lg lg:leading-7 lg:tracking-tight">
                    {content.description}
                  </p>
                  <div className="flex flex-col justify-center gap-2 items-center md:flex-row">
                    <Button
                      className=" bg-[#004AAD] rounded-3xl text-white py-1 px-4 font-semibold flex-grow w-full max-w-[200px]"
                      onClick={() =>
                        navigate(`kegiatan/form/${content.formPath}`)
                      }
                    >
                      Daftar Sekarang
                    </Button>
                    <Button
                      variant={"outline"}
                      className="whitespace-nowrap border-[#004AAD] border-2 rounded-3xl text-[#4E2CA3] py-1 px-4 font-semibold flex-grow w-full max-w-[200px]"
                      onClick={() =>
                        navigate({
                          pathname: "kegiatan",
                          search: createSearchParams({
                            query: content.path,
                          }).toString(),
                        })
                      }
                    >
                      Informasi lebih lanjut
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            <img
              src={sphere2}
              alt="fragment"
              className="hidden lg:block absolute top-[20%] -left-24"
              width={150}
              height={150}
            />

            <img
              src={sphere3}
              alt="fragment"
              className="hidden lg:block absolute bottom-1/3 -right-20"
              width={150}
              height={150}
            />

            <img
              src={cube}
              alt="fragment"
              className="hidden lg:block absolute bottom-1/4 -left-24"
              width={200}
              height={200}
            />
          </CardContent>
          <Blur className="w-[470px] h-[480px] -left-1/2 top-0 bg-[#FFDE59] bg-opacity-60" />
          <Blur className="w-[470px] h-[480px] -right-1/3 -top-[10%] bg-[#00BF63] bg-opacity-60" />
          <Blur className="w-[470px] h-[480px] -left-1/4 top-1/2 bg-[#00BF63] bg-opacity-70" />
          <Blur className="w-[470px] h-[480px] left-2/4 top-1/4 bg-[#004AADB2]" />
          <Blur className="w-[470px] h-[480px] left-2/3 bottom-1/4 bg-[#6CC8FCB2]" />
          <Blur className="w-[470px] h-[480px] right-3/4 -bottom-[15%] bg-[#CB6CE699]" />
        </Card>
      </Suspense>
    </section>
  );
}

export default CompetitionSection;
