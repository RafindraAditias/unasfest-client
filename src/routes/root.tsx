import { Outlet } from "react-router-dom";
import { lazy, Fragment } from "react";

const Navbar = lazy(() => import("@/components/navbar"));

export default function Root() {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
}
