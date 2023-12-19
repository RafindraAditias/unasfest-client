// edc judges
import maftuchah from "@/assets/judges/edc/maftuchah.jpg";
import jubaidah from "@/assets/judges/edc/jubaidah.jpg";
import septian from "@/assets/judges/edc/septian.jpg";

// kdbi judges
import purwo from "@/assets/judges/kdbi/purwo.jpg";
import nofia from "@/assets/judges/kdbi/nofia.jpg";
import yogi from "@/assets/judges/kdbi/yogi.jpg";

// lkti judges
import sri from "@/assets/judges/lkti/sri.png";
import efriza from "@/assets/judges/lkti/efriza.png";
import farhan from "@/assets/judges/lkti/farhan.png";

// semnas judges
import balqis from "@/assets/judges/semnas/balqis.png";
import hendra from "@/assets/judges/semnas/hendra.png";
import mary from "@/assets/judges/semnas/mary.png";
import sugeng from "@/assets/judges/semnas/sugeng.png";
import tatang from "@/assets/judges/semnas/tatang.png";
import agnes from "@/assets/judges/semnas/agnes.png";

import kdbiLogo from "@/assets/logo/logo-kdbi.webp";
import edcLogo from "@/assets/logo/logo-edc.webp";
import lktiLogo from "@/assets/logo/logo-lkti.webp";
import semnasLogo from "@/assets/logo/logo-semnas.webp";
import { kdbiTimelineData } from "./timeline/kdbiTimeline";
import { lktiTimelineData } from "./timeline/lktiTimeline";
import { semnasTimelineData } from "./timeline/semnasTimeline";

// cover images
import kdbiCover from "@/assets/gallery/kdbi_cover.webp";
import edcCover from "@/assets/gallery/edc_cover.webp";
import lktiCover from "@/assets/gallery/lkti_cover.webp";
import semnasCover from "@/assets/gallery/semnas_cover.webp";

