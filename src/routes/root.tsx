import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "@/components/navbar";
import Loading from "@/components/loading";

export default function Root() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}
