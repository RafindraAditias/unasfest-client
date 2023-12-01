/* eslint-disable react-refresh/only-export-components */
import ErrorBoundary from "@/components/errorBoundary";
import NotFound from "@/components/notFound";
import DaftarLomba from "@/routes/daftarLomba";
import { lazy } from "react";
import { Route, createRoutesFromElements, json } from "react-router-dom";

const Root = lazy(() => import("@/routes/root"));
const Beranda = lazy(() => import("@/routes/beranda"));
const Kegiatan = lazy(() => import("@/routes/kegiatan"));
const Galeri = lazy(() => import("@/routes/galeri"));
const UnderConstruction = lazy(() => import("@/routes/underConstruction"));

export const routesConfig = createRoutesFromElements(
  <Route path="/" element={<Root />} errorElement={<ErrorBoundary />}>
    <Route index element={<Beranda />} />
    <Route path="*" element={<NotFound />} />

    <Route
      path="kegiatan/*"
      element={<Kegiatan />}
      errorElement={
        <div className="w-full h-screen grid place-items-center">
          <p>error di lomba</p>
        </div>
      }
    />

    <Route
      path="galeri"
      element={<Galeri />}
      errorElement={
        <div className="w-full h-screen grid place-items-center">
          <p>error di galeri</p>
        </div>
      }
    />

    <Route
      path="sponsorship"
      element={<UnderConstruction />}
      errorElement={
        <div className="w-full h-screen grid place-items-center">
          <p>error di Sponsorship</p>
        </div>
      }
    />

    <Route
      path="ranking"
      element={<UnderConstruction />}
      errorElement={
        <div className="w-full h-screen grid place-items-center">
          <p>error di Ranking</p>
        </div>
      }
    />

    <Route
      path="kegiatan/form/:id"
      loader={({ params }) => {
        return json({ url: params.id });
      }}
      element={<DaftarLomba />}
    />
  </Route>
);
