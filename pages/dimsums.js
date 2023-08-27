import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import nextBao from "../assets/nextBao.png";
import menubb from "../assets/menubb.png";

export default function Dimsums() {
  const steamedNonVeg = React.useMemo(
    () => [
      "Lobster and Caviar Dumpling Siu",
      "Mai Dumpling (Thicken D Shrimp)",
      "Prawn Har Gow Dumpling",
      "Prawn and Chive Dumpling",
      "Prawn Black Pepper Dumpling",
      "Seafood Dumpling in Chilli Oil",
      "Prawn and Mushroom Dumpling",
      "Peking Duck Dumpling",
      "Chicken Dumpling in Chilli Oil",
      "Poached Chicken Dumpling in Soya Chilli",
      "Xiao Long Bao (Chicken Shanghai Soup Dumpling)",
      "Sticky Rice in Banana Leaf with Chicken",
      "Steamed Chicken Wonton in Soya Chilli",
      "Chicken and Chive Dumpling",
      "Spare Ribs in Black Bean Sauce",
    ],
    []
  );

  const steamedVeg = React.useMemo(
    () => [
      "Truffle and Edamame Dumpling",
      "Wild Mushroom Crystal Dumpling",
      "Steamed Wonton Soya Chilli",
      "Steamed Vegetable Dumpling with Coriander",
      "Crystal Dumpling",
      "Corn and Waterchestnut Dumpling",
      "Sticky Rice in Banana Leaf",
      "Truffle Water Chestnut and Sweet Pea Dumpling",
      "Turnip and Chive Chilli Oil Dumpling",
      "Black Mushroom Dumpling",
      "Spinach and Cheese Dumpling",
      "Vegetable and Chive Dumpling",
    ],
    []
  );

  const bao = React.useMemo(
    () => [
      {
        title: "Char Siu (Pork)",
        veg: false,
      },
      {
        title: "Spicy Chicken Bao (Pan Fried)",
        veg: false,
      },
      {
        title: "Vegetable Mushroom Bao",
        veg: true,
      },
      {
        title: "Pan Fried Vegetable Bao",
        veg: true,
      },
      {
        title: "Steamed Bao",
        veg: true,
      },
    ],
    []
  );

  const baked = React.useMemo(
    () => [
      {
        title: "Roast Pork Puff",
        veg: false,
      },
      {
        title: "Roast Chicken Puff",
        veg: false,
      },
      {
        title: "Fried Prawn Cigars",
        veg: false,
      },
      {
        title: "Fried Prawn Dumpling with Coriander",
        veg: false,
      },
      {
        title: "Fried Chicken Wonton",
        veg: false,
      },
      {
        title: "Pan Fried Chicken Gyoza",
        veg: false,
      },
      {
        title: "Crispy Duck Spring Roll",
        veg: false,
      },
      {
        title: "Mock Duck Puff",
        veg: false,
      },
      {
        title: "Turnip Cake with Burnt Garlic",
        veg: true,
      },
      {
        title: "Pan Fried Vegetable Gyoza",
        veg: true,
      },
      {
        title: "Vegetable Spring Roll",
        veg: true,
      },
      {
        title: "Vegetable Fried Wanton",
        veg: true,
      },
    ],
    []
  );

  const fun = React.useMemo(
    () => [
      {
        title: "Prawn Cheung Fun",
        veg: false,
      },
      {
        title: "Prawn Cheung Fun in Chilli Oil",
        veg: false,
      },
      {
        title: "Fried Prawn Cheung Fun",
        veg: false,
      },
      {
        title: "Chicken and Asparagus Cheung Fun",
        veg: false,
      },
      {
        title: "Roast Pork Cheung Fun",
        veg: false,
      },
      {
        title: "Vegetable Cheung Fun",
        veg: true,
      },
      {
        title: "Vegetable Cheung Fun in Chilli Oil",
        veg: true,
      },
      {
        title: "Vegetable Asparagus and Shitake Cheung Fun",
        veg: true,
      },
      {
        title: "Three Style Mushroom Cheung Fun",
        veg: true,
      },
      {
        title: "Fried Dough Cheung Fun",
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
          src={menubb}
          alt="exp-bg"
          className="backgroundImage"
          priority={true}
        />
      </div>
      <div className="rest-section overflow-hidden -mt-20">
        <section className="w-full px-10 flex flex-col items-center">
          <h3 className="text-lg uppercase text-center header-menu">
            steamed - non <br /> vegetarian
          </h3>
          <div className="w-full px-10 mt-10">
            {steamedNonVeg?.map((item, index) => {
              return (
                <h3
                  key={index}
                  className="text-sm text-white text-center default-text my-6 -ml-1 w-11/12"
                >
                  {item}
                </h3>
              );
            })}
          </div>
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            steamed - <br /> vegetarian
          </h3>
          <div className="w-full px-10 mt-10">
            {steamedVeg?.map((item, index) => {
              return (
                <h3
                  key={index}
                  className="text-sm text-white text-center default-text my-6 -ml-1 w-11/12"
                >
                  {item}
                </h3>
              );
            })}
          </div>
          <Image src={nextBao} alt="next-bao" priority />
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            bao
          </h3>

          <div className="w-full  mt-10">
            {bao?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-center items-center "
                >
                  <h3 className="text-sm text-white default-text my-4 text-center">
                    {item?.title}
                  </h3>
                  {!item?.veg ? (
                    <div className=" h-4 w-4 items-center justify-center flex ml-14 circle-border-red">
                      <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                    </div>
                  ) : (
                    <div className="h-4 w-4 items-center justify-center flex ml-14 circle-border-green">
                      <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            baked / grilled / <br /> fried
          </h3>
          <div className="w-full  mt-10">
            {baked?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-center items-center "
                >
                  <h3 className="text-sm text-white default-text my-4 text-center">
                    {item?.title}
                  </h3>
                  {!item?.veg ? (
                    <div className=" h-4 w-4 items-center justify-center flex ml-14 circle-border-red">
                      <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                    </div>
                  ) : (
                    <div className="h-4 w-4 items-center justify-center flex ml-14 circle-border-green">
                      <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            cheung fun
          </h3>
          <div className="w-full  mt-10">
            {fun?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-center items-center "
                >
                  <h3 className="text-sm text-white default-text my-4 text-center">
                    {item?.title}
                  </h3>
                  {!item?.veg ? (
                    <div className=" h-4 w-4 items-center justify-center flex ml-14 circle-border-red">
                      <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                    </div>
                  ) : (
                    <div className="h-4 w-4 items-center justify-center flex ml-14 circle-border-green">
                      <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
        <div className="w-full h-40 bg-black"></div>
      </div>
    </Layout>
  );
}
