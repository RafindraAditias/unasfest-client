import graphicLogo from "@/assets/logo/graphic-logo.png";
import unasLogo from "@/assets/logo/logo-unasfest.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [currentNav, setCurrentNav] = useState<string>("Beranda");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const navContents = [
    {
      path: "/",
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
    <header
      className={`w-screen h-[100px] sticky mb-20 z-50 bg-white border-b-2 border-solid border-[rgba(0, 0, 0, 0.10)] ${
        visible ? "top-0" : "-top-32"
      } duration-200`}
    >
      <nav className="w-4/5 max-w-[1440px] h-full flex items-center justify-between m-auto px-3">
        <div className="flex gap-4">
          <img
            src={graphicLogo}
            alt="logo unas graphic"
            className="object-contain"
            width={57}
            height={57}
          />
          <img
            src={unasLogo}
            alt="logo unas fest"
            className="object-contain"
            width={130}
            height={55}
          />
        </div>

        <div className="text-xl font-bold tracking-wide">
          <ul className="flex gap-16">
            {navContents.map(({ path, name }, index) => {
              return (
                <li key={index}>
                  <Link
                    to={path}
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
