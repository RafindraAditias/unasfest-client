interface FormTypes {
  nama: string;
  email: string;
  npm: string;
  fakultas: string;
  universitas: string;
  krs: File;
  whatsapp: string;
  ktm: File;
  foto: File;
  bukti_follow: File;
}

export interface LKTIFormType extends FormTypes {
  semester: number;
  asal_kota: string;
  prestasi: File;
  surat_pengantar: File;
  rules: "bersedia" | "tidak bersedia";
}

export interface SEMNASFormType extends FormTypes {
  gender: "laki-laki" | "perempuan";
  alamat: string;
}

export interface EDCFormType extends FormTypes {
  gender: "laki-laki" | "perempuan";
  alamat: string;
}

export interface KDBIFormType extends FormTypes {
  gender: "laki-laki" | "perempuan";
  alamat: string;
}

export type formFields = {
  title?: string;
  description?: string;
  type: string;
  placeholder: string;
  accept?: string;
  format?: string;
  formInputType: "input" | "pattern_input" | "file_input";
};

export interface FormType {
  formSpan: string;
  formTitle: string;
  formDescription: string;
}
