import React, { useContext } from "react";
import Image from "next/image";
import footerBg from "../assets/footerBg.png";
import up from "../assets/up.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import tw from "../assets/tw.png";
import yt from "../assets/yt.png";
import MobileContext from "@/utils/MobileContext";

const Footer = () => {
  const { isMobile } = useContext(MobileContext);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" flex items-center justify-center w-full  container1">
      {isMobile ? (
        <div className="w-full flex flex-col items-center justify-start inner-container p-10">
          <h1 className="contact-us-header text-xl uppercase mt-10">
            contact us
          </h1>

          <h1 className="text-xs location-title uppercase headers mt-20  ">
            location
          </h1>
          <h1 className="text-xs basic-text-1 text-center mt-10  ">
            The Chanakya Mall,LG03, Chanakyapuri,
            <br /> New Delhi, 110021, India.
            <br />
          </h1>
          <h1 className="text-xs location-title uppercase headers mt-20 ">
            contact info
          </h1>
          <h1 className="text-xs basic-text-1 text-center mt-6  ">
            Table-Reservation - 01169020000
            <br />
            Home Delivery - 01149818000 <br />
            info@royalchinadelhi.com
          </h1>
          <div className="flex flex-row items-center mt-14">
            <a href="https://www.facebook.com/royalchinadelhi">
              <Image src={fb} className=" w-3 h-6 mr-1 social-click" alt="fb" />
            </a>
            <a href="https://www.instagram.com/royalchinadelhi/">
              <Image src={ig} className="w-6 h-6 ml-10" alt="ig" />
            </a>
          </div>
          <button
            className="flex items-center justify-center mt-10"
            onClick={goToTop}
          >
            <Image
              src={up}
              alt="up-arrow"
              className="up-arrow-mobile"
              onClick={goToTop}
            />
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-start items-start inner-container w-11/12">
          <div className="flex flex-row justify-between items-center px-10 pt-20 py-10 w-full">
            <h1 className="contact-us-header text-5xl uppercase">contact us</h1>
            <button className="flex items-center justify-end" onClick={goToTop}>
              <Image
                src={up}
                alt="up-arrow"
                className="upArrow"
                onClick={goToTop}
              />
            </button>
          </div>
          <div className="w-full h-64 flex flex-row justify-start items-start mid-section">
            <section className="flex h-full w-2/5 flex-col items-start pl-6 ">
              <h1 className="text-lg location-title uppercase headers mt-8 ml-1 ">
                location
              </h1>
              <h1 className=" text-sm location-title mt-16">
                LG03, The Chanakya Mall, Chanakyapuri, <br />
                New Delhi, Delhi, 110021, India.
                <br />
                01169020000
              </h1>
            </section>
            <section className="flex h-full w-2/5 flex-col ml-4">
              <h1 className="text-lg location-title uppercase headers ml-7 mt-8">
                Contact us
              </h1>
              <h1 className="text-sm location-title mt-16 ml-1 infoText">
                info@royalchinadelhi.com
                <br />
                Home Delivery - 011 49818000
                <br />
                Table Reservation - 011 69020000
              </h1>
            </section>
            <section className="flex h-5/6 w-1/5  flex-col px-12 items-end justify-evenly">
              <a href="https://www.facebook.com/royalchinadelhi">
                <Image
                  src={fb}
                  className=" w-3 h-6 mr-1 social-click"
                  alt="fb"
                />
              </a>
              <a href="https://www.instagram.com/royalchinadelhi/">
                <Image src={ig} className="w-4 h-4" alt="ig" />
              </a>

              <Image src={tw} className="w-5 h-4" alt="tw" />
              <Image src={yt} className="w-5 h-4" alt="yt" />
            </section>
          </div>
        </div>
      )}

      <Image
        src={footerBg}
        alt="background Image"
        className="backgroundImage1"
        priority={true}
      />
    </div>
  );
};

export default Footer;
