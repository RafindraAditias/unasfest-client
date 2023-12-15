import { FormType, formFields } from "@/types/form";
import EDCSchema from "@/utils/schema/edcSchema";
import { FieldPath } from "react-hook-form";

interface EDCFormFields extends formFields {
  formName: FieldPath<Zod.infer<typeof EDCSchema>>;
  subInput?: {
    title?: string;
    formName: FieldPath<Zod.infer<typeof EDCSchema>>;
    description?: string;
    placeholder: string;
    type: string;
    formInputType: "input" | "pattern_input" | "file_input";
  };
}

interface EDCFormType extends FormType {
  formFields: Array<EDCFormFields>;
}

const EDCForm: EDCFormType = {
  formSpan: "English Debate",
  formTitle: "Competition (EDC)",
  formDescription:
    "UNAS FEST 2023 is an event to celebrate the 74th anniversary of Nasional University that consist several competitions. One of the competitions that will be held in UNAS FEST 2023 is English Debate Competition (EDC). EDC is a debate competition where the participants give their arguments and thoughts whom related to the contemporary issues.",

  formFields: [
    {
      title: "Nama",
      formName: "nama",
      placeholder: "Masukan nama lengkap anda",
      type: "text",
      formInputType: "input",
    },
    {
      title: "Alamat",
      formName: "alamat",
      placeholder: "Masukan alamat jalan, kelurahan/kecamatan, kabupaten, kota",
      type: "text",
      formInputType: "input",
    },
    {
      title: "Nomor Pokok Mahasiswa",
      formName: "npm",
      placeholder: "Masukan nomor pokok mahasiswa anda",
      type: "text",
      formInputType: "input",
    },
    {
      title: "Program Studi",
      formName: "prodi",
      placeholder: "Masukan nama program studi anda",
      type: "text",
      formInputType: "input",
    },
    {
      title: "Universitas",
      formName: "universitas",
      placeholder: "Masukan asal Universitas anda",
      type: "text",
      formInputType: "input",
    },
    {
      title: "Alamat Email",
      formName: "email",
      placeholder: "Masukan alamat email anda",
      type: "text",
      formInputType: "input",
    },
    {
      title: "Nomor Whatsapp",
      formName: "whatsapp",
      placeholder: "Masukan nomor telepon anda",
      type: "text",
      format: "#### #### ########",
      formInputType: "pattern_input",
    },
    {
      title: "Upload Kartu Tanda Mahasiswa (KTM)",
      formName: "ktm",
      description:
        "Pastikan berkas yang di upload memiliki ukuran maximal (5 MB) dengan format PDF, sesuai dengan ketentuan perlombaan ",
      placeholder: "Upload Kartu Tanda Mahasiswa",
      type: "file",
      accept: "application/pdf",
      formInputType: "file_input",
    },
    {
      title: "Upload Kartu Rencana Studi (KRS)",
      formName: "krs",
      description:
        "Pastikan berkas yang di upload memiliki ukuran maximal (5 MB) dengan format PDF, sesuai dengan ketentuan perlombaan ",
      placeholder: "Upload Kartu Tanda Mahasiswa",
      type: "file",
      accept: "application/pdf",
      formInputType: "file_input",
    },
    {
      title:
        "Upload Screenshoot Bukti Mengikuti Social Media Unas Fest 2023 dan Upload Twibbon Unas Fest 2023",
      formName: "bukti_follow",
      description:
        "Pastikan berkas yang di upload memiliki ukuran maximal (5 MB) dengan format JPEG/PDF, sesuai dengan ketentuan perlombaan ",
      placeholder: "Upload Bukti Screenshoot",
      type: "file",
      accept: "application/pdf, image/jpeg, image/jpg, image/png, image/webp",
      formInputType: "file_input",
    },
    {
      title: "Upload Pas Photo 3x4 Terbaru",
      formName: "foto",
      description:
        "Pastikan berkas yang di upload memiliki ukuran maximal (5 MB) dengan format JPEG/PDF, sesuai dengan ketentuan perlombaan ",
      placeholder: "Upload Pas Foto",
      type: "file",
      accept: "image/jpeg, image/jpg, image/png, image/webp, application/pdf",
      formInputType: "file_input",
    },
    {
      title: "Upload Bukti Pembayaran",
      formName: "bukti_pembayaran",
      description:
        "Pastikan Bukti pembayaran yang di upload memiliki ukuran maximal (1 MB), Lampirkan nama pengirim sesuai dengan ketentuan perlombaan ",
      placeholder: "Upload Bukti Pembayaran",
      type: "file",
      accept: "image/jpeg, image/jpg, image/png, image/webp, application/pdf",
      subInput: {
        formName: "nama_rekening",
        placeholder: "Masukan Nama Rekening Pengirim",
        type: "text",
        formInputType: "input",
      },
      formInputType: "file_input",
    },
  ],
};

export default EDCForm;
