import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { DownloadIcon } from "lucide-react";
import Blur from "../ui/blur";

interface IGuidebook {
  guidebook?: string;
}

function GuideBook({ guidebook }: IGuidebook) {
  return (
    <section className="mt-20">
      <Card className="w-[90%] max-w-screen-xl m-auto text-center py-9 flex flex-col justify-center items-center lg:py-24">
        <CardTitle className="lg:text-5xl lg:font-semibold lg:tracking-wide lg:leading-normal font-roboto">
          Buku Pedoman
        </CardTitle>
        <CardContent>
          <p className="p-6 lg:text-2xl font-normal lg:leading-10 text-[#00000099] font-inter text-pretty lg:pb-20 lg:pt-8">
            Download buku pedoman lomba untuk mengetahui mekanisme keseluruhan
            perlombaan debat Universitas Nasional Festival
          </p>
          <Button
            onClick={() => window.open(guidebook, "_blank")}
            className="gap-3 rounded-[30px] bg-active-blue p-8 mx-10"
          >
            <DownloadIcon size={30} />
            <p className="text-[16px] text-[#FFF] font-semibold leading-normal">
              Download disini
            </p>
          </Button>
        </CardContent>
        <Blur className="w-[470px] h-[480px] top-10 -left-56 bg-[#00BF63]" />
      </Card>
    </section>
  );
}

export default GuideBook;
