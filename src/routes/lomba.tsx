import UnderConstruction from "@/routes/underConstruction";
import { useSearchParams } from "react-router-dom";

export default function Lomba() {
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  return <UnderConstruction />;
}
