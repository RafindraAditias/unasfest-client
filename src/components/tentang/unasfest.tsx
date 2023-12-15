import logo from "@/assets/logo/graphic-logo-unasfest.webp";
import mascot from "@/assets/icons/maskot.webp";
import shapes from "@/assets/random/shape.png";

function Unasfest() {
  return (
    <section className="w-full h-fit font-inter">
      <div className="max-w-screen-xl w-4/5 m-auto text-[#000]">
        <div className="mb-14">
          <h1 className="text-2xl font-bold leading-normal py-2">
            Universitas <span className="text-active-blue">Nasional</span>{" "}
            Festival 2023
          </h1>
          <h2 className="text-lg font-semibold py-4">Deskripsi</h2>
          <p className="opacity-80 text-base leading-5">
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
        <div className="relative">
          <div>
            <h1 className="text-lg font-semibold py-4">Logo</h1>
            <div className="lg:flex lg:flex-row-reverse">
              <div className="after:content-[''] after:absolute after:w-full after:h-full after:border-r">
                <img src={logo} alt="logo unasfest" className="mb-9" />
              </div>
              <p className="opacity-80 text-base leading-5">
                Buah dan daun Sawo Manila sebagai representasi lokasi
                diadakannya UNAS FEST. Sawo manila juga merupakan pohon 1000
                manfaat, dimana setiap bagian dari pohon dapat dimanfaatkan. Hal
                ini menggambarkan bahwa kepanitiaan UNAS FEST terdiri dari
                mahasiswa yang berasal dari seluruh program studi di Universitas
                Nasional. Peletakan 3 daun dan 1 buah sawo manila membentuk
                formasi bintang ditengah, menggambarkan harapan yang tinggi dan
                bersinar.
              </p>
            </div>
          </div>
          <div className="flex items-start mt-6">
            <img src={shapes} alt="shapes" />
            <div className="text-base">
              <p>
                <span className="font-bold">Persegi: </span>proporsi,
                keseimbangan dan profesionalisme.
              </p>
              <p>
                <span className="font-bold">Lingkaran: </span>konsentrasi atau
                fokus yang tinggi.
              </p>
              <p>
                <span className="font-bold">Segitiga: </span>kreatifitas,
                kekuatan, dan pergerakan yang dinamis.
              </p>
              <p>
                <span className="font-bold">Bintang: </span>cahaya dan cita cita
                yang tinggi.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h1 className="text-lg font-semibold py-4">Logo</h1>
            <img src={mascot} alt="maskot unas" />
            <p className="opacity-80 text-base leading-5">
              Megalodon memiliki filosofi sebagai predator terbesar, gigi
              megalodon sebagai fosil yang banyak ditemukan dapat menggambarkan
              panitia UnasFest sebagai penanggung jawab yang terdiri dari 208
              Anggota (Banyak), Gigi besar megalodon juga menggambarkan tanggung
              jawab yang besar dan mental kuat panitia Unas Fest 2023l.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Unasfest;
