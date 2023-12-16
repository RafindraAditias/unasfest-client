function Visi_misiSection() {
  return (
    <div className="w-4/5 m-auto h-fit font-inter mt-32">
      <div className="text-center w-full m-auto max-w-screen-xl mb-20">
        <h1 className="text-2xl font-semibold leading-10 mb-12 md:text-3xl lg:text-4xl">
          Visi
        </h1>
        <p className="text-base leading-5 font-normal text-opacity-90 md:text-lg lg:text-2xl lg:leading-10">
          Menjadi wadah pembinaan dan pelatihan serta tolak ukur (barometer)
          dalam hal peningkatan kualitas diri mahasiswa/i pada kegiatan
          kepanitiaan dan keorganisasian di Universitas Nasional.
        </p>
      </div>

      <div className="w-full m-auto max-w-screen-xl">
        <h1 className="text-center text-2xl font-semibold leading-10 md:text-3xl lg:text-4xl">
          Misi
        </h1>
        {misi.map((misi, index) => (
          <div
            key={index}
            className="relative w-full border border-opacity-30 border-black rounded-lg my-16 bg-white lg:my-20"
          >
            <h1 className="absolute -top-12 -left-3 text-active-blue text-8xl mix-blend-hard-light">
              {index + 1}
            </h1>
            <p className="m-auto p-10 text-base leading-5 font-normal text-opacity-90 md:text-lg md:p-14 lg:text-2xl lg:leading-10 lg:p-16">
              {misi}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const misi = [
  "Melaksanakan dan mengembangkan kegiatan kepanitiaan serta keorganisasian sebagai wadah pembinaan dan pelatihan mahasiswa di Universitas Nasional",
  "Melaksanakan dan mengembangkan soft-skill dan hard-skill mahasiswa/i Universitas Nasional",
  "Melaksanakan dan membina mahasiswa/i Universitas Nasional untuk menjadi Konseptor, Eksekutor, Evaluator, dan Inovator kegiatan",
  "Membangun dan memperluas hubungan sosial dengan pihak eksternal",
  "Membina dan mengembangkan potensi diri mahasiswa untuk meningkatkan integritas mahasiswa/i Universitas Nasional",
];

export default Visi_misiSection;
