import Layout from "@/components/layout";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import MobileContext from "@/utils/MobileContext";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";
import heroLogo from "../assets/herologo.png";
import aboutUs from "../assets/aboutus.svg";
import images from "../assets/images2.png";
import jhaalarM from "../assets/jhaalarM.png";
import jhaalar from "../assets/jhaalar.png";
import awards from "../assets/awards.png";
import lota from "../assets/lota.png";
import food from "../assets/food.png";
import awd1 from "../assets/awd1.png";
import awd2 from "../assets/awd2.png";
import awd3 from "../assets/awd3.png";
import awd4 from "../assets/awd4.png";
import awd5 from "../assets/awd5.png";
import awd6 from "../assets/awd6.png";
import awd7 from "../assets/awd7.png";
import awd8 from "../assets/awd8.png";
import awd9 from "../assets/awd9.png";
import awd10 from "../assets/awd10.png";
import awd11 from "../assets/awd11.png";
import m01 from "../assets/01.png";
import m02 from "../assets/02.png";
import m03 from "../assets/03.png";
import m04 from "../assets/04.png";
import m05 from "../assets/05.png";
import m06 from "../assets/06.png";
import m07 from "../assets/07.png";
import m08 from "../assets/08.png";
import m09 from "../assets/09.png";
import m10 from "../assets/10.png";
import m11 from "../assets/11.png";
import m12 from "../assets/12.png";
import m13 from "../assets/13.png";

