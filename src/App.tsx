import { Suspense, lazy } from "react";
import useImagePreloader from "@/hooks/imagePreloader";

import carousel1 from "@/assets/content/carousel1.webp";
import carousel2 from "@/assets/content/carousel2.webp";
import carousel3 from "@/assets/content/carousel3.webp";
import fragment1 from "@/assets/fragments/fragment1.webp";
import fragment2 from "@/assets/fragments/fragment2.webp";
import fragment3 from "@/assets/fragments/fragment3.webp";
import fragment4 from "@/assets/fragments/fragment4.webp";
import fragment5 from "@/assets/fragments/fragment5.svg";
import sphere from "@/assets/fragments/sphere.svg";
import sphere2 from "@/assets/fragments/sphere2.svg";
import sphere3 from "@/assets/fragments/sphere3.svg";
import cube from "@/assets/fragments/cube.svg";
import noImage from "@/assets/icons/noimage.svg";

const Navbar = lazy(() => import("@/components/navbar"));
const Carousel = lazy(() => import("@/components/carousel"));

function App() {
  const carouselImages: Array<string> = [
    carousel1,
    carousel2,
    carousel3,
    carousel1,
  ];

  const { imagesPreloaded } = useImagePreloader([
    carousel1,
    carousel2,
    carousel3,
    carousel1,
    fragment1,
    fragment2,
    fragment3,
    fragment4,
  ]);

  if (!imagesPreloaded) return <div>loading...</div>;
  return (
    <div className="w-full h-full inline-block font-roboto">
      <Suspense fallback={<div>loading...</div>}>
        <Navbar />
        <main className="mt-36 max-w-[1200px] m-auto">
          <section id="beranda" className="flex m-auto items-center">
            <div className="basis-3/4 relative pl-24 pt-24 right-20 bottom-14">
              <img
                src={fragment1}
                alt="fragment"
                width={200}
                height={200}
                className="absolute left-0 top-0"
              />
              <div className="w-[250px] h-[250px] absolute bg-[#004AAD] rounded-full blur-[300px]"></div>
              <h3 className="text-[#004AAD] font-bold tracking-[1px] mb-3">
                UNIVERSITAS NASIONAL
              </h3>
              <h1 className="font-bold text-4xl mb-6">
                Bersama Pionir Perubahan Menuju Indonesia Maritim
              </h1>
              <p className="font-inter text-xl text-[#757575] capitalize font-normal">
                Lorem pisum dolor sit amet, consectetur adpisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrum exercitationem ullam corporis
                suscpit
              </p>
            </div>

            <div className="w-[250px] h-[250px] absolute left-1/2 top-1/4 bg-[#6CC8FC] rounded-full blur-[200px]"></div>
            <div className="relative w-[470px] h-[450px] basis-1/4 p-5">
              <img
                src={fragment2}
                alt="fragment"
                width={150}
                height={150}
                className="absolute left-0 top-0"
              />
              <img
                src={fragment3}
                alt="fragment"
                width={150}
                height={150}
                className="absolute right-5 bottom-0"
              />
              <div className="w-[250px] h-[250px] absolute right-5 bottom-0 bg-[#FFDE59] rounded-full blur-[300px]"></div>
              <img
                src={fragment4}
                alt="fragment"
                width={180}
                height={180}
                className="absolute -bottom-20 left-10"
              />
              <Carousel images={carouselImages} />
            </div>
          </section>
          <div className="w-[250px] h-[250px] absolute right-2/3 bottom-0 bg-[#00BF63] rounded-full blur-[350px]"></div>

          {/* TODO */}
          <div
            id="galeri"
            className="w-full h-64 mt-64 border bg-slate-300 rounded-3xl m-auto relative"
          ></div>

          <section id="lomba" className="relative w-full h-full mt-36">
            <div className="relative w-full h-full z-10 bg-white rounded-3xl text-center py-24 px-52 mb-36">
              <img
                src={sphere}
                alt="sphere"
                className="absolute -top-16 -left-16"
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

              <img
                src={sphere2}
                alt="fragment"
                className="absolute top-1/3 -left-32"
                width={220}
                height={220}
              />

              <img
                src={sphere3}
                alt="fragment"
                className="absolute bottom-5 -right-32"
                width={220}
                height={220}
              />

              <img
                src={cube}
                alt="fragment"
                className="absolute -bottom-16 left-0"
                width={220}
                height={220}
              />
              <h1 className="text-5xl font-semibold tracking-normal capitalize mb-4">
                Lomba Unas Fest
              </h1>
              <p className="mb-32">Neque, pulvinar vestibulum non aliquam.</p>
              <div className="flex gap-16 items-center mb-20">
                <div className="basis-1/2 h-[500px] grid place-items-center bg-[#F1F1F1]">
                  <img src={noImage} alt="no image" width={92} height={92} />
                </div>
                <div className="basis-1/2">
                  <h1 className="text-3xl leading-tight font-semibold tracking-normal capitalize text-left mb-8">
                    Purus id tellus arcu habitant proina magna. Integer purus
                  </h1>
                  <p className="text-base text-left mb-8">
                    Facilisi viverra dictum augue eu lobortis elit. In et donec
                    habitasseFacilisi viverra dictum augue eu lobortis elit. In
                    et donec habitasseFacilisi viverra dictum augue eu lobortis
                    elit. In et donec habitasseFacilisi viverra dictum augue eu
                    lobortis elit. In et donec habitasseFacilisi viverra dictum
                    augue eu lobortis elit. In et donec habitasseFacilisi
                    viverra dictum augue eu lobortis elit. In et donec habitasse
                  </p>
                  <div className="flex gap-2">
                    <button className="bg-[#004AAD] rounded-3xl text-white py-1 px-4 font-semibold">
                      Daftar Sekarang
                    </button>
                    <button className="border-[#004AAD] border-2 rounded-3xl text-[#4E2CA3] py-1 px-4 font-semibold">
                      Informasi lebih lanjut{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-16 items-center mb-20">
                <div className="basis-1/2 h-[500px] grid place-items-center bg-[#F1F1F1]">
                  <img src={noImage} alt="no image" width={92} height={92} />
                </div>
                <div className="basis-1/2">
                  <h1 className="text-3xl leading-tight font-semibold tracking-normal capitalize text-left mb-8">
                    Purus id tellus arcu habitant proina magna. Integer purus
                  </h1>
                  <p className="text-base text-left mb-8">
                    Facilisi viverra dictum augue eu lobortis elit. In et donec
                    habitasseFacilisi viverra dictum augue eu lobortis elit. In
                    et donec habitasseFacilisi viverra dictum augue eu lobortis
                    elit. In et donec habitasseFacilisi viverra dictum augue eu
                    lobortis elit. In et donec habitasseFacilisi viverra dictum
                    augue eu lobortis elit. In et donec habitasseFacilisi
                    viverra dictum augue eu lobortis elit. In et donec habitasse
                  </p>
                  <div className="flex gap-2">
                    <button className="bg-[#004AAD] rounded-3xl text-white py-1 px-4 font-semibold">
                      Daftar Sekarang
                    </button>
                    <button className="border-[#004AAD] border-2 rounded-3xl text-[#4E2CA3] py-1 px-4 font-semibold">
                      Informasi lebih lanjut{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-16 items-center mb-20">
                <div className="basis-1/2 h-[500px] grid place-items-center bg-[#F1F1F1]">
                  <img src={noImage} alt="no image" width={92} height={92} />
                </div>
                <div className="basis-1/2">
                  <h1 className="text-3xl leading-tight font-semibold tracking-normal capitalize text-left mb-8">
                    Purus id tellus arcu habitant proina magna. Integer purus
                  </h1>
                  <p className="text-base text-left mb-8">
                    Facilisi viverra dictum augue eu lobortis elit. In et donec
                    habitasseFacilisi viverra dictum augue eu lobortis elit. In
                    et donec habitasseFacilisi viverra dictum augue eu lobortis
                    elit. In et donec habitasseFacilisi viverra dictum augue eu
                    lobortis elit. In et donec habitasseFacilisi viverra dictum
                    augue eu lobortis elit. In et donec habitasseFacilisi
                    viverra dictum augue eu lobortis elit. In et donec habitasse
                  </p>
                  <div className="flex gap-2">
                    <button className="bg-[#004AAD] rounded-3xl text-white py-1 px-4 font-semibold">
                      Daftar Sekarang
                    </button>
                    <button className="border-[#004AAD] border-2 rounded-3xl text-[#4E2CA3] py-1 px-4 font-semibold">
                      Informasi lebih lanjut{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[450px] h-[450px] absolute -right-[50px] -top-[50px] bg-[#00BF63] rounded-full blur-[350px]"></div>
            <div className="w-[450px] h-[450px] absolute -left-[50px] top-20 bg-[#FFDE59] rounded-full blur-[350px]"></div>
            <div className="w-[450px] h-[450px] absolute -left-[50px] bottom-20 bg-[#00BF63] rounded-full blur-[350px]"></div>
            <div className="w-[450px] h-[450px] absolute -right-[50px] bottom-1/3 bg-[#6CC8FC] rounded-full blur-[350px]"></div>
          </section>
        </main>
      </Suspense>
    </div>
  );
}

export default App;
