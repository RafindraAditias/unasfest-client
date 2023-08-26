import { Suspense, lazy } from "react";
import useImagePreloader from "@/hooks/imagePreloader";

import carousel1 from "@/assets/content/carousel1.webp";
import carousel2 from "@/assets/content/carousel2.webp";
import carousel3 from "@/assets/content/carousel3.webp";
import fragment1 from "@/assets/fragments/fragment1.webp";
import fragment2 from "@/assets/fragments/fragment2.webp";
import fragment3 from "@/assets/fragments/fragment3.webp";
import fragment4 from "@/assets/fragments/fragment4.webp";

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
        <main className="w-screen h-full mt-36">
          <article className="flex m-auto w-3/4 max-w-[1440px] items-center">
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
          </article>
          <div className="w-[250px] h-[250px] absolute right-2/3 bottom-0 bg-[#00BF63] rounded-full blur-[350px]"></div>
        </main>
      </Suspense>
    </div>
  );
}

export default App;
