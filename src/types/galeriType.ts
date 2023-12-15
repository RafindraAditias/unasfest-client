export type TKegiatan = "KDBI" | "EDC" | "LKTI" | "SEMNAS";

export type TTahunKegiatan = "2023" | "2022" | "2021" | "2020";

export interface IGaleri {
  tahun: TTahunKegiatan;
  kegiatan: TKegiatan;
  galeri: string[];
}
