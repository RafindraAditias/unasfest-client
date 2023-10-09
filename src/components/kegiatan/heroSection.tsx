import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";

function HeroSection() {
  return (
    <section className="w-[90%] max-w-screen-xl m-auto mt-10">
      <div>
        <div>
          <Button
            variant="outline"
            className="gap-2 pl-2 border-2 border-black rounded-[30px] text-xs font-semibold leading-normal text-[#2F2F30]"
          >
            <ChevronLeft />
            kembali
          </Button>
          <p className="py-4 text-xs font-normal leading-normal text-[#00000066]">
            Lomba / Debat / Debat Nasional
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
