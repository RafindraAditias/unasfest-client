import galeriImage from "@/assets/content/asset.webp";
import { Suspense } from "react";
import Loading from "../loading";

function GaleriSection() {
  return (
    <section id="galeri" className="w-full h-fit mt-48 m-auto">
      <Suspense fallback={<Loading />}>
        <div className="flex w-full h-64 justify-center">
          <img
            src={galeriImage}
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
