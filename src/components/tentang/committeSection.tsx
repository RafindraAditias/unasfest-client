import { Grid, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "styles/timelineCarousel.css";

// anggota organisasi
import pm from "@/assets/committee/project_manager.png";
import bidang_semnas from "@/assets/committee/bidang_semnas.png";
import bidang_it from "@/assets/committee/bidang_it.png";
import deputy_pm from "@/assets/committee/deputy_project_manager.png";
import bidang_sponsorship from "@/assets/committee/bidang_sponsorship.png";
import bidang_debat from "@/assets/committee/bidang_debat.png";
import bidang_humas from "@/assets/committee/bidang_humas.png";
import bidang_keamanan from "@/assets/committee/bidang_keamanan.png";
import bidang_kesehatan from "@/assets/committee/bidang_kesehatan.png";
import bidang_kesekretariatan from "@/assets/committee/bidang_kesekretariatan.png";
import bidang_konsumsi from "@/assets/committee/bidang_konsumsi.png";
import bidang_kti from "@/assets/committee/bidang_kti.png";
import bidang_medpub from "@/assets/committee/bidang_medpub.png";
import bidang_sarpras from "@/assets/committee/bidang_sarpras.png";

// anggota organisasi
import rektor_unas from "@/assets/rector/rektor_unas.png";
import apm_unas from "@/assets/rector/apm_unas.png";
import sekre_rektorat from "@/assets/rector/sekre_rektorat.png";
import warek_administrasi from "@/assets/rector/warek_administrasi.png";
import warek_akademik from "@/assets/rector/warek_akademik.png";
import warek_penelitian from "@/assets/rector/warek_penlitian.png";

import Blur from "../ui/blur";

function CommitteSection() {
  return (
    <section className="relative w-full h-fit font-inter">
      <div className="max-w-screen-xl w-4/5 m-auto">
        <div className="text-[#000] leading-10 mb-24">
          <h1 className="text-3xl font-bold leading-7 lg:text-6xl lg:leading-10">
            STEERING COMMITTE
          </h1>
          <p className="text-xl font-semibold opacity-50 py-2 leading-7 lg:py-5 lg:text-4xl lg:leading-10">
            UNIVERSITAS NASIONAL Festival
          </p>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
              1920: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            freeMode={true}
            modules={[Autoplay, Pagination, Grid]}
            pagination={{
              clickable: true,
              type: "progressbar",
            }}
            className="w-full h-full mx-auto pb-10"
          >
            {rector.map(({ image, name, position }, index) => (
              <SwiperSlide key={index}>
                <div className="w-full max-h-[350px] flex justify-center overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    width={500}
                    className="w-[300px] h-[350px] object-cover"
                  />
                </div>
                <div className="text-black text-center leading-normal">
                  <h1 className="text-2xl md:text-3xl font-semibold pt-2">
                    {name}
                  </h1>
                  <p className="text-lg md:text-xl font-medium">{position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-[#000] leading-10 mb-24">
          <h1 className="text-3xl font-bold leading-7 md:text-4xl xl:text-6xl lg:leading-10">
            UNIVERSITAS NASIONAL FESTIVAL 2023
          </h1>
          <p className="text-xl font-semibold opacity-50 py-2 leading-7 lg:py-5 lg:text-4xl lg:leading-10">
            ANGGOTA ORGANISASI
          </p>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
              1920: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            freeMode={true}
            modules={[Autoplay, Pagination, Grid]}
            pagination={{
              clickable: true,
              type: "progressbar",
            }}
            className="w-full h-full mx-auto pb-10"
          >
            {committees.map(({ image, name, position }, index) => (
              <SwiperSlide key={index}>
                <div className="w-full max-h-[350px] flex justify-center overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    width={500}
                    className="w-[300px] h-[350px] object-cover"
                  />
                </div>
                <div className="text-black text-center leading-normal">
                  <h1 className="text-2xl md:text-3xl font-semibold pt-2">
                    {name}
                  </h1>
                  <p className="text-lg md:text-xl font-medium">{position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Blur className="w-[450px] h-[450px] bg-[#004AAD] top-0 left-1/3" />
      <Blur className="w-[450px] h-[450px] bg-[#00BF63] top-1/3 left-0" />
      <Blur className="w-[450px] h-[450px] bg-[#6CC8FC] bottom-0 right-1/4" />
    </section>
  );
}

const rector = [
  {
    image: rektor_unas,
    name: "Dr. El Amry Bermawi Putera, M.A.",
    position: "Rektor Unas",
  },
  {
    image: warek_akademik,
    name: "Prof. Dr. Suryono Efendi, S.E., M.B.A., M.M.",
    position:
      "Wakil Rektor Bidang Akademik, Kemahasiswaan dan Alumniroject Manager UNAS FEST 2023",
  },
  {
    image: warek_administrasi,
    name: "Prof. Dr. Drs. Eko Sugiyanto, M.Si.",
    position: "Wakil Rektor Bidang Administrasi Umum, Keuangan, dan SDM",
  },
  {
    image: warek_penelitian,
    name: "Prof. Dr. Ernawati Sinaga, M.S., Apt.",
    position:
      "Wakil Rektor Bidang Penelitian, Pengabdian Kepada Masyarakat dan Kerjasama",
  },
  {
    image: sekre_rektorat,
    name: "Yusuf Wibisono, S.I.P., M.Si.",
    position: "Sektretaris Rektorat",
  },
  {
    image: apm_unas,
    name: "Prof. Dr. Umar Basalim, DES.",
    position: "Asistem Project Manager UNAS FEST 2023",
  },
];

const committees = [
  {
    image: pm,
    name: "Shafa Sabrina",
    position: "Project Manager UNAS FEST 2023",
  },
  {
    image: deputy_pm,
    name: "Emma",
    position: "Deputy Project Manager UNAS FEST 2023",
    prodi: "Teknik Elektro",
  },
  {
    image: bidang_it,
    name: "Hansen C",
    position: "Asistem Project Manager UNAS FEST 2023",
    prodi: "Sistem Informasi",
  },
  {
    image: bidang_semnas,
    name: "Camelia",
    position: "Asistem Project Manager Bidang Seminas Nasional UNAS FEST 2023",
    prodi: "Sistem Informasi",
  },
  {
    image: bidang_sponsorship,
    name: "Adel",
    position:
      "Asistem Project Manager Bidang Sponsorship & Donatur UNAS FEST 2023",
    prodi: "Sistem Informasi",
  },
  {
    image: bidang_kesekretariatan,
    name: "Melly Erlinda",
    position: "Asistem Project Manager Bidang Kesekretariatan UNAS FEST 2023",
    prodi: "Sistem Informasi",
  },
  {
    image: bidang_humas,
    name: "Azkia Huzaima",
    position:
      "Asistem Project Manager Bidang Hubungan Masyarakat UNAS FEST 2023",
    prodi: "Hukum",
  },
  {
    image: bidang_medpub,
    name: "Dimas Adhitya Bastian",
    position: "Asistem Project Manager Bidang Media Publikasi UNAS FEST 2023",
    prodi: "Pariwisata",
  },
  {
    image: bidang_konsumsi,
    name: "Bilqis Alifia Adzani",
    position: "Asistem Project Manager Bidang Konsumsi UNAS FEST 2023",
    prodi: "Pariwisata",
  },
  {
    image: bidang_sarpras,
    name: "Risma Akhwat",
    position:
      "Asistem Project Manager Bidang Sarana & Prasarana UNAS FEST 2023",
    prodi: "Ilmu Komunikasi",
  },
  {
    image: bidang_kesehatan,
    name: "Devi Ramadhani",
    position: "Asistem Project Manager Bidang Kesehatan UNAS FEST 2023",
    prodi: "Keperawatan",
  },
  {
    image: bidang_keamanan,
    name: "M. Dani Sumarna",
    position: "Asistem Project Manager Bidang Keamanan UNAS FEST 2023",
    prodi: "Keperawatan",
  },
  {
    image: bidang_debat,
    name: "Taqiyya Hasya Tsabitha",
    position: "Assistant Project Manager Bidang Debat UNAS FEST 2023",
    prodi: "Kebidanan",
  },
  {
    image: bidang_kti,
    name: "Syifa Najla Widiyanti",
    position: "Asistem Project Manager Bidang LKTI UNAS FEST 2023",
    prodi: "Sosiologi",
  },
  {
    image: bidang_keamanan,
    name: "M. Dani Sumarna",
    position: "Asistem Project Manager Bidang Keamanan UNAS FEST 2023",
    prodi: "Keperawatan",
  },
];
export default CommitteSection;
