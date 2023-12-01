import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import whatsappIcon from "@/assets/icons/whatsapp.svg";
import contactImage from "@/assets/icons/come_to_join.webp";
import Blur from "./ui/blur";

function ContactCard() {
  const navigate = useNavigate();
  return (
    <section className="relative my-20 lg:my-40 w-full max-w-screen-xl lg:w-[90%] m-auto lg:mt-40">
      <Card className="custom-card w-[90%] m-auto overflow-hidden text-start py-16 lg:w-full lg:rounded-t-[30px] lg:rounded-b-none">
        <CardTitle className="w-full lg:w-9/12 text-xl mb-3 font-semibold !leading-tight tracking-wide md:text-2xl lg:text-5xl px-6 lg:px-28">
          Apakah Kami Dapat Membantu?
          <div className="absolute bottom-1/2 right-20 translate-y-1/2 z-10 hidden lg:inline-block">
            <img
              src={contactImage}
              alt="maskot unasfest"
              width={344}
              height={344}
              className="max-w-[300px] w-full"
            />
          </div>
        </CardTitle>
        <CardDescription className="relative z-10 w-full text-white font-inter text-base leading-normal tracking-wide font-normal mb-5 px-6 lg:px-28 lg:mb-20 md:text-lg lg:text-2xl lg:w-8/12">
          Ada masalah? Yuk hubungi contact person kami!
        </CardDescription>
        <CardContent className="relative flex justify-start gap-8 p-0 px-6 lg:px-28">
          <Button
            onClick={() => navigate("/kegiatan", { preventScrollReset: true })}
            size="icon"
            className="w-44 h-10 bg-[#00BF63] flex justify-center items-center gap-2 z-10 text-xs font-bold lg:text-base"
          >
            <img src={whatsappIcon} alt="whatsapp" width={20} height={20} />
            Contact 1
          </Button>

          <Button
            onClick={() => navigate("/kegiatan", { preventScrollReset: true })}
            size="icon"
            className="w-44 h-10 bg-[#00BF63] flex justify-center items-center gap-2 z-10 text-xs font-bold lg:text-base"
          >
            <img src={whatsappIcon} alt="whatsapp" width={20} />
            Contact 2
          </Button>

          <div className="absolute -left-0 -bottom-16 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1440"
              height="154"
              viewBox="0 0 1442 154"
              fill="none"
            >
              <path
                d="M702 85.0001C426.589 97.2809 0.5 6.00015 0.5 6.00015V153.5H1441.5V77.0001C1441.5 77.0001 1298.57 19.8363 1202 6.00015C1006.31 -22.0376 899.488 76.194 702 85.0001Z"
                fill="#0D99FF"
                fill-opacity="0.4"
              />
            </svg>
          </div>
          <div className="absolute -left-0 -bottom-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1440"
              height="128"
              viewBox="0 0 1440 128"
              fill="none"
            >
              <path
                d="M522.678 0.851428C317.684 -7.10841 0 43.3631 0 43.3631V128H10.5439H1440V0.851428C1440 0.851428 1119.78 58.3878 912.301 51.479C758.135 46.3454 676.792 6.83562 522.678 0.851428Z"
                fill="#0D99FF"
                fill-opacity="0.4"
              />
            </svg>
          </div>
        </CardContent>
      </Card>
      <Blur className="w-[470px] h-[480px] top-80 -right-10 bg-[#6CC8FC]" />
    </section>
  );
}

export default ContactCard;
