import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import TimelineCarousel from "./timelineCarousel";
import Blur from "../ui/blur";

function TimelineSection() {
  return (
    <section className="relative mt-20  w-full max-w-screen-xl m-auto lg:w-4/5">
      <Card className="pt-12 pb-2 text-center overflow-hidden rounded-none border-y border-y-active-blue lg:rounded-[50px] lg:border-none">
        <CardTitle className="text-4xl tracking-wide font-semibold leading-normal lg:text-5xl">
          Timeline Lomba
        </CardTitle>
        <CardDescription className="text-sm tracking-wide font-normal leading-normal mb-16 lg:text-xl">
          Perhatikan Waktu Dan Tanggal Perlombaan
        </CardDescription>
        <CardContent className="w-full h-full pr-0 overflow-hidden">
          <div className="timeline-swiper h-44 pl-14">
            <TimelineCarousel />
          </div>
        </CardContent>
        <CardFooter className="hidden lg:bg-[#004AAD] lg:h-2 lg:p-0 lg:w-3/5 lg:m-auto"></CardFooter>
      </Card>
      <Blur className="w-[470px] h-[480px] top-0 left-40 bg-[#FFDE59B2]" />
    </section>
  );
}

export default TimelineSection;
