import { faqData } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import Blur from "../ui/blur";

function Faq() {
  return (
    <section className="mt-20 mb-40 font-inter w-full max-w-screen-xl m-auto lg:w-4/5">
      <Card className="w-[90%] m-auto p-5 text-start py-16 px-12 lg:w-full">
        <CardTitle className="text-[32px] font-bold leading-9">
          Frequently Asked Questions
        </CardTitle>
        <Separator
          orientation="horizontal"
          className="mt-10 bg-active-blue lg:bg-[#D7DEF0] h-[2px]"
        />
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map(({ title, description }, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="lg:border-b-[#D7DEF0]"
              >
                <AccordionTrigger className="text-lg font-bold leading-5 text-start">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="text-base font-normal leading-5 text-text-secondary">
                  {description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
        <Blur className="w-[470px] h-[480px] -top-44 -left-20 bg-[#6CC8FC99]" />
        <Blur className="w-[470px] h-[480px] -bottom-40 -right-40 bg-[#00BF6399]" />
        <Blur className="w-[470px] h-[480px] -bottom-96 -left-44 bg-[#0570FF99]" />
      </Card>
    </section>
  );
}

export default Faq;
