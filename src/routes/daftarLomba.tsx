import { useLoaderData } from "react-router-dom";
import LKTISchema from "@/utils/schema/lktiSchema";
import KDBISchema from "@/utils/schema/kdbiSchema";
import RegisterForm from "@/components/registerForm";
import KDBIForm from "@/data/form/kdbiForm";
import LKTIForm from "@/data/form/lktiForm";
import EDCSchema from "@/utils/schema/edcSchema";
import EDCForm from "@/data/form/edcForm";
import SEMNASForm from "@/data/form/semnasForm";
import SEMNASSchema from "@/utils/schema/semnasSchema";

type loader = {
  url: string;
};

function DaftarLomba() {
  const { url } = useLoaderData() as loader;

  switch (url) {
    case "kdbi":
      return <RegisterForm formContent={KDBIForm} schema={KDBISchema} />;
    case "edc":
      return <RegisterForm formContent={EDCForm} schema={EDCSchema} />;
    case "lkti":
      return <RegisterForm formContent={LKTIForm} schema={LKTISchema} />;
    case "semnas":
      return <RegisterForm formContent={SEMNASForm} schema={SEMNASSchema} />;
    default:
      return <div>lomba semnas</div>;
  }
}

export default DaftarLomba;
