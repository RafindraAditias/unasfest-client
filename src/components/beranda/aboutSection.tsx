import juaraLomba from "@/assets/gallery/juara_lomba.webp";
import fragment2 from "@/assets/random/fragment2.webp";
import fragment3 from "@/assets/random/fragment3.webp";
import fragment4 from "@/assets/random/fragment4.webp";
import { Button } from "../ui/button";
import Blur from "../ui/blur";
import { Suspense } from "react";
import Loading from "../loading";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section
      id="beranda"
      className="w-full max-w-screen-xl m-auto mt-10 lg:mt-32 xl:mt-48 lg:w-4/5"
    >
      <Suspense fallback={<Loading />}>
        <div className="relative w-4/5 max-w-screen-xl m-auto flex flex-col items-center gap-16 lg:w-full lg:flex-row lg:items-start lg:gap-10">
          <div className="w-full basis-4/6">
            <motion.h2
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
                type: "tween",
                ease: "easeOut",
                bounce: 0.3,
              }}
              className="text-2xl leading-normal font-bold text-active-blue mb-3"
            >
              Universitas Nasional
            </motion.h2>
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "tween", ease: "easeOut", delay: 0.2 }}
              className="text-[32px] font-bold leading-[35px] text-black mb-5 lg:text-5xl lg:leading-[70px]"
            >
              Bersama Pionir Perubahan Menuju Indonesia Maritim
            </motion.h1>
            <motion.p
              initial={{ y: 500, opacity: 0.2 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.4,
                bounce: 0.3,
              }}
              className="font-inter text-base font-normal leading-5 text-system-grey-600 mix-blend-difference lg:text-2xl lg:leading-[40px]"
            >
              Universitas Nasional Festival 2023 (UNAS FEST 2023) merupakan
              salah satu kegiatan tahunan yang diadakan untuk memeriahkan serta
              merayakan Dies Natalis Universitas Nasional ke-74 Tahun.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Button className="hidden lg:flex mt-36 w-72 bg-active-blue rounded-[40px] py-8 text-2xl px-0">
                <Link
                  to="kegiatan"
                  smooth={false}
                  offset={-100}
                  className="w-full py-5"
                >
                  Daftar Perlombaan
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="relative w-2/3 max-w-[480px] basis-2/6 lg:w-full">
            <div className="w-full lg:w-[480px] h-fit aspect-[163/112] overflow-hidden rounded-xl">
              <div className="absolute w-full -z-50 h-full border-dashed border-[4px] border-[#E79FE1] top-3 right-3"></div>
              <motion.img
                initial={{ scale: 0.7, opacity: 0.3 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                src={juaraLomba}
                alt="about"
                width={250}
                height={170}
                className="w-full object-cover scale-125"
              />
            </div>

            <motion.img
              initial={{ scale: 0.2 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
              src={fragment2}
              alt="fragment"
              width={180}
              height={180}
              className="w-1/2 max-w-[192px] absolute -z-10 -top-1/3 lg:w-48 lg:-top-24"
            />
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150, delay: 0.3 }}
              src={fragment3}
              alt="fragment"
              width={200}
              height={340}
              className="w-1/2 absolute -z-10 top-16 right-0"
            />

            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150, delay: 0.4 }}
              src={fragment4}
              alt="fragment"
              width={230}
              height={230}
              className="w-1/2 absolute -z-10 -left-12"
            />
          </div>

          <Blur className="bg-active-blue" />
          <Blur className="bg-[#00BF63] bottom-0 left-[20%]" />
          <Blur className="top-16 left-1/3 bg-[#6CC8FC]" />
          <Blur className="top-[60%] left-[80%] bg-[#FFDE59]" />
          <Blur className="top-0 right-0 bg-[#CB6CE6]" />
        </div>
      </Suspense>
    </section>
  );
}

export default AboutSection;
