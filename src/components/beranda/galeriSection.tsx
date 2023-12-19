import juriLomba from "@/assets/gallery/edc_cover.webp";
import { Suspense } from "react";
import Loading from "../loading";

function GaleriSection() {
  return (
    <section
      id="galeri"
      className="w-full max-w-screen-xl mt-48 m-auto lg:w-4/5"
    >
      <Suspense fallback={<Loading />}>
        <div className="flex w-full h-64 justify-center">
          <img
            src={juriLomba}
            alt="image"
            width={1446}
            height={392}
            loading="eager"
            className="w-full object-cover lg:rounded-3xl"
          />
        </div>
      </Suspense>
    </section>
  );
}

export default GaleriSection;
