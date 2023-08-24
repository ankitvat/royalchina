import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useRouter } from "next/router";

const Header = () => {
  const route = useRouter();

  return (
    <header>
      <div
        className="w-full px-14 py-6 top-0 left-0 absolute flex flex-row align-center justify-between"
        id="container"
      >
        <div className="w-40 h-10">
          <Link href="/">
            <Image src={logo} alt="logo image" className="logoImage" />
          </Link>
        </div>

        <nav className=" flex flex-row justify-evenly items-center  w-2/4 ">
          <Link href="/menu">
            <button
              className="py-2 "
              style={{
                borderBottom:
                  route?.pathname === "/menu" ? "2px solid #E5BC79" : "none",
              }}
            >
              <h3 className="mx-4 navText text-xs" key="menu">
                Menu
              </h3>
            </button>
          </Link>

          <Link href="/experience">
            <button
              className="py-2 "
              style={{
                borderBottom:
                  route?.pathname === "/experience"
                    ? "2px solid #E5BC79"
                    : "none",
              }}
            >
              <h3 className="mx-4 navText text-xs">the experience</h3>
            </button>
          </Link>

          <Link href="/catering">
            <button
              className="py-2 "
              style={{
                borderBottom:
                  route?.pathname === "/catering"
                    ? "2px solid #E5BC79"
                    : "none",
              }}
            >
              <h3 className="mx-4 navText text-xs">catering</h3>
            </button>
          </Link>

          <h1 className="nav-btn text-xs px-2 py-2">order online</h1>
        </nav>
      </div>
    </header>
  );
};

export default Header;
