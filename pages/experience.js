import Layout from "@/components/layout";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import expbg from "../assets/expbg.png";
import expMenu1 from "../assets/expMenu1.png";
import expMenu3 from "../assets/exp3.webp";
import exp4 from "../assets/exp4.webp";
import exp5 from "../assets/exp5.png";
import exp6 from "../assets/exp6.png";
import exp7 from "../assets/exp7.png";
import miniUrn from "../assets/miniurn.png";
import exp9 from "../assets/exp9.png";
import jhaalar from "../assets/jhaalar.png";
import rightLong from "../assets/right-long.png";
import exp10 from "../assets/exp10.png";
import quotes from "../assets/quotes.png";
import jhaalarM from "../assets/jhaalarM.png";
import MobileContext from "@/utils/MobileContext";
export default function Experience() {
  const { isMobile } = React.useContext(MobileContext);
  return (
    <Layout>
      <div className="layout">
        <div className="w-full exp-hero">
          {isMobile ? (
            <div className="w-full flex flex-col items-center  -mt-20">
              <h1 className="text-sm flex-wrap text-white uppercase text-center -ml-10  book-text">
                A timeless symphony
                <br /> of bold colors,
                <br /> Chinese values, and
                <br /> striking prints
                <br /> reimagined forms the
                <br />
                backbone of this high-
                <br />
                quality Cantonese <br />
                food restaurant,
                <br /> Royal China.
              </h1>
              <div className="py-2 pl-4 pr-12 mt-24  block justify-center items-center location-box-outer">
                <h3 className=" text-sm uppercase btn-text golden">
                  book a table now
                </h3>
              </div>
            </div>
          ) : (
            <h1 className="text-3xl text-white uppercase px-28 book-text">
              A timeless symphony of bold colors,
              <br /> Chinese values, and striking prints
              <br /> reimagined forms the backbone of
              <br /> this high-quality Cantonese food
              <br /> restaurant, Royal China.
            </h1>
          )}
        </div>
        <div className="overlay" />
        <Image
          src={expbg}
          alt="exp-bg"
          className="backgroundImage"
          priority={true}
        />
      </div>
      {isMobile ? (
        <section className="bg-black w-full flex flex-col items-center -mt-40 ">
          <h1 className="text-3xl uppercase book-text text-center golden -ml-2">
            our <br /> menu
          </h1>
          <Image src={expMenu1} alt="exp-menu" priority={true} />
          <h3 className="text-sm default-text-2 golden text-center mt-14 ">
            Prepare to be transported
            <br /> to a world of culinary delight <br /> with our most delicious
            <br />
            dishes.
          </h3>
          <Image src={exp4} alt="exp-menu-2" className=" mt-24" />
          <h3 className="text-sm default-text-2 golden text-center mt-14 px-10 ">
            The crispy aromatic duck. Its lacquered, crispy skin conceals
            succulent, tender meat infused with a symphony of aromatic spices.
            Each bite offers a satisfying crunch followed by a burst of
            flavors—notes of star anise, cinnamon, and clovesintertwine with
            hints of ginger and garlic. Presented with vibrant garnishes, the
            duck is accompanied by soft, steamed pancakes and fresh vegetables,
            creating a symphony of textures and tastes. This dish is a
            masterpiece that tantalizes the senses, leaving a lingering craving
            for more.
          </h3>
          <Image src={exp10} alt="exp-4" priority={true} className="mt-24" />
          <h3 className="text-sm default-text-2 golden text-center mt-14 px-10 ">
            Our lotus root in chili oil will surely ignite your taste buds.
            Delicately crisp and tender, the lotus root slices are infused with
            fiery flavours, creating a perfect balance of heat and sweetness.
            With each bite, you experience a tantalising crunch followed by a
            silky smoothness that leaves a lasting impression on your palate.
          </h3>
          <Image src={expMenu3} alt="exp-5" priority={true} className="mt-24" />
          <h3 className="text-sm default-text-2 golden text-center mt-14 px-10 ">
            Our lotus root in chili oil will surely ignite your taste buds.
            Delicately crisp and tender, the lotus root slices are infused with
            fiery flavours, creating a perfect balance of heat and sweetness.
            With each bite, you experience a tantalising crunch followed by a
            silky smoothness that leaves a lasting impression on your palate.
          </h3>

          <div className="w-full flex flex-row items-center justify-center">
            <h3 className="text-xl golden book-text text-center mt-24 -ml-10">
              Dive into a journey
              <br /> of culinary adventure
              <br /> in every bite.
            </h3>
          </div>
          <Image src={exp5} alt="exp-menu" priority={true} className=" mt-24" />
          <h3 className="text-sm default-text-2 golden text-center mt-14 px-10 ">
            Join us for an unlimited dim sum brunch that is sure to please your
            palate.Choose from a range of Veg and Non-veg dim sums and savor a
            symphony of flavors in every steamer basket!
            <br />
            <br />
            Dimsum brunch is available Every Monday and Tuesday.
            <br />
            <br />
          </h3>
          <div className="py-2 pl-4 pr-12 mt-10  block justify-center items-center location-box-outer">
            <h3 className=" text-sm uppercase btn-text golden">
              check our menu
            </h3>
          </div>
          <Image
            src={quotes}
            alt="exp-menu"
            className=" mt-24"
            priority={true}
          />
          <h1 className="text-3xl uppercase book-text text-center golden -ml-4 mt-24">
            our <br /> space
          </h1>
          <Image src={exp7} alt="exp7" className="mt-24" />
          <h3 className="text-sm default-text-2 golden text-center mt-14 px-10 ">
            Dramatically painted in dark hues of greys and browns and wrapped
            royally with a pop of red and gold accents, the space is naturally
            flooded with sunlight by the voids created by the skylights. Small
            Zen garden spaces and red flowers on a rather withered tree
            exemplify, soften and retain the subtlety of the color palette.
          </h3>
          <div className="py-2 pl-4 pr-12 mt-20  block justify-center items-center location-box-outer">
            <h3 className=" text-sm uppercase btn-text golden">
              book a table now
            </h3>
          </div>
          <Image
            src={miniUrn}
            alt="mini"
            priority={true}
            className="mt-24 exp8-img"
          />
          <div className="w-full h-0.5 lines "></div>
          <Image src={exp9} alt="exp9" priority={true} className="mt-24" />
          <h3 className="text-sm default-text-2 golden text-center mt-14 px-10 ">
            The central area, the private dining area, and the high bar seating
            promote a multi-functional experience. All of these areas host a
            bunch of interesting and luxe chandeliers and thoughtful decor that
            add theatricality to the overall space and affirm the entire look.
          </h3>
          <h3 className="text-sm default-text-2 golden text-center mt-14 px-10 ">
            The Kitchen counter is the melange of the modern box-like metallic
            structure and curvy artefacts that keep the kitchen area open and
            yet visually separated.The space has a metallic look finish with
            vibrantly printed wallpaper that subtly co-relates to give a
            luxurious feel to the restaurant.
          </h3>
          <Image
            src={jhaalarM}
            alt="mini"
            priority={true}
            className="mt-24 jhaalarM"
          />
          <div className="w-full flex flex-row items-center justify-center overflow-hidden">
            <h3 className="text-xs def-text text-white uppercase mt-24 mb-14 text-center px-10 -ml-16 overflow-hidden">
              Come experience the
              <br /> everlasting taste of
              <br /> authenticity with a <br />
              trendy twist of flavors
              <br /> and have an evocative
              <br /> dining experience with
              <br /> a Chinese flare in the air.
            </h3>
          </div>
        </section>
      ) : (
        <section className="menu-section bg-black w-full flex flex-col px-32">
          <h1 className="text-5xl uppercase book-text golden">our menu</h1>

          <div className=" w-full flex flex-row items-center mt-10">
            <Image
              src={expMenu1}
              alt="exp-menu"
              className="mt-10 exp-menu-1"
              priority={true}
            />
            <div className="flex flex-col justify-start items-start ml-64 pl-10">
              <h3 className="text-base default-text-1 golden ">
                Prepare to be transported to a world of
                <br /> culinary delight with our most delicious
                <br /> dishes.
              </h3>
              <div className=" pl-5 pr-14 py-2 mt-20 reserve-btn -ml-4">
                <h3 className=" text-base uppercase book-text golden">
                  reserve a table
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row items-center mt-24 pb-20">
            <h3 className="text-base default-text-1 golden pl-4">
              The crispy aromatic duck. Its lacquered,
              <br /> crispy skin conceals succulent, tender meat
              <br /> infused with a symphony of aromatic spices.
              <br />
              Each bite offers a satisfying crunch followed
              <br /> by a burst of flavors—notes of star anise,
              <br /> cinnamon, and cloves intertwine with hints
              <br /> of ginger and garlic. Presented with vibrant
              <br /> garnishes, the duck is accompanied by soft,
              <br /> steamed pancakes and fresh vegetables,
              <br />
              creating a symphony of textures and tastes.
              <br /> This dish is a masterpiece that tantalizes the <br />
              senses, leaving a lingering craving for more.
            </h3>
            <Image src={exp4} alt="exp-menu-2" className=" ml-72 exp-menu-1" />
          </div>
          <div className="w-full flex flex-row items-center  px-5 mt-20">
            <Image src={exp10} alt="exp-4" className="exp-menu-5" />
            <h3 className="text-base default-text-1 golden ml-80">
              Our lotus root in chili oil will surely ignite your taste
              <br />
              buds. Delicately crisp and tender, the lotus root slices
              <br /> are infused with fiery flavours, creating a perfect
              <br /> balance of heat and sweetness. With each bite, you <br />{" "}
              experience a tantalising crunch followed by a silky smoothness
              that leaves a lasting impression on your
              <br /> palate.
            </h3>
          </div>
          <div className="w-full flex flex-row items-center justify-between mt-40">
            <h3 className="text-base default-text-1 golden pl-4 w-1/2">
              In addition to delectable dishes, our bar is stocked up with the
              finest liquor accompanied by warm hospitality to give you a taste
              of your favorite potion or a trendy cocktail.
            </h3>
            <Image src={expMenu3} alt="exp-5" className="exp5-img" />
          </div>
          <h3 className="text-6xl book-text-1 golden mt-24">
            Dive into a journey of culinary adventure in every bite.
          </h3>
          <div className="w-full flex flex-row justify-between items-end mt-24">
            <Image
              src={exp5}
              alt="exp-menu"
              priority
              className=" mt-20 exp-menu-1"
            />
            <div className="w-1/2 h-full flex flex-col pl-28">
              <h3 className="text-base default-text-2 golden">
                Join us for an unlimited dim sum brunch
                <br /> that is sure to please your palate.Choose
                <br /> from a range of Veg and Non-veg dim sums
                <br /> and savor a symphony of flavors in every
                <br /> steamer basket! <br />
                <br />
                Dimsum brunch is available Every Monday
                <br /> and Tuesday.
                <br />
                <br />
              </h3>
              <div className=" pr-8 py-1 mt-40 reserve-btn  w-64">
                <Link href="/menu">
                  <h3 className=" text-sm uppercase book-text golden">
                    check our menu
                  </h3>
                </Link>
              </div>
            </div>
          </div>

          <Image src={exp6} alt="exp-6" className=" mt-40 exp6-img" />
          <div className="w-full flex flex-col my-24">
            <h3 className=" text-5xl book-text golden uppercase">our space</h3>
            <div className=" flex flex-row items-center w-full justify-between mt-20">
              <Image src={exp7} alt="exp7" className="exp5-img" />
              <div className="flex flex-col justify-between w-1/2 items-end urn-section-1">
                <h3 className=" text-lg default-text-2 golden w-full text-justify">
                  Dramatically painted in dark hues of greys and browns and
                  wrapped royally with a pop of red and gold accents, the space
                  is naturally flooded with sunlight by the voids created by the
                  skylights. Small Zen garden spaces and red flowers on a rather
                  withered tree exemplify, soften and retain the subtlety of the
                  color palette.
                </h3>
                <Image
                  src={miniUrn}
                  alt="mini"
                  priority={true}
                  className="mt-44 exp8-img"
                />
              </div>
            </div>
          </div>
          <Image src={exp9} alt="exp9" priority={true} className="mt-24" />
          <div className="w-full h-96 mt-10 items-center justify-between flex flex-row">
            <h3 className="text-base default-text-2 golden w-2/5">
              The central area, the private dining area, and the high bar
              seating promote a multi-functional experience. All of these areas
              host a bunch of interesting and luxe chandeliers and thoughtful
              decor that add theatricality to the overall space and affirm the
              entire look.
            </h3>
            <h3 className="text-base default-text-2 golden w-2/5">
              The Kitchen counter is the melange of the modern box-like metallic
              structure and curvy artefacts that keep the kitchen area open and
              yet visually separated.The space has a metallic look finish with
              vibrantly printed wallpaper that subtly co-relates to give a
              luxurious feel to the restaurant.
            </h3>
          </div>
          <Image src={jhaalar} alt="jhaalar" priority={true} />
          <h3 className="text-2xl book-text text-white uppercase w-4/5 -mt-52">
            Come experience the everlasting
            <br /> taste of authenticity with a<br /> trendy twist of flavors
            and have
            <br /> an evocative dining experience
            <br /> with a Chinese flare in the air.
          </h3>

          <div className="w-full h-40  my-24 items-center">
            <div className="book-btn w-80  py-2  px-5 mt-10">
              <h3 className=" text-base uppercase book-text">
                Book a table now
              </h3>
              <Image src={rightLong} alt="right" priority className="ml-10" />
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
