import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import MobileContext from "@/utils/MobileContext";
const Header = () => {
  const route = useRouter();
  let { isMobile } = useContext(MobileContext);
  const [open, setOpen] = useState(false);

  const invertToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header>
      <div
        className="w-full  px-10 sm:px-14   py-4 lg:py-6 top-0 left-0 absolute flex flex-row align-center justify-between"
        id="container"
      >
        <div className="w-28 h-10 sm:w-40 md:w-40 lg:w-40 mt-2 sm:mt-0">
          <Link href="/">
            <Image src={logo} alt="logo image" className="logoImage" />
          </Link>
        </div>
        {1 ? (
          <div
            className="w-10 h-10 mt-1 ml-2 flex flex-col items-center justify-center "
            onClick={invertToggle}
          >
            <div className=" w-8 h-0.5 hamburger-menu"></div>
            <div className=" w-8 h-0.5 hamburger-menu mt-1"></div>
            <div className=" w-8 h-0.5 hamburger-menu mt-1"></div>
            <div className=" w-8 h-0.5 hamburger-menu mt-1"></div>
          </div>
        ) : (
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
        )}
        {/* <div className="fixed left-0 top-0 w-full h-screen bg-black overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="flex  py-4 px-10">
              <div className="w-28 h-10 sm:w-40 md:w-40 lg:w-40 mt-2 sm:mt-0">
                <Link href="/">
                  <Image src={logo} alt="logo image" className="logoImage" />
                </Link>
              </div>
              <div
                className="w-10 h-10 mt-1 ml-2  justify-center items-center flex flex-col"
                onClick={invertToggle}
              >
                <div className="golden">&times;</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
