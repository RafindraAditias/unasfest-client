import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Blur from "@/components/ui/blur";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen -mt-[100px] px-10">
      <div className="relative w-fit m-auto h-full text-center flex flex-col gap-2 justify-center items-center">
        <h1 className="text-3xl md:text-5xl">Page Not Found</h1>
        <p className="text-base md:text-xl text-system-grey-600">
          The Page You're Looking For Was Not Found
        </p>
        <Button
          size="lg"
          className="mt-10 bg-active-blue text-lg font-normal"
          onClick={() =>
            navigate("/", { replace: true, preventScrollReset: true })
          }
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
