import graphicLogo from "@/assets/logo/graphic-logo.png";
import unasLogo from "@/assets/logo/logo-unasfest.png";

function Navbar() {
  return (
    <header className="w-screen h-[80px] fixed z-50 bg-white border-b-2 border-solid border-[rgba(0, 0, 0, 0.10)]">
      <nav className="w-3/4 max-w-[1440px] h-full flex items-center justify-between gap-10 m-auto">
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
            <li>Beranda</li>
            <li>Lomba</li>
            <li>Galeri</li>
            <li>Sponsorship</li>
            <li>Ranking</li>
            <li>Tentang</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
