import { Card, CardContent, CardTitle } from "@/components/ui/card";
import BenefitCarousel from "./benefitCarousel";
import { Suspense } from "react";
import Loading from "../loading";

function BenefitSection() {
  return (
    <section className="mt-20 font-inter">
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
    </section>
  );
}

export default BenefitSection;
