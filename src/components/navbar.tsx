import graphicLogo from "@/assets/logo/graphic-logo.png";
import unasLogo from "@/assets/logo/logo-unasfest.png";
import { useEffect, useState } from "react";
import { NavLink, generatePath } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navData } from "@/data/navbar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

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

  return (
    <header
      className={`sticky duration-200 ${visible ? "top-0" : "-top-32"} ${
        menuOpen ? "top-0" : "-top-32"
      } z-[9999999999]`}
    >
      <nav className="w-full h-[100px] top-0 z-50 bg-white border-b-2 border-solid border-[rgba(0, 0, 0, 0.10)]">
        <div className="w-4/5 max-w-[1440px] h-full flex items-center justify-between m-auto">
          <div className="flex gap-4">
            <img
              src={graphicLogo}
              alt="logo unas graphic"
              className="w-[57px] object-contain hidden md:block"
              width={57}
              height={57}
            />
            <img
              src={unasLogo}
              alt="logo unas fest"
              className="w-[130px] object-contain"
              width={130}
              height={55}
            />
          </div>

          <div className="text-xl font-bold tracking-wide">
            <div
              className="lg:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <div className="rotate-90 duration-300">
                  <X size={40} color="#004AAD" />
                </div>
              ) : (
                <div className="duration-300">
                  <Menu size={40} color="#004AAD" />
                </div>
              )}
            </div>

            <ul
              className={`w-full flex flex-col absolute -z-50 ${
                menuOpen ? "top-24" : "-top-96"
              } py-6 left-0 text-center gap-6 bg-white duration-200 lg:flex-row lg:z-0 lg:bg-transparent lg:w-fit lg:static lg:gap-16`}
            >
              {navData.map(({ path, name, child }, index) => {
                return (
                  <li key={index}>
                    {child ? (
                      <NavigationMenu className="m-auto z-50">
                        <NavigationMenuItem
                          className={`${
                            pathname === "/lomba" ? "nav-active" : "nav"
                          }`}
                        >
                          <NavigationMenuTrigger>
                            <NavigationMenuLink>{name}</NavigationMenuLink>
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <NavigationMenuList className="flex-col">
                              {child.map(({ name, query }, index) => {
                                return (
                                  <NavigationMenuLink key={index}>
                                    <NavLink
                                      to={generatePath(`/lomba?query=${query}`)}
                                      className="w-[300px] hover:bg-system-grey-600 hover:bg-opacity-10 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {name}
                                      </p>
                                    </NavLink>
                                  </NavigationMenuLink>
                                );
                              })}
                            </NavigationMenuList>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenu>
                    ) : (
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          isActive ? "nav-active" : "nav"
                        }
                      >
                        {name}
                      </NavLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
