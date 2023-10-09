import { Card, CardContent, CardTitle } from "@/components/ui/card";
import BenefitCarousel from "./benefitCarousel";
import { Suspense } from "react";
import Loading from "../loading";
import Blur from "../ui/blur";

function BenefitSection() {
  return (
    <section className="relative mt-20 font-inter w-full max-w-screen-xl m-auto lg:w-4/5">
      <Card className="w-[90%] p-5 m-auto border border-active-blue overflow-hidden lg:p-16 lg:w-full lg:border-none">
        <CardTitle className="text-[28px] text-center font-semibold mb-12 tracking-wide leading-normal text-pretty px-5 lg:text-5xl lg:mb-14">
          Benefit dari Kompetisi UnasFest 2023
        </CardTitle>
        <Suspense fallback={<Loading />}>
          <CardContent className="benefit-carousel w-full lg:w-3/4 flex mx-auto flex-wrap content-center justify-center p-0">
            <BenefitCarousel />
          </CardContent>
        </Suspense>
      </Card>
      <Blur className="w-[470px] h-[480px] top-0 -right-44 bg-[#CB6CE6B2]" />
    </section>
  );
}

export default BenefitSection;
