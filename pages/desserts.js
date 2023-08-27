import Layout from "@/components/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import menubb from "../assets/menubb.png";

export default function RiceAndNoodles() {
  const deserts1 = React.useMemo(
    () => [
      {
        title: "Chocolate Dome",
      },
      {
        title: "Tiramisu",
      },
      {
        title:
          "Chefs Special Desserts of the Day (Please Check with the server)",
      },
      {
        title: "Chocolate Mud Cake",
      },
      {
        title: "Crème Brulee",
      },
      {
        title: "Caramel Custard",
      },
      {
        title: "Sugar Free Caramel Custard",
      },
      {
        title: "Chocolate Fondant",
      },
    ],
    []
  );

  const deserts2 = React.useMemo(
    () => [
      {
        title: "Lai Wong Ban - Custard Buns (Fried or Steamed)",
      },
      {
        title: "Honey Noodles",
      },
      {
        title: "Chinese Mango Pudding",
      },
      {
        title: "Nutella Brownie",
      },
      {
        title: "Apple or Banana Toffee Fritters",
      },
      {
        title: "Lychees with Ice Cream",
      },
      {
        title: "Steamed Chocolate Bao",
      },
      {
        title: "A Variety of Ice Cream",
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
            desserts
          </h3>
          <div className="w-full  mt-10">
            {deserts1?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-start -ml-2"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-2  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text my-4 px-10 -ml-10 text-center">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-left  ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-left">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-left ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="w-full mt-10">
            {deserts2?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-end -ml-2"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text my-4 px-10 -ml-10 text-center">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center  ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center ">
                    {item?.text3}
                  </h3>
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
