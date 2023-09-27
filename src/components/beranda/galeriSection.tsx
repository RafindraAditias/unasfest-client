import galeriImage from "@/assets/content/asset.webp";

function GaleriSection() {
  return (
    <section id="galeri" className="w-full h-fit mt-48 m-auto">
      <div className="flex w-full h-64 justify-center">
        <img
          src={galeriImage}
          alt="image"
          width={1446}
          height={392}
          loading="lazy"
          className="w-full object-cover lg:rounded-3xl"
        />
      </div>
    </section>
  );
}

export default GaleriSection;
