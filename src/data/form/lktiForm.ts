import { FormType, formFields } from "@/types/form";
import LKTISchema from "@/utils/schema/lktiSchema";
import { FieldPath } from "react-hook-form";

interface LKTIFormFields extends formFields {
  formName: FieldPath<Zod.infer<typeof LKTISchema>>;
  subInput?: {
    title?: string;
    formName: FieldPath<Zod.infer<typeof LKTISchema>>;
    description?: string;
    placeholder: string;
    type: string;
    formInputType: "input" | "pattern_input" | "file_input";
  };
}

interface LKTIFormType extends FormType {
  formFields: Array<LKTIFormFields>;
}

const LKTIForm: LKTIFormType = {
  formSpan: "Lomba Karya",
  formTitle: "Tulis Ilmiah (LKTI)",
  formDescription:
    "Kompetisi Debat Bahasa Indonesia (KDBI) adalah kompetisi debat bahasa indonesia yang diadakan oleh Kementerian Komunikasi dan Informatika (Kominfo) dan Kementerian Pendidikan dan Kebudayaan (DP3B).",

  formFields: [
    {
      title: "Nama",
      formName: "nama",
      description: "Nama lengkap sesuai KTP/KTM",
      placeholder: "Masukan nama lengkap anda",
      type: "text",
      formInputType: "input",
    },
    {
      title: "Email",
      formName: "email",
      description: "Alamat email aktif",
      placeholder: "Masukan email anda",
      type: "text",
      formInputType: "input",
    },
    {
      title: "NPM/NIM",
      formName: "npm",
      description: "contoh: 215400000000",
      placeholder: "Masukan NPM/NIM",
      type: "text",
      formInputType: "input",
    },
    {
      title: "Fakultas/Jurusan",
      formName: "fakultas",
      description:
        "contoh: Fakultas Teknologi Komunikasi dan Informatika / Sistem Informasi",
      placeholder: "Masukan fakultas anda",
      type: "text",
      formInputType: "input",
    },
    {
      title: "Jenjang Semester",
      formName: "semester",
      description: "contoh: 5",
      placeholder: "Masukan jenjang semester anda",
      type: "number",
      formInputType: "input",
    },
    {
      title: "No Whatsapp",
      formName: "whatsapp",
      description: "Nomor aktif whatsapp yang dapat dihubungi",
      placeholder: "Masukan nomor whatsapp",
      type: "text",
      format: "#### #### ########",
      formInputType: "pattern_input",
    },
    {
      title: "Asal Kota",
      formName: "asal_kota",
      placeholder: "Masukan asal kota anda",
      type: "text",
      formInputType: "input",
    },
    {
      title: "Upload Foto",
      formName: "foto",
      description:
        "Format file yang bisa Anda upload adalah (PNG/JPG) dengan ukuran 4x6 dan maksimal ukuran 10 MB",
      placeholder: "Upload Foto",
      type: "file",
      accept: "image/jpeg, image/jpg, image/png, image/webp",
      formInputType: "file_input",
    },
    {
      title: "Upload Kartu Rencana Studi (KRS)",
      formName: "krs",
      description:
        "Format file yang bisa Anda upload adalah (PDF) dengan maksimal ukuran 10 MB",
      placeholder: "Upload Berkas",
      type: "file",
      accept: "image/jpeg, image/jpg, image/png, image/webp",
      formInputType: "file_input",
    },
    {
      title:
        "Scan KTM / Screenshot Siakad Aktif / Surat Keterangan Mahasiswa Aktif",
      formName: "ktm",
      description:
        "Format file yang bisa Anda upload adalah (PDF) dengan maksimal ukuran 10 MB",
      placeholder: "Upload KTM",
      type: "file",
      accept: "application/pdf",
      formInputType: "file_input",
    },
    {
      title: "Upload Bukti Prestasi / Capaian Unggulan",
      formName: "prestasi",
      description:
        "Format file yang bisa Anda upload adalah (PDF) dengan maksimal ukuran 10 MB",
      placeholder: "Upload Bukti Prestasi",
      type: "file",
      accept: "application/pdf",
      formInputType: "file_input",
    },
    {
      title:
        "Upload Bukti Follow Sosial Media (Instagram, TikTok & YouTube) @unasfest, Bukti Upload Twibbon dan Bukti Pembayaran",
      formName: "bukti_follow",
      description:
        "Format file yang bisa Anda upload adalah (PDF) dengan maksimal ukuran 10 MB",
      placeholder: "Upload File",
      type: "file",
      accept: "application/pdf",
      formInputType: "file_input",
    },
    {
      title:
        "Upload Surat Pengantar Delegasi dari Institusi/Universitas yang sudah di TTD oleh Warek, Dekan atau Wadek",
      formName: "surat_pengantar",
      description:
        "Format file yang bisa Anda upload adalah (PDF) dengan maksimal ukuran 10 MB",
      placeholder: "Upload Surat Pengantar",
      type: "file",
      accept: "application/pdf",
      formInputType: "file_input",
    },
  ],
};

export default LKTIForm;
