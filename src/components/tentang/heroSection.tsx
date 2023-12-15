import image1 from "@/assets/gallery/frontview_lomba.webp";

function HeroSection() {
  return (
    <section className="w-full h-fit">
      <div className="mt-16">
        <div className="flex flex-col w-4/5 max-w-screen-xl m-auto">
          <div>
            <h1>Universitas Nasional</h1>
            <h1 className="bg-active-blue text-white w-fit px-10 relative -left-10">
              Festival
            </h1>
          </div>

          <div className="block lg:flex">
            <p className="basis-5/6 text-2xl font-inter my-5">
              Kegiatan tahunan yang diadakan untuk memeriahkan serta merayakan
              Dies Natalis Universitas Nasional ke-74 Tahun. UNAS FEST Tahun
              2023 mengusung tema{" "}
              <span className="italic font-semibold">
                "Implementasi Teknologi Dalam Kebijakan Ekonomi Biru untuk
                Mengoptimalkan Inovasi Maritim yang Berkelanjutan di Indonesia".
              </span>
            </p>
            <div className="static lg:relative -top-28 -right-[15%]">
              <img
                src={image1}
                alt="image"
                width={664}
                height={360}
                className="w-full aspect-video object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="w-4/5 m-auto max-w-screen-xl static grid grid-cols-4 lg:relative lg:w-full lg:max-w-none -top-28 lg:grid-cols-5 gap-5 mt-5">
          <div className="col-span-2 flex flex-col gap-5 lg:col-span-1">
            <img
              src={image1}
              alt="image"
              width={381}
              height={152}
              className="w-full object-cover aspect-video"
            />
            <img
              src={image1}
              alt="image"
              width={381}
              height={152}
              className="w-full object-cover aspect-video"
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <img
              src={image1}
              alt="image"
              width={360}
              height={387}
              className="w-full h-full object-cover aspect-video"
            />
          </div>
          <div className="col-span-2 self-start lg:self-end lg:col-span-1">
            <img
              src={image1}
              alt="image"
              width={329}
              height={315}
              className="w-full object-cover aspect-square"
            />
          </div>
          <div className="col-span-2 lg:col-span-2">
            <img
              src={image1}
              alt="image"
              width={767}
              height={287}
              className="w-full h-full object-cover aspect-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