export const kegiatanData = [
  {
    path: "KDBI",
    guidebook:
      "https://drive.google.com/file/d/1Wj6n8Udmk8bfX6WkAro8HncKez7ezqSL/view?usp=sharing",
    logo: kdbiLogo,
    coverImage: kdbiCover,
    title: "Kompetisi Debat Bahasa Indonesia",
    description:
      "Kegiatan Kompetisi Debat Bahasa Indonesia (KDBI) merupakan kompetisi debat berbahasa Indonesia dimana peserta beradu argumen dan pemikiran terkait isu-isu kontemporer dari berbagai aspek yakni sosial, politik, budaya, teknologi, ekonomi, energi, hukum, kesehatan dan lain sebagainya. Oleh karena itu, Kompetisi Debat Bahasa Indonesia (KDBI) bertujuan untuk meningkatkan kemampuan peserta dalam berbicara di depan umum, mengembangkan kemampuan analisis dan berpikir kritis, serta memperkuat keterampilan berargumentasi dengan menggunakan bahasa yang efektif dan persuasif. Kompetisi Debat Bahasa Indonesia (KDBI) akan bertemakan tentang “Implementasi Teknologi dalam Kebijakan Ekonomi Biru untuk...",
    termsAndConditions: [
      "Mahasiswa yang mendaftarkan diri pada link pendaftaran yang sudah tertera di website UNAS FEST 2023.",
      "Mahasiswa aktif program Sarjana dan Diploma yang terdaftar di PD-DIKTI (Pangkalan Data Pendidikan Tinggi) dari berbagai program studi dan perguruan tinggi negeri maupun swasta.",
      "Peserta debat adalah mahasiswa yang belum pernah memiliki gelar Sarjana (S1) / Sarjana Terapan (D4).",
      "Mahasiswa mengikuti peraturan yang telah ditentukan dan tercantum pada buku pedoman kegiatan KDBI Unas Fest 2023.",
      "Peserta kegiatan merupakan 1 Tim yang terdiri 2 orang mahasiswa dari perguruan yang sama serta N1/Adjudicator.",
      "Peserta yang telah membayar biaya pendaftaran kemudian membatalkan keikutsertaannya, maka biaya tersebut tidak dapat dikembalikan.",
      "Seluruh peserta KDBI wajib mengikuti Seminar Nasional UNAS FEST 2023.",
    ],
    judgeData: [
      {
        name: "Purwo Besari S.Pd",
        image: purwo,
        description:
          "Merupakan lulusan Sarjana Manajemen Pendidikan (S1 Manajemen Pendidikan) dari Universitas Negeri Jakarta. Memiliki ketertarikan terhadap pendidikan, dengan minat yang besar terhadap pembangunan manusia dan dinamika konten media dan bercita-cita untuk unggul secara bersamaan sebagai spesialis dalam pembelajaran, pelatihan, dan pembuatan konten.",
        achievements: [
          "Peserta Program Musim Panas Universitas Asia Diterbitkan oleh Asia University Taiwan (2019) ",
          "Menerima Bakti Nusa 9 Penerima Bakti Nusa 9 Dikeluarkan oleh Dompet Dhuafa dengan Program Pengembangan Kepemimpinan bagi aktivis mahasiswa",
          "Juara 1 Pemilihan Mahasiswa Berprestasi Fakultas Ilmu Pendidikan (2018)",
          "Juara 1 Lomba Debat Pendidikan Nasional yang diselenggarakan oleh BEM program studi guru sekolah dasar fakultas pendidikan Universitas Pendidikan Indonesia (2018).",
        ],
      },
      {
        name: "Nofia Fitria M.Si",
        image: nofia,
        description:
          "Merupakan lulusan Sarjana Sains Jurusan Ilmu Politik di Universitas Nasional (2002-2006), Program MA Universitas Mediterania Timur dengan jurusan Hubungan Internasional dan Studi Keamanan (2009-2012), S2 di Universitas Indonesia jurusan Ilmu Politik dan Pemerintahan (2016-2019), S3 di Universitas Indonesia jurusan Ilmu Politik dan Pemerintahan (2020). Beliau adalah pendiri platform Politik Digital eksploitasiicha.id dan bigdatapolitics.id. Memiliki minat penelitian khususnya pada bidang Politik Digital dan Big Data, Kebijakan Publik, dan Politik Global.",
        achievements: [
          "Poltekkes Kemenkes Jakarta 3 (Juli 2020 - Februari 2021)",
          "Magang sebagai Staf Ahli DPR RI (2016)",
          "Aliansi Kebangsaan sebagai Manager Program/Reseacher (2014)",
          "Magang sebagai Staf Ahli Kementrian Luar Negeri RI (Februari 2012 - Juni 2012)",
        ],
      },
      {
        name: "Yogi Syahputra Al-idrus",
        image: yogi,
        description:
          "Merupakan mahasiswa Sarjana Hukum (S1 Hukum) Universitas Muhammadiyah Malang. Memiliki ketertarikan dan motivasi dalam mengelaborasi problematika di dalam kehidupan sosial dan ingin memberikan dampak positif bagi masyarakat luas dengan mengimplementasikan ilmu yang ia pelajari.",
        achievements: [
          "Presiden Mahasiswa BEM UMM Periode 2023 - 2024",
          "Best Paper Internasional Tahun 2023 Student Center. ",
          "Juara 1 Debat Nasional Festival Politik Tata Negara Di Universitas Negeri Yogyakarta Tahun 2022 Sekaligus Menjadi Best Speaker 3 Dalam Kompetisi Tersebut.",
          "Juara 2 Meraih Perunggu Di Debat Nasional KDMI Publik Expo Di Universitas Negeri Makassar Tahun 2022.",
        ],
      },
    ],
    timeline: kdbiTimelineData,
    formPath: "kdbi",
  },

  {
    path: "EDC",
    guidebook:
      "https://drive.google.com/file/d/13kBHOXq8KoI3ottZM4VJS875XBohr1Ui/view?usp=sharing",
    logo: edcLogo,
    coverImage: edcCover,
    title: "English Debate Competition",
    description:
      "The English Debate Competition (EDC) is an English language debate competition where participants debate arguments and thoughts related to contemporary issues from various aspects, namely social, political, cultural, technological, economic, energy, legal, health and so on. Therefore, the English Debate Competition (EDC) aims to improve participants' ability to speak in public, develop analytical and critical thinking skills, and strengthen their ability to argue using effective and persuasive language. The English Debate Competition (EDC) will be held with the theme 'Implementation of Technology in Blue Econo...",
    termsAndConditions: [
      "Participants are active D3/D4/S1 students registered in PD-Dikti (Pangkalan Data Pendidikan Tinggi) from any faculty in PTN or PTS,",
      "Participants have registered themselves on the registration link that has been listed on UNAS-FEST 2023 website",
      "Participants must join the WhatsApp group,",
      "Participants are students who have never had a Bachelor's degree (S1) / Applied Bachelor's degree (D4),",
      "Participants are a team consisting of 2 students from the same university and N1,",
      "Participants that have already paid the registration fee and afterward cancel their participation, the fee is non-refundable,",
      "All EDC participants are required to attend the UNAS FEST 2023 National Seminar.",
    ],
    judgeData: [
      {
        name: "Maftuchah Dwi Agustina, S.S., M.Hum.",
        image: maftuchah,
        description:
          "Bachelor of English Language and Literature from Darul Ulum University and continued Master degree in linguistics from Darul Ulum University. Currently working as a lecturer of English Literature study program at Nasional University.",
        achievements: [
          "English debate coach of Malang’s Senior High School.",
          "East Java contingent in NUEDC National, Semarang 2011.",
          "Semifinalist of NUEDC selection in East Java, Malang 2010.",
          "First runner up in the East Java Provincial English Debate Competition by the East Java Ministry of Education, Surabaya 2010.",
        ],
      },
      {
        name: "Jubaidah Aidah, S.Hum.",
        image: jubaidah,
        description:
          "Graduated from Linguistics Literature, Syarif Hidayatullah State Islamic University Jakarta (UIN). Demonstrates a keen inclination towards pursuing a major in either English Linguistics or Public Policy. She works as PPID Operational Staff of Public Relations and Foreign Cooperation Bureau at the Ministry of Maritime Affairs and Fisheries.",
        achievements: [
          "Semifinalist of Language Ambassador DKI Jakarta, 2019.",
          "1st place of English Debate Championship in Jabodetabek area, issued by IIQ Jakarta 2018. ",
          "Awardee scholarship PPA (Peningkatan Prestasi Akademik) 2018.",
        ],
      },
      {
        name: "Septian Wijayanti, S.Tr.Kom.",
        image: septian,
        description:
          "Bachelor of Informatics Engineering from Malang State Polytechnic. Currently working at the Indonesian Migrant Worker Job Protection Agency (BP2MI) as a Job Placement Analyst for the America and Pacific Region",
        achievements: [
          "Founder @globalyouthvisit and @indipendent.id.",
          "Indonesia Representative in ASEAN, Korea Frontier Forum at Busan, South Korea 2016.",
          "Best Speaker National Politechnic English Olympic Surabaya, 2012.",
          "Champion of East Java Debate Competition at English Week UNESA, 2012.",
        ],
      },
    ],
    timeline: kdbiTimelineData,
    formPath: "edc",
  },

  {
    path: "LKTI",
    guidebook:
      "https://drive.google.com/file/d/1-eGqXmLhD3lk4UuqvOgTw83bjPC4yQ0S/view?usp=sharing",
    logo: lktiLogo,
    coverImage: lktiCover,
    title: "Karya Tulis Ilmiah",
    description:
      "Lomba Karya Tulis Ilmiah UNAS FEST 2023 adalah salah satu dari tiga acara UNAS FEST 2023 yang berupa kompetisi Karya Tulis ilmiah Tingkat Nasional antar PTN & PTS se-Indonesia. Lomba Karya Tulis Ilmiah adalah kompetisi karya tulis yang diperoleh dari hasil observasi dan penelitian dalam bidang dan metode tertentu, dengan penulisan sistematis dan menggunakan bahasa Indonesia yang baik dan benar serta isinya dapat dipertanggungjawabkan kebenarannya/keilmiahannya.",
    termsAndConditions: [
      "Mahasiswa/i aktif yang terdaftar pada PDDIKTI (Pangkalan Data Pendidikan Tinggi),",
      "Mahasiswa/i yang berasal dari berbagai Program Studi dan Perguruan Tinggi Negeri maupun Swasta di Indonesia,",
      "Mahasiswa/i memenuhi persyaratan administrasi yang telah ditetapkan oleh panitia penyelenggara kegiatan,",
      "Mahasiswa/i mematuhi peraturan yang telah ditentukan dan tercantum pada buku pedoman LKTI UNAS FEST 2023,",
      "Seluruh peserta LKTI wajib mengikuti Seminar Nasional UNAS FEST 2023,",
      "Peserta LKTI UNAS FEST 2023 bersifat individu,",
    ],
    judgeData: [
      {
        name: "Prof. Dr. Sri Endarti Rahayu, M.Si",
        image: sri,
        description:
          "Merupakan guru besar Biologi Universitas Nasional  S1 – Universitas Padjajaran,  S2 – Institut Pertanian Bogor,  S3 – Institut Pertanian Bogor.",
        achievements: [
          "Publikasi 12 Jurnal Internasional",
          "Publikasi 2 Jurnal Nasional",
          "Publikasi 3 Prosiding Internasional",
          "Menulis 4 Buku",
          "Memperoleh 2 HKI",
        ],
      },
      {
        name: "Efriza, S.IP, M.Si",
        image: efriza,
        description:
          "Merupakan lulusan Sarjana Ilmu Politik (S1  Ilmu Politik ) dari Universitas Nasional, S2 di Institut Ilmu Sosial dan Ilmu Politik Jakarta (IISIP) jurusan Ilmu Politik (S2 Ilmu Politik). Merupakan  Dosen Tetap Ilmu Pemerintahan, UNPAM PSDKU, Serang, Banten, Maret 2022 s/d sekarang. Dosen Tetap Ilmu Politik, Sekolah Tinggi Ilmu Pemerintahan Abdi Negara (STIP-AN), Oktober 2016 s/d sekarang.",
        achievements: [
          "Menulis 13 Buku",
          "Anggota Asosiasi Ilmu Politik Indonesia (AIPI) Jakarta, 2013 s/d sekarang",
          "Pendiri dan Direktur, CV Penerbit Kreasi Cendekia Pustaka, 2011 - sekarang",
          "Kolumnis di Telisik.id 2020 s/d sekarang",
          "Pendiri Yayasan Studi Cendekia Indonesia (YSCI), 2022 - sekarang",
        ],
      },
      {
        name: "Farhan Apriansyah",
        image: farhan,
        description:
          "Merupakan mahasiswa Program Studi Biologi angkatan 2019  yang bekerja keras serta bertanggung jawab, pribadi yang senang mencoba dan belajar hal baru, memiliki kemampuan berkomunikasi yang baik dan mempunyai jiwa kepemimpinan",
        achievements: [
          "Dosen Tetap Ilmu Pemerintahan, UNPAM PSDKU, Serang, Banten, Maret 2022 s/d sekarang",
          "Dosen Tetap Ilmu Politik, Sekolah Tinggi Ilmu Pemerintahan Abdi Negara (STIP-AN), Oktober 2016 s/d sekarang",
          "Dosen Tidak Tetap, Universitas Satya Negara Indonesia (USNI), Fakultas Hubungan Internasional  dan Ilmu Komunikasi (pernah), Februari 2018 s/d sekarang",
          "Reviewer Jurnal Populis (Sinta 4), Universitas Nasional (UNAS)",
          "Dosen Tidak Tetap, Universitas Bung Karno (UBK), Fakultas Ilmu Politik, September 2017 s/d 2023",
        ],
      },
    ],
    timeline: lktiTimelineData,
    formPath: "lkti",
  },

  {
    path: "SEMNAS",
    logo: semnasLogo,
    coverImage: semnasCover,
    title: "Seminar Nasional",
    description:
      "Seminar merupakan pertemuan kelompok yang membahas dan menemukan solusi dari topik atau masalah yang relevan dengan mempresentasikan dan menjelaskan solusi tersebut yang dilakukan oleh individu yang ahli di bidangnya. Hal yang menjadi topik pembahasan kita saat ini dimana kita akan membahas terkait bagaimana ‘penerapan teknologi di dalam inovasi maritim yang beracuan pada ekonomi biru yang mentransformasikan sistem ekonomi secara menyeluruh’.  Hadirnya penyelenggaraan Seminar Nasional UNAS FEST 2023 yang diselenggarakan oleh Biro Kemahasiswaan dalam merayakan ula...",
    termsAndConditions: [
      "Untuk mengembangkan wawasan serta meningkatkan pemikiran kritis mahasiswa/i Indonesia,",
      "Meningkatkan semangat jiwa ilmiah dan mengingkatkan rasa banga dan cinta tanah air kepada mahasiswa/i Indonesia,",
      "Mensosialisasikan kepada mahasiswa/i Universitas Nasional mengenai maritim di Indonesia,",
      "Meningkatkan motivasi dan menambah ilmu para mahasiswa/i terkait kelautan.",
    ],
    seminar: {
      title: "Tema Seminar Nasional",
      tema: "“Implementasi Teknologi Dalam Kebijakan Ekonomi Biru Untuk Mengoptimalkan Inovasi Maritim Yang Berkelanjutan Di Indonesia”",
    },
    judgeData: [
      {
        name: "Dr. Mary Ismowati, M.Si ",
        image: mary,
        description: "",
        achievements: [
          "Kaprodi Program Magister Administrasi Publik FISIP UNAS",
          "Kaprodi Program Sarjana Administrasi Publik FISIP UNAS",
          "Tim Monitoring dan Evaluasi Pelaksanaan Rencana Aksi Kebijakan Kelautan Indonesia",
          "Liaison Officer (Perwakilan) Kemenko Marves dalam Komite Nasional dan Ekonomi Keuangan Syariah",
          "Wakil Ketua Tim Koordinasi Nasional Vokasi (TKNV) Revitalisasi Pendidikan & Pelatihan Vokasi,",
        ],
      },
      {
        name: "Dr.Ir.Sugeng Santoso, MT, QGRGP, CGRP",
        image: sugeng,
        description:
          "doktor ilmu ekonomi yang sejak tahun 2017 menjadi eselon 1 (Staf Ahli Menteri Bidang Ekonomi Maritim), Kementerian Koordinator Bidang Kemaritiman dan Investasi (Kemenko Marves), (ii) sebelumnya menjadi Direktur Akses Non Perbankan dan Ketua Tim Renstra Badan Ekonomi Kreatif (BEKRAF) serta pada saat di BPPT: menjabat Kepala Bidang UKM, Kepala Bidang Daya Saing Industri, Kepala Bagian Evaluasi dan Pelaporan, serta Kepala Bagian Program dan Anggaran",
        achievements: [
          "Menjadi peserta Terbaik I Diklat Pimpinan Tk. II (Angkatan VIII Tahun 2016) dan Terbaik I Diklat Pimpinan Tk III (Angkatan XXI Tahun 2010).",
          "Ketua Pelaksana SDG’s di Kemenko marves",
          "Tim Monitoring dan Evaluasi Pelaksanaan Rencana Aksi Kebijakan Kelautan Indonesia",
          "Liaison Officer (Perwakilan) Kemenko Marves dalam Komite Nasional dan Ekonomi Keuangan Syariah",
          "Wakil Ketua Tim Koordinasi Nasional Vokasi (TKNV) Revitalisasi Pendidikan & Pelatihan Vokasi",
        ],
      },
      {
        name: "Hendra Yusran Siry, Ph.D",
        image: hendra,
        description: "",
        achievements: [
          "Kepala Pusat Riset Kelautan, Badan Riset dan Sumber Daya Manusia Kelautan dan Perikanan, Kementerian Kelautan dan Perikanan",
          "Sekretaris Direktorat Jenderal Pengelolaan Ruang Laut, Kementerian Kelautan dan Perikanan.",
          "Analis Kerjasama, Sekretariat Direktorat Jenderal Pengelolaan Ruang Laut , Kementerian Kelautan dan Perikanan.",
          "Interim Executive Director, Regional Secretariat, the Coral Triangle Initiative on Coral Reefs, Fisheries and Food Security (CTI-CFF).",
        ],
      },
      {
        name: "Dr. Agnes Wirdayanti, SIP, M.Si",
        image: agnes,
        description: "",
        achievements: [
          "Kepala Pendidikan, Riset Pariwisata dan Ekonomi Kreatif Kedeputian Koordinator Bidang Pariwisata dan Ekonomi Kreatif Kementerian Koordinator Bidang Kemaritiman dan Investasi",
          "Analisis Kebijakan Ahli Madya Bidang SDM Parekraf Kedeputian Koordinator Bidang Pariwisata dan Ekonomi Kreatif Kementerian Koordinator Bidang Kemaritiman dan Investasi",
          "Dosen FISIP Universitas Nasional Jakarta",
        ],
      },
      {
        name: "Dr. Tatang Mitra Setia, M. Si",
        image: tatang,
        description: "",
        achievements: [
          "Sosialisasi Ekowisata berbasis Biota laut dihadapan Peserta Grup Wisata dari Burung Indonesia di Pulau Pramuka, Kepulauan Seribu",
          "membuat 4 buku",
          "4 publikasi ilmiah",
        ],
      },
      {
        name: "Balqis Ratu Fathona",
        image: balqis,
        description: "",
        achievements: [
          "Skincare Content Creator",
          "Makeup Content Creator",
          "Asisten Laboratorium Kimia",
        ],
      },
    ],
    timeline: semnasTimelineData,
    formPath: "semnas",
  },
];
