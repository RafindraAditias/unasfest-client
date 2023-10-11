import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import TimelineCarousel, { timelineCarouselProps } from "./timelineCarousel";
import React from "react";

interface Props extends timelineCarouselProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

function TimelineCard({ title, description, timelines, children }: Props) {
  return (
    <section className="relative mt-20 w-full max-w-screen-xl m-auto lg:w-4/5">
      <Card className="pt-12 pb-2 text-center overflow-hidden rounded-none lg:rounded-[50px] lg:border-none">
        <CardTitle className="text-4xl tracking-wide font-semibold leading-normal lg:text-5xl">
          {title}
        </CardTitle>
        <CardDescription className="text-sm tracking-wide font-normal leading-normal mb-16 lg:text-xl">
          {description}
        </CardDescription>
        <CardContent className="w-full h-full pr-0 overflow-hidden">
          <div className="timeline-swiper h-52 pl-14">
            <TimelineCarousel timelines={timelines} />
          </div>
        </CardContent>
        <CardFooter className="hidden lg:bg-[#004AAD] lg:h-2 lg:p-0 lg:w-3/5 lg:m-auto"></CardFooter>
      </Card>
      {children}
    </section>
  );
}

export default TimelineCard;
