import { Outlet, ScrollRestoration } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "@/components/navbar";
import Loading from "@/components/loading";

export default function Root() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Outlet />
        <ScrollRestoration
          getKey={(location) => {
            const paths = [
              "/",
              "/kegiatan*",
              "/galeri",
              "/sponsorship",
              "/ranking",
              "/tentang",
            ];
            return paths.includes(location.pathname)
              ? location.pathname
              : location.key;
          }}
        />
      </Suspense>
    </>
  );
}
