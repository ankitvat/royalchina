import Layout from "@/components/layout";
import Image from "next/image";
import { useContext } from "react";
import MobileContext from "@/utils/MobileContext";
import bg from "../assets/bg.png";
import heroLogo from "../assets/herologo.png";
import aboutUs from "../assets/aboutus.svg";
import images from "../assets/images2.png";
import jhaalarM from "../assets/jhaalarM.png";
import jhaalar from "../assets/jhaalar.png";
import awards from "../assets/awards.png";
import lota from "../assets/lota.png";
import food from "../assets/food.png";
import downArrow from "../assets/downArrow.png";

export default function Home() {
  const { isMobile } = useContext(MobileContext);
  return (
    <Layout>
      <div className="layout">
        <div className=" w-full heroSection">
          <Image
            src={heroLogo}
            alt="logo image"
            className="logoMain"
            priority={true}
          />
          {isMobile ? (
            <div className="w-full h-52 mt-20 flex flex-row justify-center items-center">
              <div className=" w-14 h-28 scroll-down flex justify-center items-center">
                <Image
                  src={downArrow}
                  alt="downArrow"
                  className="down-arrow bounce"
                />
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-row justify-around w-1/3 my-24">
                <h1 className="hero-text text-xl white">reservation</h1>
                <h1 className="hero-text text-xl">delivery</h1>
              </div>
              <div className="flex flex-row items-center w-2/3 dateTime">
                <div className="flex flex-row justify-between items-center h-10 px-4 left-box">
                  <h1 className="date-text text-xs">select date </h1>
                  {/* <ReactDatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} /> */}
                </div>
                <div className="flex flex-row items-center h-10 px-4 right-box">
                  <h1 className="date-text text-xs">time</h1>
                  {/* <input
          type="time"
          id="timeInput"
          placeholder='Time'
          value={selectedTime}
          onChange={handleTimeChange}
        /> */}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="overlay" />

        <Image
          src={bg}
          alt="background Image"
          className="backgroundImage"
          priority
        />
        {isMobile ? null : (
          <div className="flex flex-row w-full skipContainer">
            <h1 className="hero-text mx-auto text-base skipText">
              Skip to see menu
            </h1>
          </div>
        )}
      </div>
      <section className="flex flex-col lg:flex-row w-full lg:pl-4 about-us justify-start items-center lg:justify-evenly">
        {isMobile ? (
          <>
            <h3 className="text-4xl aboutUsHeader text-center -ml-4">
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
            <div className="explore-btn w-40 h-10 mt-20 lg:mt-0">
              <h1 className="explore-text text-base">explore</h1>
            </div>
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

              <div className="explore-btn w-40 h-10">
                <h1 className="explore-text text-base">explore</h1>
              </div>
            </div>
          </>
        )}
      </section>
      <Image
        src={images}
        alt="images"
        className=" mt-32 lg:mt-64 imagesGallery"
      />
      <section className="w-full flex flex-col items-center">
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
              prints reimagined forms the backbone of this high-quality
              Cantonese food restaurant, Royal China.
            </h1>
          </>
        )}
      </section>
      <Image
        src={awards}
        alt="awards"
        className=" mt-24 lg:mt-72 imagesGallery"
      />
      <div style={{ height: "14vh", backgroundColor: "black" }} />
      <section className="fine-dine-section">
        {isMobile ? (
          <>
            <div className=" w-full flex flex-col items-center">
              <Image src={lota} alt="lota" className=" ml-2 lota-mobile" />
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
                height: "15%",
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
          <div className="flex flex-row items-center food">
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
