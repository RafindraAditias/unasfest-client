import graphicLogo from "@/assets/logo/graphic-logo-unasfest.webp";
import unasfestLogo from "@/assets/logo/logo-unasfest.webp";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { navData } from "@/data/navbar";
import { Menu, X } from "lucide-react";

export default function NavigationMenuDemo() {
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
  useEffect(() => {
    console.log(menuOpen);
  }, [menuOpen]);

  return (
    <header
      className={`w-full h-full z-[99999] sticky duration-200 ${
        visible ? "top-0" : "-top-32"
      }`}
    >
      <div className="w-full h-[100px] bg-white duration-200 border-b-2 border-solid border-[rgba(0, 0, 0, 0.10)]">
        <div className="w-4/5 h-full max-w-screen-xl z-50 flex m-auto justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={graphicLogo}
              alt="logo unas graphic"
              className="w-[60px] hidden object-cover aspect-auto md:block"
              width={60}
              height={60}
            />
            <img
              src={unasfestLogo}
              alt="logo unas fest"
              className="w-[130px] h-[60px] object-cover"
              width={130}
              height={60}
            />
          </div>

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

          <NavigationMenu
            className={`absolute max-w-none w-full py-6 -z-50 bg-white left-0 justify-center duration-200 lg:z-0 lg:relative lg:justify-end lg:top-0 ${
              menuOpen ? "top-24" : "-top-96"
            }`}
          >
            <NavigationMenuList className="text-base flex-col lg:flex-row gap-6 lg:gap-16 lg:text-xl">
              {navData.map(({ title, path, child }) => {
                if (child)
                  return (
                    <NestedNav
                      key={title}
                      path={path}
                      title={title}
                      menu={child}
                      closeMenu={() => setMenuOpen(false)}
                    />
                  );
                return (
                  <NavigationMenuItem
                    key={title}
                    className={`${pathname === path ? "nav-active" : "nav"}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <Link to={path}>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}

interface NestedNav extends React.HtmlHTMLAttributes<HTMLLIElement> {
  title: string;
  path: string;
  menu: { name: string; href: string; desc?: string }[];
  closeMenu: React.MouseEventHandler;
}

function NestedNav({ title, path, menu, closeMenu }: NestedNav) {
  const { pathname } = useLocation();
  return (
    <NavigationMenuItem
      className={`z-50 ${pathname.includes(path) ? "nav-active" : "nav"}`}
    >
      <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-[300px]">
          {menu.map(({ name, href }, index) => (
            <NavigationMenuLink key={index} onClick={closeMenu}>
              <Link
                to={href}
                className="w-[300px] hover:bg-system-grey-600 hover:bg-opacity-10 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {name}
                </p>
              </Link>
            </NavigationMenuLink>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
