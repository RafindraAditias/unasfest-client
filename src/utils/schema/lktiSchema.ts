import { z } from "zod";
import { loadImageDimensions } from "../imageDimensions";

const imageMime = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const megabyte = 1000000;

const LKTISchema = z.object({
  nama: z
    .string({ required_error: "Field wajib diisi" })
    .min(3, "Nama terlalu pendek")
    .max(50, "Nama terlalu panjang"),

  email: z
    .string({ required_error: "Field wajib diisi" })
    .email("Email tidak valid"),

  npm: z
    .string({ required_error: "Field wajib diisi" })
    .min(5, "NPM terlalu pendek"),

  fakultas: z
    .string({ required_error: "Field wajib diisi" })
    .min(5, "terlalu pendek"),

  semester: z.string({ required_error: "Field wajib diisi" }),

  universitas: z
    .string({ required_error: "Field wajib diisi" })
    .min(2, "terlalu pendek"),

  whatsapp: z
    .string({ required_error: "Field wajib diisi" })
    .min(8, "terlalu pendek"),

  asal_kota: z.string({ required_error: "Field wajib diisi" }),

  foto: z
    .any({ required_error: "Field wajib diisi" })
    .refine(
      (file: File) => file?.size <= 5 * megabyte,
      `maximum ukuran foto adalah 5 MB`
    )
    .refine(
      (file) => imageMime.includes(file?.type),
      "hanya menerima format .jpg, .jpeg, .png and .webp"
    )
    .refine(async (file: File) => {
      if (!file) return false;

      try {
        const { width, height } = await loadImageDimensions(file);
        const dimension = width / height;
        return dimension === 4 / 6;
      } catch (error) {
        console.error(error);
        return false;
      }
    }, `Gambar harus berukuran 4x6`),

  krs: z
    .any({ required_error: "Field wajib diisi" })
    .refine(
      (file: File) => file?.size <= 5 * megabyte,
      `maximum ukuran pdf adalah 5 MB`
    )
    .refine(
      (file) => "application/pdf".includes(file?.type),
      "hanya menerima format pdf"
    ),

  ktm: z
    .any({ required_error: "Field wajib diisi" })
    .refine(
      (file: File) => file?.size <= 5 * megabyte,
      `maximum ukuran pdf adalah 5 MB`
    )
    .refine(
      (file) => "application/pdf".includes(file?.type),
      "hanya menerima format pdf"
    ),

  prestasi: z
    .any({ required_error: "Field wajib diisi" })
    .refine(
      (file: File) => file?.size <= 5 * megabyte,
      `maximum ukuran pdf adalah 5 MB`
    )
    .refine(
      (file) => "application/pdf".includes(file?.type),
      "hanya menerima format pdf"
    ),

  bukti_follow: z
    .any({ required_error: "Field wajib diisi" })
    .refine(
      (file: File) => file?.size <= 5 * megabyte,
      `maximum ukuran pdf adalah 5 MB`
    )
    .refine(
      (file) => "application/pdf".includes(file?.type),
      "hanya menerima format pdf"
    ),

  surat_pengantar: z
    .any({ required_error: "Field wajib diisi" })
    .refine(
      (file: File) => file?.size <= 5 * megabyte,
      `maximum ukuran pdf adalah 5 MB`
    )
    .refine(
      (file) => "application/pdf".includes(file?.type),
      "hanya menerima format pdf"
    ),
});

export default LKTISchema;
