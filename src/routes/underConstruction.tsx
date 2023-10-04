import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Blur from "@/components/ui/blur";
import "@dotlottie/player-component";
import { Suspense } from "react";

export default function UnderConstruction() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen -mt-[100px] px-10">
      <div className="w-fit m-auto h-full text-center flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl">Oops!</h1>
        <Suspense fallback={<>...</>}>
          <div className="max-w-[300px] w-full">
            <dotlottie-player
              loop
              autoplay
              src="http://localhost:3000/under-construction.lottie"
            />
          </div>
        </Suspense>
        <h2 className="text-2xl leading-tight md:text-3xl">
          This Page is Under Construction
        </h2>
        <p className="text-base md:text-xl text-system-grey-600">
          Thank you for being patient. can't wait to see you soon!
        </p>
        <Button
          size="lg"
          className="mt-10 bg-active-blue text-lg font-normal"
          onClick={() => navigate("/", { preventScrollReset: true })}
        >
          back to Beranda
        </Button>
      </div>
      <Blur className="bg-active-blue" />
      <Blur className="bg-[#00BF63] bottom-0 left-[20%]" />
      <Blur className="top-16 left-1/3 bg-[#6CC8FC]" />
      <Blur className="top-[60%] left-[80%] bg-[#FFDE59]" />
      <Blur className="top-0 right-0 bg-[#CB6CE6]" />
    </section>
  );
}
