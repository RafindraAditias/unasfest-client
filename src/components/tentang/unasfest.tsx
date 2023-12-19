import logo from "@/assets/logo/graphic-logo-unasfest.webp";
import mascot from "@/assets/icons/maskot.png";
import shapes from "@/assets/random/shape.png";
import Blur from "../ui/blur";

function Unasfest() {
  return (
    <section className="relative w-full h-fit font-inter mb-32">
      <div className="max-w-screen-xl w-4/5 m-auto text-[#000]">
        <div className="mb-14">
          <h1 className="text-2xl font-bold leading-normal py-2 md:text-4xl lg:text-6xl">
            Universitas <span className="text-active-blue">Nasional</span>{" "}
            Festival 2023
          </h1>
          <h2 className="text-lg font-semibold py-4 md:text-2xl lg:text-4xl">
            Deskripsi
          </h2>
          <p className="opacity-80 text-base leading-5 md:text-xl lg:text-2xl">
            Kegiatan ini menjadi ajang kompetisi terbuka untuk umum di tingkat
            Mahasiswa. Tujuan diadakan UNAS FEST 2023 yaitu untuk mengembangkan
            pemikiran kritis mahasiswa/i Indonesia dalam menanggapi permasalahan
            laut di Indonesia, meningkatkan rasa bangga dan cinta tanah air,
            serta menguatkan semangat jiwa ilmiah dan kompetitif kepada
            mahasiswa/i Indonesia. Terdapat 4 kegiatan yang akan diadakan yang
            terdiri dari Seminar Nasional Mahasiswa dan 3 cabang lomba kegiatan
            ini yaitu Lomba Karya Tulis Ilmiah (LKTI), English Debate
            Competition (EDC), dan Kompetisi Debat Bahasa Indonesia (KDBI)
            Tingkat Nasional.
          </p>
        </div>
        <div className="flex flex-col justify-between mt-28">
          <h1 className="text-lg font-semibold py-4 md:text-2xl lg:text-4xl">
            Logo
          </h1>
          <div className="flex flex-col items-center lg:flex-row-reverse">
            <img
              src={logo}
              alt="logo unasfest"
              width={330}
              height={330}
              className="mb-9 lg:mb-0"
            />
            <div>
              <p className="opacity-80 text-base leading-5 md:text-xl lg:text-2xl">
                Buah dan daun Sawo Manila sebagai representasi lokasi
                diadakannya UNAS FEST. Sawo manila juga merupakan pohon 1000
                manfaat, dimana setiap bagian dari pohon dapat dimanfaatkan. Hal
                ini menggambarkan bahwa kepanitiaan UNAS FEST terdiri dari
                mahasiswa yang berasal dari seluruh program studi di Universitas
                Nasional. Peletakan 3 daun dan 1 buah sawo manila membentuk
                formasi bintang ditengah, menggambarkan harapan yang tinggi dan
                bersinar.
              </p>
              <div className="flex items-start mt-6 gap-5">
                <img src={shapes} alt="shapes" />
                <div className="text-base md:text-xl lg:text-2xl">
                  <p>
                    <span className="font-bold">Persegi: </span>proporsi,
                    keseimbangan dan profesionalisme.
                  </p>
                  <p>
                    <span className="font-bold">Lingkaran: </span>konsentrasi
                    atau fokus yang tinggi.
                  </p>
                  <p>
                    <span className="font-bold">Segitiga: </span>kreatifitas,
                    kekuatan, dan pergerakan yang dinamis.
                  </p>
                  <p>
                    <span className="font-bold">Bintang: </span>cahaya dan cita
                    cita yang tinggi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-28">
            <h1 className="text-lg font-semibold py-4 md:text-2xl lg:text-4xl">
              Maskot
            </h1>
            <div className="flex flex-col items-center lg:flex-row-reverse lg:items-start">
              <img src={mascot} alt="maskot unas" width={330} height={330} />
              <p className="opacity-80 text-base leading-5 md:text-xl lg:text-2xl">
                Megalodon memiliki filosofi sebagai predator terbesar, gigi
                megalodon sebagai fosil yang banyak ditemukan dapat
                menggambarkan panitia UnasFest sebagai penanggung jawab yang
                terdiri dari 208 Anggota (Banyak), Gigi besar megalodon juga
                menggambarkan tanggung jawab yang besar dan mental kuat panitia
                Unas Fest 2023l.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Blur className="w-[450px] h-[450px] bg-[#FFDE59] top-0 left-36" />
      <Blur className="w-[450px] h-[450px] bg-[#CB6CE6] bottom-1/4 right-36" />
    </section>
  );
}

export default Unasfest;
