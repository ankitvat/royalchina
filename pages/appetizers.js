import Layout from "@/components/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import menuback from "../assets/menuBack.png";
import menubb from "../assets/menubb.png";

export default function Appetizers() {
  const appetizers1 = React.useMemo(
    () => [
      {
        title: "Crispy Aromatic Duck",
        text1: "Served with Spring Onion, Cucumber and Pancakes",
      },
      {
        title: "Roasted Peking Duck",
        text1: "Served with Spring Onion, Cucumber and Pancakes",
      },
      {
        title: "Crispy Salt and pepper lobster",
      },
      {
        title: "salt and pepper prawns",
      },
      {
        title: "wasabi prawns",
      },
      {
        title: "smoked shredded chicken",
      },
      {
        title: "Mongolian fried chicken",
      },
      {
        title: "steamed prawns with garlic",
      },
      {
        title: "bacon wrapped prawns",
      },

      {
        title: "crispy butterfly prawns",
      },
      {
        title: "pork spare ribs in",
        text1: "1. Szechuan and dry chilli sauce",
        text2: "2. black pepper sauce",
        text3: "3. barbeque sauce ",
      },
      {
        title: "dim sum platter",
        both: true,
      },
      {
        title: "golden fried prawns",
      },
      {
        title: "chicken lettuce wrap",
      },
      {
        title: "salt and pepper squid",
      },
    ],
    []
  );

  const appetizers2 = React.useMemo(
    () => [
      {
        title: "sesame prawn toast",
      },
      {
        title: "satay chicken",
      },
      {
        title: "Sauteed asparagus",
        text1: "Served with Spring Onion, Cucumber and Pancakes",
        veg: true,
      },
      {
        title: "fried “classic” soft corn curd",
        veg: true,
      },
      {
        title: "corn szechuan style",
        veg: true,
      },
      {
        title: "crispy seaweed",
        veg: true,
      },
      {
        title: "silken tofu tossed in burnt garlic",
        veg: true,
      },
      {
        title: "vegetable lettuce wrap",
        veg: true,
      },
      {
        title: "sesame potato toast",
        veg: true,
      },
      {
        title: "salt and pepper vegetables",
        veg: true,
      },
      {
        title: "edamame in chilli garlic",
        veg: true,
      },
      {
        title: "shanghai cucumber salad",
        veg: true,
      },
    ],
    []
  );

  return (
    <Layout>
      <div className="layout overflow-hidden">
        <div className="menu-hero-section px-14">
          <Link
            className="w-full flex justify-center items-center nav-links my-3 py-2 mt-10"
            href="/"
          >
            <h3 className="nav-text text-sm uppercase">order online</h3>
          </Link>
          <Link
            className="w-full flex justify-center items-center nav-links my-3 py-2 mt-4"
            href="/menu"
          >
            <h3 className="nav-text text-sm uppercase">menu</h3>
          </Link>
        </div>
        <div className="overlay" />
        <Image
          src={menuback || menubb}
          alt="exp-bg"
          className="backgroundImage"
          priority={true}
        />
      </div>
      <div className="rest-section overflow-hidden -mt-20">
        <section className="w-full px-10 flex flex-col items-center">
          <h3 className="text-lg uppercase text-center header-menu">
            appetizers
          </h3>
          <div className="w-full  mt-10">
            {appetizers1?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-start -ml-2"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text my-4 px-4 -ml-4 text-center">
                      {item?.title}
                    </h3>
                    {item?.both ? (
                      <>
                        <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                          <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                        </div>
                        <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                          <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>

          <h3 className="text-lg uppercase text-center header-menu mt-24">
            steamed - <br /> vegetarian
          </h3>
          {appetizers2?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col items-center justify-start -ml-2"
              >
                <div
                  key={index}
                  className="flex flex-row justify-start items-center mt-6  text-left"
                >
                  <h3 className="text-sm capitalize text-white default-text my-4 px-10 -ml-10 text-center">
                    {item?.title}
                  </h3>
                  {item?.both ? (
                    <>
                      <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                        <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                      </div>
                      <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                        <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                      </div>
                    </>
                  ) : null}
                </div>

                <h3 className="text-xs capitalize mobile-text text-center w-1/2 -ml-4 ">
                  {item?.text1}
                </h3>
                <h3 className="text-xs capitalize mobile-text text-center -ml-4">
                  {item?.text2}
                </h3>
                <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                  {item?.text3}
                </h3>
              </div>
            );
          })}
        </section>
        <div className="w-full h-40 bg-black"></div>
      </div>
    </Layout>
  );
}
