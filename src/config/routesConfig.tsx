/* eslint-disable react-refresh/only-export-components */
import Tentang from "@/routes/tentang";
import { lazy } from "react";
import { Route, createRoutesFromElements } from "react-router-dom";

const Root = lazy(() => import("@/routes/root"));
const Beranda = lazy(() => import("@/routes/beranda"));
const Kegiatan = lazy(() => import("@/routes/kegiatan"));
const UnderConstruction = lazy(() => import("@/routes/underConstruction"));

export const routesConfig = createRoutesFromElements(
  <Route
    path="/"
    element={<Root />}
    // errorElement={
    //   <div className="w-full h-screen grid place-items-center">
    //     <p>not found</p>
    //   </div>
    // }
  >
    <Route index element={<Beranda />} />

    <Route
      path="kegiatan/*"
      element={<Kegiatan />}
      // errorElement={
      //   <div className="w-full h-screen grid place-items-center">
      //     <p>error di lomba</p>
      //   </div>
      // }
    />

    <Route
      path="galeri"
      element={<UnderConstruction />}
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
      path="tentang"
      element={<Tentang />}
      errorElement={
        <div className="w-full h-screen grid place-items-center">
          <p>error di Tentang</p>
        </div>
      }
    />
  </Route>
);
