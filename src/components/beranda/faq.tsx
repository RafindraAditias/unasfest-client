import { faqData } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card, CardContent, CardTitle } from "../ui/card";

function Faq() {
  return (
    <section className="mt-20">
      <Card className="p-5 text-start">
        <CardTitle>Frequently Asked Questions</CardTitle>
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map(({ title, description }, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="lg:border-b-[#D7DEF0]"
              >
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>{description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}

export default Faq;