import downArrow from "../assets/downArrow.png";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
export default function Home() {
  const { isMobile } = useContext(MobileContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [main, setMain] = useState(0);

  const images = [
    awd1,
    awd2,
    awd3,
    awd4,
    awd5,
    awd6,
    awd7,
    awd8,
    awd9,
    awd10,
    awd11,
  ];

  const mimages = [m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11];

  const texts = [
    {
      id: 1,
      title: "Times Food Awards",
      text1: "(Delhi and NCR)",
      text2: "Finest Chinese (2016)",
    },
    {
      id: 2,
      title: "Zomato",
      text1: "(Delhi and NCR)",
      text2: "Zomato User's choice for Asian & Oriental (2013)",
    },
    {
      id: 3,
      title: "Vir Sanghir's Award",
      text1: "(Delhi and NCR)",
      text2: "Best Chinese (Stand-alone) restaurant (2013)",
    },
    {
      id: 4,
      title: "Times Food Awards 2012",
      text1: "(Delhi and NCR)",
      text2: "Best Chinese in Delhi",
    },
    {
      id: 5,
      title: "Mouthshut.com",
      text1: "(Delhi and NCR)",
      text2: "Best Chinese Cuisine in Delhi (2014-15)",
    },
    {
      id: 6,
      title: "Mouthshut.com",
      text1: "(Delhi and NCR)",
      text2: "Best Chinese Cuisine in Delhi (2013)",
    },
    {
      id: 7,
      title: "Delhi Gourmet Club 2012",
      text1: "(Delhi and NCR)",
      text2: "Best Chinese in Delhi",
    },
    {
      id: 8,
      title: "The Week",
      text1: "(Delhi and NCR)",
      text2: "Best Chinese in Delhi",
    },
    {
      id: 9,
      title: "HT City Top Table 2011",
      text1: "(Delhi and NCR)",
      text2: "City's finest Pan Asian/Chinese Restaurant",
    },
    {
      id: 10,
      title: "Times Food Awards 2014",
      text1: "(Delhi and NCR)",
      text2: "Best Chinese in Delhi",
    },
    {
      id: 11,
      title: "Times Food Awards 2013",
      text1: "(Delhi and NCR)",
      text2: "Best Chinese in Delhi",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      setMain((prevSlide) => (prevSlide + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, texts.length]);

  function scrollToSection() {
    const targetSection = document.getElementById("targetSection");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  React.useEffect(() => {
    const sliderContent = document.querySelector(".slider-content");
    const imagesGallery = document.querySelectorAll(".imagesGallery");
    let currentImageIndex = 0;

    const transitionDuration = 14000; // 14 seconds (should match animation duration)

    const transition = () => {
      currentImageIndex = (currentImageIndex + 1) % imagesGallery.length;
      sliderContent.style.transition = "transform 0.1s";
      sliderContent.style.transform = `translateX(-${
        currentImageIndex * 100
      }%)`;

      setTimeout(() => {
        sliderContent.style.transition = "transform 0s";
        sliderContent.style.transform = "translateX(0)";
        setTimeout(() => {
          sliderContent.style.transition = `transform ${
            transitionDuration / 1000
          }s linear`;
        }, 10);
      }, 100);
    };

    const interval = setInterval(transition, transitionDuration);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout>
      <div className="layout">
        <div className=" w-full heroSection-1  lg:overflow-hidden">
          <Image
            src={heroLogo}
            alt="logo image"
            className="logoMain lg:mt-20"
            priority={true}
          />
          {isMobile ? (
            <div
              className="w-full h-52 mt-20 flex flex-row justify-center items-center cursor-pointer"
              onClick={scrollToSection}
            >
              <div className=" w-14 h-28 scroll-down flex justify-center items-center">
                <Image
                  src={downArrow}
                  alt="downArrow"
                  className="down-arrow bounce"
                />
              </div>
            </div>
          ) : (
            <div className="w-full h-52 mt-20 flex flex-row justify-center items-center">
              <div
                className="w-14 h-28 scroll-down flex justify-center items-center cursor-pointer"
                onClick={scrollToSection}
              >
                <Image
                  src={downArrow}
                  alt="downArrow"
                  className="down-arrow bounce"
                />
              </div>
            </div>
          )}
          {isMobile ? null : (
            <Link
              href="/menu"
              className="flex flex-row w-full skipContainer mt-24 cursor-pointer"
            >
              <h1 className="hero-text mx-auto text-base skipText">see menu</h1>
            </Link>
          )}
        </div>

        <div className="overlay" />

        <div className="video-background">
          <video autoPlay loop muted playsInline className="video-player">
            <source src="/video.webm" type="video/webm" />
          </video>
        </div>
      </div>
      <section
        id="targetSection"
        className="flex flex-col lg:flex-row w-full lg:pl-4 lg:mt-10 about-us justify-start items-center lg:justify-evenly"
      >
        {isMobile ? (
          <>
            <h3 className="text-4xl aboutUsHeader text-center -ml-5 mt-10">
              About
              <br /> us
            </h3>
            <Image
              src={aboutUs}
              alt="about-us"
              className=" mt-10 aboutUsImgMobile"
            />
            <h2 className="aboutUsText text-base mt-14 text-center lg:text-left">
              Experience an everlasting taste of authenticity with a regal and
              impeccable dining experience at Royal China. Serving traditional
              Cantonese dishes with a modern twist paired with intriguing
              cocktails is sure to transport you to a state of comfort and
              bliss.
            </h2>
            <Link
              href="/experience"
              className="explore-btn w-40 h-10 mt-20 lg:mt-0 cursor-pointer"
            >
              <h1 className="explore-text text-base">explore</h1>
            </Link>
          </>
        ) : (
          <>
            <Image src={aboutUs} alt="about-us" className="aboutUsImg" />

            <div className="flex flex-col w-1/2 aboutUsInner">
              <h1 className="text-7xl aboutUsHeader">about us</h1>
              <h2 className="aboutUsText text-base mt-14">
                Experience an everlasting taste of authenticity with a regal and
                impeccable dining experience at Royal China. Serving traditional
                Cantonese dishes with a modern twist paired with intriguing
                cocktails is sure to transport you to a state of comfort and
                bliss.
              </h2>

              <Link
                href="/experience"
                className="explore-btn w-40 h-10 cursor-pointer"
              >
                <h1 className="explore-text text-base">explore</h1>
              </Link>
            </div>
          </>
        )}
      </section>
      <div className="w-full flex items-center flex-row overflow-hidden">
        <div className="marquee-container mt-32 lg:mt-44 flex flex-row">
          <div className="slider-content flex flex-row">
            <Image src={images} alt="images" className="imagesGallery" />
            <Image src={bg2} alt="images" className="ml-1 imagesGallery" />
            <Image src={bg3} alt="images" className="ml-1 imagesGallery" />
            <Image src={bg4} alt="images" className="ml-1 imagesGallery" />
          </div>
        </div>
      </div>

      <section className="w-full flex flex-col items-center lg: -mt-20">
        {isMobile ? (
          <>
            <Image
              src={jhaalarM}
              alt="jhaalar"
              priority={true}
              className="mt-28 jhaalarM"
            />
            <h1 className="text-white def-text text-xs text-center mt-28 -ml-10">
              A timeless symphony
              <br /> of bold colors, Chinese
              <br /> values, and striking prints
              <br />
              reimagined forms the
              <br /> backbone of this high-
              <br />
              quality Cantonese food
              <br />
              restaurant, Royal China.
            </h1>
          </>
        ) : (
          <>
            <Image src={jhaalar} alt="jhaalar" className=" h-96 jhaalar" />
            <h1 className="white-text text-3xl">
              A timeless symphony of bold colors, Chinese values, and striking
              prints reimagined forms the backbone of <br />
              this high-quality Cantonese food restaurant, Royal China.
            </h1>
          </>
        )}
      </section>

      {isMobile ? (
        <div
          className=" bg-red-200 w-full h-36 mt-20"
          style={{ position: "relative" }}
        >
          {mimages.map((item, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                height: "100%",
                display: index === currentSlide ? "block" : "none",
                transition: "opacity 1s ease-in-out",
                position: "absolute",
                opacity: index === currentSlide ? 1 : 0,
                top: 0,
                left: 0,
              }}
            >
              <Image
                src={item}
                priority={true}
                alt="awd1"
                className="awd-images"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full bg-red-50  mt-24 lg:mt-52 awards-section flex flex-row">
          <div className="flex flex-row w-1/2 justify-center items-center awards-left">
            <div className="w-72 h-72 z-10 slider">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={images[currentSlide]}
                    alt={`Image ${currentSlide + 1}`}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            {/* <div className="w-72 h-72 bg-white z-10 slider">
              {images.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: index === currentSlide ? "block" : "none",
                    transition: "opacity 1s ease-in-out",
                    position: "absolute",
                    opacity: index === currentSlide ? 1 : 0,
                    top: 0,
                    left: 0,
                  }}
                >
                  <Image
                    src={item}
                    priority={true}
                    alt="awd1"
                    className="awd-images"
                  />
                </div>
              ))}
            </div> */}
          </div>
          <div className="flex flex-col justify-center items-start w-1/2  awards-right">
            <div className="w-full z-10 slider -mt-10">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    className=" px-10"
                  >
                    <h3 className="title-text text-6xl h-10 mt-10 ml-20 ">
                      {texts[currentSlide].title}
                    </h3>
                    <div className=" flex flex-col items-start justify-start mt-72 ml-5">
                      <h3 className="sub-text text-2xl">
                        {texts[currentSlide].text1}
                      </h3>
                      <h3 className="sub-text text-xl mt-1">
                        {texts[currentSlide].title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}

      <div style={{ height: "14vh", backgroundColor: "black" }} />
      <section className="fine-dine-section">
        {isMobile ? (
          <>
            <div className=" w-full flex flex-col items-center">
              <Image src={lota} alt="lota" className=" ml-2  lota-mobile" />
              <h1 className="text-white text-xs -ml-8 mt-10 def-text text-center">
                A fine dining chinese
                <br /> restaurant & bar.
              </h1>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                minHeight: "15%",
                position: "relative",
              }}
            >
              <Image src={lota} alt="lota" className="lota" />
              <h1 className="white-text1 text-2xl -mt-12">
                A fine dining chinese restaurant & bar.
              </h1>
            </div>
          </>
        )}

        {isMobile ? (
          <div className="w-full flex flex-col  items-center mt-28">
            <Image src={food} alt="food" className="food-mobile" />
            <h1 className=" text-sm def-text golden text-center -ml-12 ">
              Good food, great <br />
              company, and endless <br /> laughter - the perfect
              <br /> recipe for a memorable
              <br /> dining experience at <br /> Royal China!
            </h1>
          </div>
        ) : (
          <div className="flex flex-row items-center food lg:-mt-2">
            <Image src={food} alt="food" className="foodImg" />
            <h1 className=" text-2xl hero-text foodText">
              Good food, great <br />
              company, and endless laughter - the perfect recipe for a memorable
              dining experience at Royal China!
            </h1>
          </div>
        )}

        {isMobile ? (
          <div className="w-11/12 flex flex-col items-center p-2 h-auto mt-32 location-box-outer">
            <div className="w-full h-full flex flex-col items-center p-2 location-box-outer">
              <div className="w-full h-60  mt-4">
                <iframe
                  style={{ width: "100%", height: "100%", border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5160618231757!2d77.18816327621589!3d28.584291286268364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cf69b24ac3%3A0xe2bcd9f8a25819c8!2sRoyal%20China!5e0!3m2!1sen!2sin!4v1686037107876!5m2!1sen!2sin"
                  loading="lazy"
                ></iframe>
              </div>
              <h3 className="text-3xl demo-text-2 golden -ml-8 mt-10">
                Locate Us
              </h3>
              <h3 className="mt-10 text-sm static-text golden pl-2 text-center -ml-1">
                The Chanakya Mall, <br />
                LG03, Chanakyapuri, New Delhi <br />
                110021, India <br />
              </h3>
              <div className="py-2 pl-4 pr-10 mt-10  mb-10 block justify-center items-center location-box-outer">
                <h3 className=" text-sm uppercase btn-text golden">
                  get direction
                </h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-10/12 flex flex-row p-4 h-auto mt-32 location-box-outer">
            <div className="w-full h-full flex flex-row items-center p-5 location-box-outer">
              <div className="w-2/3 flex flex-col items-start justify-start px-20 py-5 ">
                <h3 className="text-6xl  demo-text-1 golden">Locate Us</h3>
                <h3 className="mt-10 text-lg static-text golden pl-2">
                  LG03, The Chanakya Mall, <br />
                  Chanakyapuri, New Delhi, Delhi <br />
                  110021, India <br />
                  New Delhi <br />
                  0119020000
                </h3>
                <div className="py-2 pl-4 pr-11 mt-10 block justify-center items-center location-box-outer">
                  <h3 className=" text-base uppercase btn-text golden">
                    get direction
                  </h3>
                </div>
              </div>
              <div className="w-1/3 h-11/12 h-5/6 pr-10">
                <iframe
                  style={{ width: "100%", height: "100%", border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5160618231757!2d77.18816327621589!3d28.584291286268364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cf69b24ac3%3A0xe2bcd9f8a25819c8!2sRoyal%20China!5e0!3m2!1sen!2sin!4v1686037107876!5m2!1sen!2sin"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="w-full h-80 lg:h-40 bg-black" />
    </Layout>
  );
}
