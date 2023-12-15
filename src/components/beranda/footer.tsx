import graphicLogo from "@/assets/logo/graphic-logo-unasfest.webp";
import unasfestLogo from "@/assets/logo/logo-unasfest.webp";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-scroll";

function Footer() {
  return (
    <section>
      <Card className="bg-white rounded-none lg:py-20 pt-16">
        <CardContent className="font-roboto !w-[80%] max-w-screen-xl p-3 m-auto text-center text-[#33333399] flex flex-nowrap gap-11 flex-col lg:w-full lg:flex-row lg:text-start lg:gap-10">
          <div className="lg:w-[30%] lg:flex lg:flex-col lg:gap-6">
            <div className="flex gap-3 justify-center lg:justify-start items-center">
              <img src={graphicLogo} alt="logo unas" width={60} height={60} />
              <img
                src={unasfestLogo}
                alt="logo unas"
                width={130}
                height={60}
                className="w-[130px] h-[60px] object-cover"
              />
            </div>
            <h1 className="hidden text-xl text-[#333] lg:inline-block">
              Suara dan Pikiran Merajut Irama Kompetitif di UNAS Fest 2023
            </h1>

            <div className="hidden w-full lg:flex items-center gap-[18px] justify-center lg:justify-start">
              <Button
                variant="link"
                onClick={() =>
                  window.open("https://www.instagram.com/unasfest/", "_blank")
                }
                className="p-0 hover:scale-110 duration-200"
              >
                <img
                  src="/instagram.png"
                  alt="instagram account"
                  width={30}
                  className="aspect-square max-h-[30px]"
                />
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open("https://www.youtube.com/@unasfest", "_blank")
                }
                className="p-0 hover:scale-110 duration-200"
              >
                <img
                  src="/youtube.png"
                  alt="youtube channel"
                  width={40}
                  className="aspect-auto max-h-[30px]"
                />
              </Button>
              <Button
                variant="link"
                onClick={() =>
                  window.open("https://www.tiktok.com/@unasfest", "_blank")
                }
                className="p-0 hover:scale-110 duration-200"
              >
                <img
                  src="/tiktok.png"
                  alt="tiktok"
                  width={30}
                  className="aspect-square max-h-[30px]"
                />
              </Button>
            </div>
            <p className="hidden lg:block text-xl font-normal leading-6 text-[#333]">
              @Copyright UnasFest 2023
            </p>
          </div>

          <div className="hidden lg:inline-block lg:w-[20%]">
            <h1 className="text-2xl font-bold leading-7 text-[#333] pb-6">
              Seputar Website
            </h1>
            <nav>
              <ul className="flex flex-col gap-6 text-xl font-medium leading-6 text-[#33333399]">
                <Link
                  to="beranda"
                  smooth={false}
                  offset={-1000}
                  className="w-fit duration-200 cursor-pointer hover:border-b-4 hover:border-b-active-blue hover:text-active-blue"
                >
                  Beranda
                </Link>
                <Link
                  to="kegiatan"
                  smooth={false}
                  offset={-100}
                  className="w-fit duration-200 cursor-pointer hover:border-b-4 hover:border-b-active-blue hover:text-active-blue"
                >
                  kompetisi
                </Link>
                <Link
                  to="/galeri"
                  smooth={false}
                  offset={-100}
                  className="w-fit duration-200 cursor-pointer hover:border-b-4 hover:border-b-active-blue hover:text-active-blue"
                >
                  Galeri
                </Link>
                <Link
                  to="kegiatan"
                  smooth={false}
                  offset={-100}
                  className="w-fit duration-200 cursor-pointer hover:border-b-4 hover:border-b-active-blue hover:text-active-blue"
                >
                  Sponsorship
                </Link>
                <Link
                  to="kegiatan"
                  smooth={false}
                  offset={-100}
                  className="w-fit duration-200 cursor-pointer hover:border-b-4 hover:border-b-active-blue hover:text-active-blue"
                >
                  Tentang Unas Fest
                </Link>
              </ul>
            </nav>
          </div>

          <div className="hidden lg:inline-block lg:w-[20%]">
            <h1 className="text-2xl font-bold leading-7 text-[#333] pb-6">
              Kompetisi
            </h1>
            <ul className="flex flex-col gap-6 text-xl font-medium leading-6 text-[#33333399]">
              <li>English Debate Competition</li>
              <li>Debat Bahasa Indonesia</li>
              <li>Seminar Nasional</li>
              <li>Lomba Karya Tulis Ilmiah</li>
            </ul>
          </div>

          <div className="px-0 text-base font-medium leading-normal lg:w-[30%] lg:text-xl">
            <h1 className="hidden text-2xl font-bold leading-7 text-[#333] lg:inline-block">
              Hubungi
            </h1>
            <div className="lg:flex hidden gap-3 justify-center py-3 lg:justify-start">
              <Mail className="inline-block lg:hidden" color="#808080" />
              <p>unasfest2023@civitas.unas.ac.id</p>
            </div>
            <p>
              Jl. Sawo Manila No.61, RT.14/RW.7, Pejaten Bar., Ps. Minggu, Kota
              Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12520
            </p>
            <div className="flex gap-3 justify-center py-3 lg:justify-start">
              <Phone className="-rotate-90 lg:hidden" color="#808080" />
              <p>+62 812 - 9190 - 0916</p>
            </div>
            <div className="lg:hidden flex gap-3 justify-center py-3 lg:justify-start">
              <Mail className="inline-block lg:hidden" color="#808080" />
              <p>unasfest2023@gmail.com</p>
            </div>
            <div className="lg:hidden lg:text-start">
              <p className="text-text-color-1 text-base leading-normal py-6">
                Follow Us on
              </p>
              <div className="w-full flex justify-center items-center gap-[18px] pb-8">
                <Button
                  variant="link"
                  onClick={() =>
                    window.open("https://www.instagram.com/unasfest/", "_blank")
                  }
                  className="p-0 hover:scale-110 duration-200"
                >
                  <img
                    src="/instagram.png"
                    alt="instagram account"
                    width={30}
                    className="aspect-square max-h-[30px]"
                  />
                </Button>
                <Button
                  variant="link"
                  onClick={() =>
                    window.open("https://www.youtube.com/@unasfest", "_blank")
                  }
                  className="p-0 hover:scale-110 duration-200"
                >
                  <img
                    src="/youtube.png"
                    alt="youtube channel"
                    width={40}
                    className="aspect-square max-h-[30px]"
                  />
                </Button>
                <Button
                  variant="link"
                  onClick={() =>
                    window.open("https://www.tiktok.com/@unasfest", "_blank")
                  }
                  className="p-0 hover:scale-110 duration-200"
                >
                  <img
                    src="/tiktok.png"
                    alt="tiktok"
                    width={30}
                    className="aspect-square max-h-[30px]"
                  />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="w-full bg-text-color-1 flex justify-center items-center p-4 lg:hidden">
          <p className="text-text-color-4">Copyright UnasFest 2020</p>
        </CardFooter>
      </Card>
    </section>
  );
}

export default Footer;
