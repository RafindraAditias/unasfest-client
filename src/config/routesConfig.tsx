import Beranda from "@/routes/beranda";
import Lomba from "@/routes/lomba";
import Root from "@/routes/root";
import { Route, createRoutesFromElements } from "react-router-dom";

export const routesConfig = createRoutesFromElements(
  <Route
    path="/"
    element={<Root />}
    errorElement={
      <div className="w-full h-screen grid place-items-center">
        <p>not found</p>
      </div>
    }
  >
    <Route index element={<Beranda />} />

    <Route
      path="lomba"
      element={<Lomba />}
      errorElement={
        <div className="w-full h-screen grid place-items-center">
          <p>error di lomba</p>
        </div>
      }
    />

    <Route
      path="galeri"
      element={
        <div className="w-full h-screen grid place-items-center">
          <p>Galeri Page</p>
        </div>
      }
      errorElement={
        <div className="w-full h-screen grid place-items-center">
          <p>error di galeri</p>
        </div>
      }
    />

    <Route
      path="sponsorship"
      element={
        <div className="w-full h-screen grid place-items-center">
          <p>Sponsorship Page</p>
        </div>
      }
      errorElement={
        <div className="w-full h-screen grid place-items-center">
          <p>error di Sponsorship</p>
        </div>
      }
    />

    <Route
      path="ranking"
      element={
        <div className="w-full h-screen grid place-items-center">
          <p>Ranking Page</p>
        </div>
      }
      errorElement={
        <div className="w-full h-screen grid place-items-center">
          <p>error di Ranking</p>
        </div>
      }
    />

    <Route
      path="tentang"
      element={
        <div className="w-full h-screen grid place-items-center">
          <p>Tentang Page</p>
        </div>
      }
      errorElement={
        <div className="w-full h-screen grid place-items-center">
          <p>error di Tentang</p>
        </div>
      }
    />
  </Route>
);
