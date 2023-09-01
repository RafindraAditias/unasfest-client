import graphicLogo from "@/assets/logo/graphic-logo.png";
import unasLogo from "@/assets/logo/logo-unasfest.png";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [currentNav, setCurrentNav] = useState<string>("Beranda");

  const navContents = [
    {
      path: "beranda",
      name: "Beranda",
    },
    {
      path: "lomba",
      name: "Lomba",
    },
    {
      path: "galeri",
      name: "Galeri",
    },
    {
      path: "sponsorship",
      name: "Sponsorship",
    },
    {
      path: "ranking",
      name: "Ranking",
    },
    {
      path: "tentang",
      name: "Tentang",
    },
  ];

  return (
    <header className="w-screen h-[80px] fixed z-50 bg-white border-b-2 border-solid border-[rgba(0, 0, 0, 0.10)]">
      <nav className="w-full max-w-[1200px] h-full flex items-center justify-between gap-10 m-auto">
        <div className="flex w-40 h-12 gap-2 ml-5">
          <img
            src={graphicLogo}
            alt="logo unas graphic"
            className="object-contain"
            width={50}
            height={50}
          />
          <img
            src={unasLogo}
            alt="logo unas fest"
            className="object-contain"
            width={100}
            height={50}
          />
        </div>

        <div>
          <ul className="flex gap-12 font-roboto font-semibold text-base tracking-wide mr-5">
            {navContents.map(({ path, name }, index) => {
              return (
                <li key={index}>
                  <Link
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={50}
                    onClick={() => setCurrentNav(name)}
                    className={`${currentNav === name ? "nav-active" : "nav"}`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
