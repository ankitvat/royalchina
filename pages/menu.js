import Layout from "@/components/layout";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import mazeCircle from "../assets/mazeCircle.png";
import nextBao from "../assets/nextBao.png";
import menubb from "../assets/menubb.png";
import urn from "../assets/urn.png";
import rightLong from "../assets/right-long.png";
import drinkOne from "../assets/drinkOne.png";
import drinkTwo from "../assets/drinkTwo.png";
import twoLine from "../assets/twoLine.png";
import MobileContext from "@/utils/MobileContext";

export default function Menu() {
  const [activeOption, setActiveOption] = React.useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const underlineRef = useRef(null);
  const optionsRef = useRef([]);

  const { isMobile } = React.useContext(MobileContext);

  const options = React.useMemo(
    () => [
      {
        title: "Dim sums",
        href: "/dimsums",
      },
      {
        title: "soups",
        href: "/soups",
      },
      {
        title: "appetizers",
        href: "/appetizers",
      },
      {
        title: "main course",
        href: "/maincourse",
      },
      {
        title: "rice & noodles",
        href: "/riceandnoodles",
      },
      {
        title: "desserts",
        href: "/desserts",
      },
    ],
    []
  );

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

  const nonVegSoup = React.useMemo(
    () => [
      {
        title: "Hot and Sour soup",
        text1: "1. Seafood",
        text2: "2. Chicken",
      },
      {
        title: "Royal Sweet Corn Soup",
        text1: "1. Crab Meat",
        text2: "2. Chicken",
      },
      {
        title: "Coriander Soup",
        text1: "1. Seafood",
        text2: "2. Chicken",
      },
      {
        title: "Chicken Wonton Soup",
      },
      {
        title: "Fish Ball Soup",
      },
      {
        title: "Chicken with Vegetable Clear Soup",
      },
      {
        title: "Duck Noodle Soup",
      },
    ],
    []
  );

  const vegSoup = React.useMemo(
    () => [
      "Hot and Sour Soup",
      "Royal Sweet Corn Soup",
      "Vegetable Coriander Soup",
      "Vegetable and Mushroom Soup",
      "Vegetable Wonton Soup",
    ],
    []
  );

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

  const riceLeft = React.useMemo(
    () => [
      {
        title: "Royal China Banana Leaf Rice",
        both: true,
      },
      {
        title: "Fukien Fried Rice",
        both: true,
      },
      {
        title: "Egg Fried Rice",
        mid: true,
        both: true,
      },
      {
        title: "Truffle Fried Rice with Seafood, Egg White.",
      },
      {
        title: "Chicken Fried Rice",
        veg: false,
      },
      {
        title: "Bacon Fried Rice",
        veg: false,
      },
      {
        title: "Cantonese Barbeque Pork and Prawn Fried Rice",
        veg: false,
      },
      {
        title: "Seafood Fried Rice",
        veg: false,
      },
      {
        title: "Steamed Rice",
        veg: true,
      },
      {
        title: "Edamame and Garlic Fried Rice",
        veg: true,
      },
      {
        title: "Vegetable Fried Rice with Sweetcom and Asparagu",
        veg: true,
      },
      {
        title: "Burnt Garlic Vegetable Fried Rice",
        veg: true,
      },
      {
        title: "Vegetable Fried Rice",
        veg: true,
      },
      {
        title: "Garlic Fried Rice",
        veg: true,
      },
      {
        title: "Mushroom Pot Rice",
        veg: true,
      },
    ],
    []
  );

  const riceRight = React.useMemo(
    () => [
      {
        title: "Crispy Pan Fried Noodles",
      },
      {
        title: "Hakka Noodles",
      },
      {
        title: "Singapore Style Vermicelli Noodles",
      },
      {
        title: "Crispy Pan Fried Noodles in Black Bean Sauce",
      },
      {
        title: "Hongkong Noodles",
      },
      {
        title: "Crispy Noodles in Chilli & Garlic Sauce",
      },
      {
        title: "Barbeque Noodles",
        text1: "1. Pork ",
        text2: "2. Duck",
      },
      {
        title: "Ho Fun Noodles",
        text1: "1. seafood",
        text2: "2. Tenderloin",
        text3: "3. Chicken",
        text4: "4. Mixed Vegetables",
      },
      {
        title: "Turnip and Chive Chilli Oil Dumpling",
      },
    ],
    []
  );

  const mainCourse1 = React.useMemo(
    () => [
      {
        title: "fresh lobster served with noodles in",
        text1: "1. chilli garlic sauce",
        text2: "2. ginger and spring onion",
        text3: "3.  black bean sauce",
      },
      {
        title: "flaming prawns",
        text1:
          "in superior sauce sauteed prawns in chilli and black bean sauce",
      },
      {
        title: "prawns in chilli oil and spring onion",
      },
      {
        title: "singapore chilli prawns",
      },
      {
        title: "prawns served in taro nest",
      },
      {
        title: "sauteed prawns with seasonal vegetables",
      },
      {
        title: "sauteed prawns with red chilli szechuan style",
      },
      {
        title: "sweet and sour prawns",
      },
      {
        title: "prawns in XO sauce",
      },
      {
        title: "prawns with curryleaf",
      },
      {
        title:
          "pan-fried river sole fillet in chilli and black bean sauce (steamed/fried)",
      },
      {
        title: "cantonese steamed whole pomfret/red snapper in",
        text1: "1. ginger and spring onion",
        text2: "2. black bean sauce",
        text3: "3. chilli garlic sauce",
      },
      {
        title: "pan-fried whole pomfret/red snapper in",
        text1: "1. superior sauce",
        text2: "2. salt and pepper",
        text3: "3.  yellow bean sauce",
      },
      {
        title: "chefs special pan fried whole pomfret",
      },
      {
        title: "steamed chilean sea bass in ginger and spring onions",
      },
      {
        title: "flaming fish in chilli oil and spring onion",
      },
      {
        title: "sliced fish in superior sauce",
      },
      {
        title: "sliced fish in chilli oil and spring onion",
      },
      {
        title: "sliced fish in black bean sauce",
      },
      {
        title: "sliced fish in ginger spring onion",
      },
      {
        title: "sliced fish with dry red chilli",
      },
      {
        title: "sliced fish in XO sauce",
      },
    ],
    []
  );

  const poultry = React.useMemo(
    () => [
      {
        title: "roast chicken in ",
        text1: "burnt garlic with soya chilli dipping sauce",
      },
      {
        title: "flaming chicken in superior sauce",
      },
      {
        title: "chicken in black bean sauce",
      },
      {
        title: "szechuan peppercorn chicken",
      },
      {
        title: "chicken in chilli oil and spring onion",
      },
      {
        title: "chicken in ginger and spring onion",
      },
      {
        title: "chicken in black pepper sauce",
      },
      {
        title: "kung pao chicken",
      },
      {
        title: "chciken soya chilli",
      },
      {
        title: "chicken with dry red chilli",
      },
      {
        title: "sauteed chicken with mixed vegetable",
      },
      {
        title: "stir fried chicken and vegetable is oyster sauce",
      },
      {
        title: "sweet and sour chicken",
      },
    ],
    []
  );

  const Tenderloin = React.useMemo(
    () => [
      {
        title: "tenderloin in truffle oil",
      },
      {
        title: "tenderloin in chilli oil and sring onion",
      },
      {
        title: "tenderloin in black bean sauce",
      },
      {
        title: "tenderloin in ginger and spring onion",
      },
      {
        title: "tenderloin and vegetable in oyster sauce",
      },
      {
        title: "tenderloin in black pepper sauce",
      },
      {
        title: "tenderloin in creamy wasabi sauce",
      },
      {
        title: "tenderloin and broccoli in oyster sauce",
      },
    ],
    []
  );

  const pork = React.useMemo(
    () => [
      {
        title: "char siu cantonese honey roasted pork",
      },
      {
        title: "pork belly hunan style with mantou buns",
      },
      {
        title: "sweet and sour pork",
      },
      {
        title: "double cooked pork in szechuan sauce",
      },
      {
        title: "pork with pak choi in oyster sauce",
      },
      {
        title: "pork mapo tofu",
      },
      {
        title: "pork with dry red chilli",
      },
      {
        title: "pork in yellow bean sauce",
      },
      {
        title: "pork in black pepper sauce",
      },
    ],
    []
  );

  const lamb = React.useMemo(
    () => [
      {
        title: "crispy lamb in mandarin chilli sauce",
      },
      {
        title: "lamb in black pepper sauce",
      },
      {
        title: "lamb in chilli oil and spring onion",
      },
      {
        title: "lamb in ginger and spring onion",
      },
      {
        title: "lamb with seasonal vegetables",
      },
      {
        title: "lamb in black bean sauce",
      },
      {
        title: "lamb in yellow bean sauce",
      },
    ],
    []
  );

  const veg1 = React.useMemo(
    () => [
      {
        title: "royal china exotic vegetables",
      },
      {
        title: "silken tofu with asparagus in soya chilli",
      },
      {
        title: "stir fried Chinese greens with black mushroom",
      },
      {
        title: "mock chicken with dry red chilli",
      },
      {
        title: "szechuan mapo tofu",
      },
      {
        title: "silken tofu in black bean sauce",
      },
      {
        title: "chinese greens in soya chilli garlic",
      },
      {
        title: "lotus root in chilli honey",
      },
      {
        title: "kung pao patato with okra",
      },
      {
        title: "stir fried pak choi in",
        text1: "1. chilli garlic",
        text2: "2. oyster sauce",
      },
      {
        title: "mixed vegetable in black bean sauce",
      },
    ],
    []
  );

  const veg2 = React.useMemo(
    () => [
      {
        title: "sauteed morning glory",
      },
      {
        title: "sauteed french bean in",
        text1: "1. black bean sauce",
        text2: "2. szechuan sauce",
        text3: "3. yellow bean sauce",
      },
      {
        title: "cottage cheese in chilli oil",
      },
      {
        title: "sauteed asparagus and snow peas in chilli oil",
      },
      {
        title: "broccoli and lotus root in yellow bean sauce",
      },
      {
        title: "spicy aubergine, okra and french beans",
      },
      {
        title: "stir fried lotus root with water chestnut and asparagus",
      },
      {
        title: "aubergine in hot garlic sauce or black bean sauce",
      },
      {
        title: "stir fried mixed vegetables",
      },
    ],
    []
  );

  const firstCourse1 = React.useMemo(
    () => [
      {
        title: "Sweet Corn Soup Veg/Chicken",
        veg: false,
      },
      {
        title: "chicken in black bean sauce",
        veg: false,
      },
    ],
    []
  );

  const firstCourse2 = React.useMemo(
    () => [
      {
        title: "Hot & Sour Soup Veg/ Chicken",
        veg: true,
      },
      {
        title: "chicken in black bean sauce",
        veg: true,
      },
    ],
    []
  );

  const secondCourse1 = React.useMemo(
    () => [
      {
        title: "chicken chive dumplings",
        veg: false,
      },
      {
        title: "crispy duck spring rolls",
        veg: false,
      },
      {
        title: "Chicken with Dry Red Chilli",
        veg: false,
      },
      {
        title: "Chicken & Shrimp Sui Mai",
        veg: false,
      },
      {
        title: "Chicken Lettuce Wrap",
        veg: false,
      },
    ],
    []
  );

  const secondCourse2 = React.useMemo(
    () => [
      {
        title: "Vegetable Dumpling with Coriander",
        veg: true,
      },
      {
        title: "Vegetable Spring Roll",
        veg: true,
      },
      {
        title: "Fried Classic Soft Corn Curd",
        veg: true,
      },
      {
        title: "Vegetable Salt and Pepper",
        veg: true,
      },
      {
        title: "Vegetable Lettuce Wrap",
        veg: true,
      },
    ],
    []
  );

  const mainCourse3 = React.useMemo(
    () => [
      {
        title: "Stir Fried Chicken in Chilli Oil",
        veg: false,
      },
      {
        title: "Sweet & Sour Chicken",
        veg: false,
      },
      {
        title: "Crispy Lamb with Manadarin Chilli Sauce",
        veg: false,
      },
      {
        title: "Flaming Fish in Superior Sauce",
        veg: false,
      },
      {
        title: "Sliced Fish in Black Bean Sauce",
        veg: false,
      },
    ],
    []
  );

  const mainCourse4 = React.useMemo(
    () => [
      {
        title: "Mixed Vegetables in Black Bean Sauce",
        veg: true,
      },
      {
        title: "Chinese Greens in Soya Chilli Garlic Sauce",
        veg: true,
      },
      {
        title: "Spicy Aubergine, Okra & French Beans",
        veg: true,
      },
      {
        title: "Kung Pao Potato",
        veg: true,
      },
      {
        title: "Crispy Seaweed",
        veg: true,
      },
    ],
    []
  );

  const choose1 = React.useMemo(
    () => [
      {
        title: "Egg Fried Rice",
        veg: false,
      },
      {
        title: "Chicken Hong Kong Noodles",
        veg: false,
      },
    ],
    []
  );

  const choose2 = React.useMemo(
    () => [
      {
        title: "Veg Fried Rice",
        veg: true,
      },
      {
        title: "Veg Hong Kong Noodles",
        veg: true,
      },
    ],
    []
  );

  const drinks = React.useMemo(
    () => [
      {
        title: "Fresh Lime Soda/Water",
      },
      {
        title:
          "Coke/Diet Coke / Coke Zero / Sprite / Ginger Ale Peach / Lemon Ice Tea",
      },
      {
        title: "Any mocktail from the menu",
      },
      {
        title: "Chinese Tea",
      },
    ],
    []
  );

  const des = React.useMemo(
    () => [
      {
        title: "Honey Noodles with Ice Cream",
      },
      {
        title: "Toffee Banana with Ice Cream",
      },
    ],
    []
  );
  const soup1 = React.useMemo(
    () => [
      {
        title: "Hot and Sour vegetarian / chicken",
      },
    ],
    []
  );

  const soup2 = React.useMemo(
    () => [
      {
        title: "Royal sweet corn vegetarian / chicken",
      },
    ],
    []
  );

  const dimsums1 = React.useMemo(
    () => [
      {
        title: "Prawn har gow dumpling",
      },
      {
        title: "siu mai dumpling (chicken & shrimp)",
      },
      {
        title: "chicken & chive dumpling",
      },
      {
        title: "Chicken shanghai soup dumpling",
      },

      {
        title: "char siu bao (pork)",
      },
      {
        title: "roast pork puff",
      },
    ],
    []
  );

  const dimsums2 = React.useMemo(
    () => [
      {
        title: "prawn & chive dumpling",
      },
      {
        title: "seafood dumpling with chili oil",
      },
      {
        title: "chicken dumpling in chili oil",
      },
      {
        title: "sticky rice in banana leaf with chicken",
      },
      {
        title: "crispy duck spring roll",
      },
      {
        title: "sesame prawn toast",
      },
    ],
    []
  );

  const dimsums3 = React.useMemo(
    () => [
      {
        title: "crystal dumpling",
      },
      {
        title: "steamed vegetable dumpling with coriander",
      },
      {
        title: "steamed wonton soya chili",
      },
      {
        title: "corn water chestnut dumpling",
      },
      {
        title: "vegetable & chives dumpling",
      },
      {
        title: "spinach & cheese dumpling",
      },
    ],
    []
  );

  const dimsums4 = React.useMemo(
    () => [
      {
        title: "vegetable mushroom bao",
      },
      {
        title: "truffle water chestnut & sweet pea dumpling",
      },
      {
        title: "sticky rice in banana leaf",
      },
      {
        title: "classic soft corn curd",
      },
      {
        title: "sesame potato toast",
      },
      {
        title: "vegetable spring roll",
      },
    ],
    []
  );

  const mc1 = React.useMemo(
    () => [
      {
        title: "Chicken in chilli oil & spring onion",
      },
    ],
    []
  );

  const mc2 = React.useMemo(
    () => [
      {
        title: "mixed vegetable in black bean sauce",
      },
    ],
    []
  );

  const mc3 = React.useMemo(
    () => [
      {
        title: "Chicken in chilli oil & spring onion",
      },
      {
        title: "mixed vegetable in black bean sauce",
      },
    ],
    []
  );

  const mc4 = React.useMemo(
    () => [
      {
        title: "egg fried rice",
      },
      {
        title: "vegetable hong kong noodles",
      },
    ],
    []
  );

  const des2 = React.useMemo(
    () => [
      {
        title: "honey Noodles with ice cream",
      },
      {
        title: "banana toffee fritters with ice cream",
      },
    ],
    []
  );
  const getUnderlineStyle = () => {
    return {
      transform: `translateX(${offset}px)`,
      width: `${underlineWidth}px`,
    };
  };

  useEffect(() => {
    if (underlineRef.current) {
      setUnderlineWidth(underlineRef.current.offsetWidth);
    }
  }, [activeOption]);

  useEffect(() => {
    if (optionsRef.current[activeOption]) {
      const { offsetLeft, offsetWidth } = optionsRef.current[activeOption];
      setOffset(offsetLeft);
      setUnderlineWidth(offsetWidth);
    }
  }, [activeOption]);

  useEffect(() => {
    if (optionsRef.current[0]) {
      const { offsetLeft, offsetWidth } = optionsRef.current[0];
      setOffset(offsetLeft);
      setUnderlineWidth(offsetWidth);
    }
  }, []);

  const handleOptionClick = (index) => {
    setActiveOption(index);
  };

  const renderCase0 = () => {
    return (
      <div className="flex flex-row flex-wrap justify-between w-full px-28 mt-20">
        <div className="w-2/3 flex flex-col justify-start items-start">
          <h3 className="text-lg uppercase heroText">
            steamed - non <br /> vegetarian
          </h3>
          <div className="small-map mt-10">
            {steamedNonVeg?.map((item, index) => {
              return (
                <h3
                  key={index}
                  className="text-sm text-white default-text my-6 w-4/5 left-margin"
                >
                  {item}
                </h3>
              );
            })}
          </div>
        </div>

        <div className="w-1/3 flex flex-col items-start">
          <h3 className="text-lg uppercase heroText">
            steamed - <br /> vegetarian
          </h3>
          <div className="small-map mt-10">
            {steamedVeg?.map((item, index) => {
              return (
                <h3
                  key={index}
                  className="text-sm text-white default-text my-6 w-4/5 left-margin"
                >
                  {item}
                </h3>
              );
            })}
          </div>
        </div>
        <div className=" w -2/3 flex flex-col items-start justify-start mt-20">
          <h3 className="text-lg uppercase heroText bao-text">Bao</h3>
          <div className=" w-full small-map mt-10">
            {bao?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-start items-center  text-left"
                >
                  <h3 className="text-sm text-white default-text my-4 left-margin">
                    {item?.title}
                  </h3>
                  {!item?.veg ? (
                    <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                      <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                    </div>
                  ) : (
                    <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                      <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-start image-up">
          <Image src={nextBao} alt="next-bao" priority />
        </div>
        <div className=" w-2/3 flex flex-col items-start justify-start mt-20">
          <h3 className=" text-lg uppercase heroText ml-2">
            baked / grilled / <br /> fried
          </h3>
          <div className=" w-full small-map mt-10">
            {baked?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-start items-center"
                >
                  <h3 className="text-sm text-white default-text my-4 left-margin">
                    {item?.title}
                  </h3>
                  {!item?.veg ? (
                    <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                      <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                    </div>
                  ) : (
                    <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                      <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-start mt-20">
          <h3 className="text-lg uppercase heroText">cheung fun</h3>
          <div className=" w-full small-map mt-10">
            {fun?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-start items-center  text-left"
                >
                  <h3 className="text-sm text-white default-text my-4 left-margin">
                    {item?.title}
                  </h3>
                  {!item?.veg ? (
                    <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                      <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                    </div>
                  ) : (
                    <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                      <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderCase1 = () => {
    return (
      <div className="flex flex-row flex-wrap justify-between w-full px-28 mt-10">
        <div className="w-2/3 flex flex-col justify-start items-start mt-10">
          <h3 className="text-lg uppercase heroText ml-2">
            non vegetarian - <br />
            soup
          </h3>
          <div className="small-map mt-10">
            {nonVegSoup?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <h3
                    key={index}
                    className="text-sm text-white default-text mt-6 w-full left-margin"
                  >
                    {item?.title}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-start mt-10">
          <h3 className="text-lg uppercase heroText">
            vegetarian - <br /> soup
          </h3>
          <div className="small-map mt-10 w-full">
            {vegSoup?.map((item, index) => {
              return (
                <h3
                  key={index}
                  className="text-sm text-white default-text my-6 w-4/5 left-margin"
                >
                  {item}
                </h3>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderCase2 = () => {
    return (
      <div className="flex flex-row flex-wrap justify-between w-full px-28 mt-10">
        <h3 className="default-text golden uppercase text-lg ap-text mt-10">
          appetizers
        </h3>
        <div className="w-2/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {appetizers1?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text  left-margin">
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

                  <h3 className="text-xs capitalize medium-text left-margin w-64">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {appetizers2?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text  left-margin">
                      {item?.title}
                    </h3>
                    {item?.veg ? (
                      <>
                        <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                          <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h3 className="text-xs medium-text left-margin w-64">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderCase3 = () => {
    return (
      <div className="flex flex-row flex-wrap justify-between w-full px-28 mt-10">
        <div className="w-2/3 flex flex-col justify-start items-start mt-10">
          <h3 className="text-lg uppercase heroText ml-2">seafood and fish</h3>
          <div className="small-map mt-10">
            {mainCourse1?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex  flex-col justify-start items-start w-full text-left"
                >
                  <h3
                    key={index}
                    className="text-sm capitalize text-white default-text mt-6 w-2/4 left-margin"
                  >
                    {item?.title}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin w-2/4">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin">
                    {item?.text2}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-10">
          <h3 className="text-lg uppercase heroText">poultry</h3>
          <div className="small-map mt-10">
            {poultry?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex  flex-col justify-start items-start w-full text-left"
                >
                  <h3
                    key={index}
                    className="text-sm capitalize text-white default-text mt-6 w-4/5 left-margin"
                  >
                    {item?.title}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin w-3/4">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin">
                    {item?.text2}
                  </h3>
                </div>
              );
            })}
          </div>
          <h3 className="text-lg uppercase heroText mt-20">Tenderloin</h3>
          <div className="small-map mt-10">
            {Tenderloin?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex  flex-col justify-start items-start w-full text-left"
                >
                  <h3
                    key={index}
                    className="text-sm capitalize text-white default-text mt-6 w-4/5 left-margin"
                  >
                    {item?.title}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin w-3/4">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin">
                    {item?.text2}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start mt-20">
          <div className="line-twice -ml-2"></div>
          <div className="line-twice -ml-2 mt-4"></div>
          <div className=" w-full flex flex-row items-center mt-10">
            <Image
              src={drinkOne}
              alt="drink"
              priority
              className="drink-image ml-10"
            />
            <h3 className="demo-text uppercase text-2xl text-white ml-24 ">
              Savour your <br /> favourite potion <br /> or a trendy <br />
              cocktail from <br />
              our finest <br />
              liquor collection.
            </h3>
          </div>
          <div className="line-twice -ml-2 mt-10"></div>
          <div className="line-twice -ml-2 mt-4"></div>
        </div>
        <div className="w-2/3 flex flex-col justify-start items-start mt-10">
          <h3 className="text-lg uppercase heroText -ml-1 mt-10">Pork</h3>
          <div className="small-map mt-10 w-4/5">
            {pork?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex  flex-col justify-start items-start w-full text-left"
                >
                  <h3
                    key={index}
                    className="text-sm capitalize text-white default-text mt-6 w-2/4 left-margin"
                  >
                    {item?.title}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin w-2/4">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin">
                    {item?.text2}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-10">
          <h3 className="text-lg uppercase heroText -ml-1 mt-10">lamb</h3>
          <div className="small-map mt-10 w-full">
            {lamb?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex  flex-col justify-start items-start w-full text-left"
                >
                  <h3
                    key={index}
                    className="text-sm capitalize text-white default-text mt-6  left-margin"
                  >
                    {item?.title}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin">
                    {item?.text2}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start mt-20">
          <div className="line-twice -ml-2"></div>
          <div className="line-twice -ml-2 mt-4"></div>
          <div className=" w-full flex flex-row items-center mt-10">
            <h3 className="demo-text uppercase text-2xl text-white ml-16 ">
              we offer
              <br /> ingredients that <br /> are fresh and
              <br /> authentic from the <br />
              long-lost parts of <br /> China.
            </h3>
            <Image
              src={drinkTwo}
              alt="drink-two"
              priority
              className="drink-image ml-32"
            />
          </div>
          <div className="line-twice -ml-2 mt-10"></div>
          <div className="line-twice -ml-2 mt-4"></div>
        </div>
        <h3 className="default-text golden uppercase text-lg ap-text mt-20">
          VEGETARIAN
        </h3>
        <div className="w-2/3 flex flex-col justify-start items-start mt-10">
          <div className="small-map mt-10 w-4/5">
            {veg1?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex  flex-col justify-start items-start w-full text-left"
                >
                  <h3
                    key={index}
                    className="text-sm capitalize text-white default-text mt-6 w-2/4 left-margin"
                  >
                    {item?.title}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin w-2/4">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin">
                    {item?.text2}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-10">
          <div className="small-map mt-10 w-full">
            {veg2?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex  flex-col justify-start items-start w-full text-left"
                >
                  <h3
                    key={index}
                    className="text-sm capitalize text-white default-text mt-6  left-margin"
                  >
                    {item?.title}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize medium-text left-margin">
                    {item?.text2}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  const renderCase4 = () => {
    return (
      <div className="flex flex-row flex-wrap justify-between w-full px-28 mt-10">
        <h3 className="default-text golden uppercase text-lg rice-text mt-10">
          rice & noodles
        </h3>
        <div className="w-2/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {riceLeft?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start w-4/5 items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text left-margin">
                      {item?.title}
                    </h3>
                    {item?.both ? (
                      <>
                        {item?.mid ? (
                          <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-yellow">
                            <div className="bg-yellow-600 h-2 w-2 circle-dot"></div>
                          </div>
                        ) : (
                          <>
                            <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                              <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                            </div>
                            <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                              <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {!item?.veg ? (
                          <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                            <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                          </div>
                        ) : (
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <h3 className="text-xs medium-text left-margin w-64">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {riceRight?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text  left-margin">
                      {item?.title}
                    </h3>
                    {item?.veg ? (
                      <>
                        <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                          <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h3 className="text-xs medium-text left-margin  capitalize">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text4}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderCase5 = () => {
    return (
      <div className="flex flex-row flex-wrap justify-between w-full px-28 mt-10">
        <h3 className="default-text golden uppercase text-lg ap-text mt-10">
          deserts
        </h3>
        <div className="w-2/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10 w-full">
            {deserts1?.map((item, index) => {
              return (
                <h3
                  key={index}
                  className="text-sm text-white default-text my-6 w-1/2 left-margin"
                >
                  {item?.title}
                </h3>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {deserts2?.map((item, index) => {
              return (
                <h3
                  key={index}
                  className="text-sm text-white default-text my-6 w-4/5 left-margin"
                >
                  {item?.title}
                </h3>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderCase6 = () => {
    return (
      <div className="flex flex-wrap flex-row justify-between w-full px-28 mt-10">
        <h3 className="default-text golden uppercase text-lg first-course mt-10">
          first course
        </h3>
        <div className="w-2/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {firstCourse1?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start  items-center mt-6 text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text left-margin">
                      {item?.title}
                    </h3>
                    {item?.both ? (
                      <>
                        {item?.mid ? (
                          <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-yellow">
                            <div className="bg-yellow-600 h-2 w-2 circle-dot"></div>
                          </div>
                        ) : (
                          <>
                            <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                              <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                            </div>
                            <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                              <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {!item?.veg ? (
                          <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                            <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                          </div>
                        ) : (
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <h3 className="text-xs medium-text left-margin w-64">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {firstCourse2?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text  left-margin">
                      {item?.title}
                    </h3>
                    {item?.veg ? (
                      <>
                        <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                          <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h3 className="text-xs medium-text left-margin  capitalize">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text4}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <h3 className="default-text golden uppercase text-lg w-full second-course mt-10">
          second course
        </h3>
        <h3 className="default-text golden uppercase text-lg  ml-40 mt-10">
          (CHOOSE ANY 2 VEG & ANY 2 NON VEG FOR THE TABLE)
        </h3>
        <div className="w-2/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {secondCourse1?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start  items-center mt-6 text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text left-margin">
                      {item?.title}
                    </h3>
                    {item?.both ? (
                      <>
                        {item?.mid ? (
                          <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-yellow">
                            <div className="bg-yellow-600 h-2 w-2 circle-dot"></div>
                          </div>
                        ) : (
                          <>
                            <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                              <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                            </div>
                            <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                              <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {!item?.veg ? (
                          <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                            <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                          </div>
                        ) : (
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <h3 className="text-xs medium-text left-margin w-64">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {secondCourse2?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  {index === 0 ? (
                    <div
                      key={index}
                      className="flex flex-row justify-start items-center w-4/5 mt-6  text-left"
                    >
                      <h3 className="text-sm capitalize text-white default-text  left-margin">
                        {item?.title}
                      </h3>
                      {item?.veg ? (
                        <>
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="flex flex-row justify-start items-center mt-6  text-left"
                    >
                      <h3 className="text-sm capitalize text-white default-text  left-margin">
                        {item?.title}
                      </h3>
                      {item?.veg ? (
                        <>
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  )}

                  <h3 className="text-xs medium-text left-margin  capitalize">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text4}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <h3 className="default-text golden uppercase text-lg first-course mt-10">
          main course
        </h3>
        <h3 className="default-text golden uppercase text-lg  ml-40 mt-10">
          (CHOOSE ANY 2 VEG & ANY 2 NON VEG FOR THE TABLE)
        </h3>
        <div className="w-2/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {mainCourse3?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start  items-center mt-6 text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text left-margin">
                      {item?.title}
                    </h3>
                    {item?.both ? (
                      <>
                        {item?.mid ? (
                          <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-yellow">
                            <div className="bg-yellow-600 h-2 w-2 circle-dot"></div>
                          </div>
                        ) : (
                          <>
                            <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                              <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                            </div>
                            <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                              <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {!item?.veg ? (
                          <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                            <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                          </div>
                        ) : (
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <h3 className="text-xs medium-text left-margin w-64">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {mainCourse4?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  {index === 0 ? (
                    <div
                      key={index}
                      className="flex flex-row justify-start items-center w-4/5 mt-6  text-left"
                    >
                      <h3 className="text-sm capitalize text-white default-text  left-margin">
                        {item?.title}
                      </h3>
                      {item?.veg ? (
                        <>
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="flex flex-row justify-start items-center  w-4/5 mt-6  text-left"
                    >
                      <h3 className="text-sm capitalize text-white default-text  left-margin">
                        {item?.title}
                      </h3>
                      {item?.veg ? (
                        <>
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  )}

                  <h3 className="text-xs medium-text left-margin  capitalize">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text4}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <h3 className="default-text golden uppercase text-base choose-two mt-28">
          CHOOSE ANY 2 FOR THE TABLE
        </h3>
        <div className="w-2/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {choose1?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start  items-center mt-6 text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text left-margin">
                      {item?.title}
                    </h3>
                    {item?.both ? (
                      <>
                        {item?.mid ? (
                          <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-yellow">
                            <div className="bg-yellow-600 h-2 w-2 circle-dot"></div>
                          </div>
                        ) : (
                          <>
                            <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                              <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                            </div>
                            <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                              <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {!item?.veg ? (
                          <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                            <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                          </div>
                        ) : (
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <h3 className="text-xs medium-text left-margin w-64">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {choose2?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  {index === 0 ? (
                    <div
                      key={index}
                      className="flex flex-row justify-start items-center  mt-6  text-left"
                    >
                      <h3 className="text-sm capitalize text-white default-text  left-margin">
                        {item?.title}
                      </h3>
                      {item?.veg ? (
                        <>
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="flex flex-row justify-start items-center   mt-6  text-left"
                    >
                      <h3 className="text-sm capitalize text-white default-text  left-margin">
                        {item?.title}
                      </h3>
                      {item?.veg ? (
                        <>
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  )}

                  <h3 className="text-xs medium-text left-margin  capitalize">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text4}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-start items-start mt-24">
          <h3 className="text-lg uppercase heroText ">drinks</h3>
          <h3 className="text-base uppercase heroText ml-4">
            (any one per person)
          </h3>
          <div className="small-map mt-10">
            {drinks?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start  items-center w-4/5 mt-6 text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text left-margin">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs medium-text left-margin w-64">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-24">
          <h3 className="text-lg uppercase heroText">deserts</h3>
          <h3 className="text-base uppercase heroText w-4/5 ml-4">
            (choose any one for the table)
          </h3>
          <div className="small-map mt-10">
            {des?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  {index === 0 ? (
                    <div
                      key={index}
                      className="flex flex-row justify-start items-center  mt-6  text-left"
                    >
                      <h3 className="text-sm capitalize text-white default-text  left-margin">
                        {item?.title}
                      </h3>
                      {item?.veg ? (
                        <>
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="flex flex-row justify-start items-center   mt-6  text-left"
                    >
                      <h3 className="text-sm capitalize text-white default-text  left-margin">
                        {item?.title}
                      </h3>
                      {item?.veg ? (
                        <>
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  )}

                  <h3 className="text-xs medium-text left-margin  capitalize">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text4}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center  mt-24 px-40">
          <div className="w-full bot-box pb-10">
            <h3 className="text-sm text-white default-text text-center  mt-10 ml-56 pl-2 ">
              Terms and Conditions Apply
            </h3>
            <h3 className="text-xs text-white default-text text-center mt-10 ml-10">
              -Government taxes as applicable. -We levy on 10% service charge.
              Full table
              <br />
              must participate -Valid Mondays and Tuesdays only Minimum 5 people
              <br /> | Maximum of 18 people - no takeaway
            </h3>
          </div>
        </div>
      </div>
    );
  };

  const renderCase7 = () => {
    return (
      <div className="flex flex-wrap flex-row justify-between w-full px-28 mt-10">
        <h3 className="default-text golden uppercase text-lg ap-text pl-10 mt-10">
          Soup
        </h3>
        <div className="w-2/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {soup1?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start  items-center mt-6 text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text left-margin">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs medium-text left-margin w-64">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {soup2?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text  left-margin">
                      {item?.title}
                    </h3>
                    {item?.veg ? (
                      <>
                        <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                          <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h3 className="text-xs medium-text left-margin  capitalize">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text4}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <h3 className="default-text golden uppercase text-lg ap-text pl-6 mt-20">
          Dimsums
        </h3>
        <h3 className="default-text golden uppercase text-base ap-text pl-5 ">
          (non-vegetarian)
        </h3>
        <div className="w-2/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {dimsums1?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start  items-center mt-6 text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text left-margin">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs medium-text left-margin w-64">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {dimsums2?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text  left-margin">
                      {item?.title}
                    </h3>
                    {item?.veg ? (
                      <>
                        <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                          <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h3 className="text-xs medium-text left-margin  capitalize">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text4}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <h3 className="default-text golden uppercase text-lg ap-text pl-6 mt-20">
          Dimsums
        </h3>
        <h3 className="default-text golden uppercase text-base ap-text pl-11 ">
          (vegetarian)
        </h3>
        <div className="w-2/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {dimsums3?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start  items-center mt-6 text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text left-margin">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs medium-text left-margin w-64">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {dimsums4?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text  left-margin">
                      {item?.title}
                    </h3>
                    {item?.veg ? (
                      <>
                        <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                          <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h3 className="text-xs medium-text left-margin  capitalize">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text4}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <h3 className="default-text golden uppercase text-lg ap-text mt-20">
          Main course
        </h3>
        <div className="w-2/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {mc1?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start  items-center mt-6 text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text left-margin">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs medium-text left-margin w-64">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start mt-7">
          <div className="small-map mt-10">
            {mc2?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text  left-margin">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs medium-text left-margin  capitalize">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text3}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text4}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-start items-start mt-28">
          <h3 className="text-lg uppercase default-text golden -ml-3">
            Main course
          </h3>
          <div className="small-map mt-10">
            {mc3?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <h3
                    key={index}
                    className="text-sm text-white default-text mt-6 w-full left-margin"
                  >
                    {item?.title}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-start mt-28">
          <h3 className="text-lg uppercase default-text golden -ml-3">
            rice and noodles
          </h3>
          <div className="small-map mt-10 w-full">
            {mc4?.map((item, index) => {
              return (
                <h3
                  key={index}
                  className="text-sm text-white default-text my-6 w-4/5 left-margin"
                >
                  {item?.title}
                </h3>
              );
            })}
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-start items-start mt-28">
          <h3 className="text-lg uppercase default-text golden -ml-3">
            deserts
          </h3>
          <div className="small-map mt-10">
            {des2?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start w-full text-left"
                >
                  <h3
                    key={index}
                    className="text-sm text-white default-text mt-6 w-full left-margin"
                  >
                    {item?.title}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs medium-text left-margin">
                    {item?.text2}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center  mt-24 px-40">
          <div className="w-full bot-box pb-10">
            <h3 className="text-sm text-white default-text text-center  mt-10 ml-56 pl-2 ">
              Terms and Conditions Apply
            </h3>
            <h3 className="text-xs text-white default-text text-center mt-10 ml-10">
              -Government taxes as applicable. -We levy on 10% service charge.
              Full table
              <br />
              must participate -Valid Mondays and Tuesdays only Minimum 5 people
              <br /> | Maximum of 18 people - no takeaway
            </h3>
          </div>
        </div>
      </div>
    );
  };

  const renderBasedOnActiveOption = () => {
    console.log(activeOption);
    switch (activeOption) {
      case 0:
        return renderCase0();

      case 1:
        return renderCase1();

      case 2:
        return renderCase2();

      case 3:
        return renderCase3();

      case 4:
        return renderCase4();
      case 5:
        return renderCase5();
      case 6:
        return renderCase6();
      case 7:
        return renderCase7();
      default:
        break;
    }
  };
  return (
    <Layout>
      <div className="layout overflow-hidden">
        {isMobile ? (
          <div className=" heroSection-mobile">
            <h1 className="text-xl  uppercase px-40 heroText text-center ">
              a tasteful travelogue, offering authentic
              <br /> everlasting flavours.
            </h1>
          </div>
        ) : (
          <div className=" mt-16 heroSection">
            <h1 className="text-xl  uppercase px-40 heroText text-center ">
              a tasteful travelogue, offering authentic
              <br /> everlasting flavours.
            </h1>

            <div className=" flex flex-row items-center justify-center w-1/2 h-20 mt-24 menuHeader">
              <Image
                src={mazeCircle}
                alt="maze-circle"
                className="mazeCircle"
                priority={true}
              />
              <h3 className="text-4xl uppercase heroText mx-10">our menu</h3>
              <Image
                src={mazeCircle}
                alt="maze-circle"
                className="mazeCircle"
                priority={true}
              />
            </div>
          </div>
        )}

        <div className="overlay" />
        <Image
          src={menubb}
          alt="exp-bg"
          className="backgroundImage"
          priority={true}
        />
      </div>
      {isMobile ? (
        <div className="rest-section w-full overflow-hidden px-14 -mt-40">
          {options.map((item, index) => {
            return (
              <Link
                key={index}
                className="w-full flex justify-center items-center nav-links my-3 py-2"
                href={item?.href}
              >
                <h3 className="nav-text text-sm">{item?.title}</h3>
              </Link>
            );
          })}
          <Image
            src={twoLine}
            alt="exp-menu"
            className="mt-10"
            priority={true}
          />
          <Link
            className="w-full flex justify-center items-center nav-links my-3 py-2 mt-10"
            href="/dimsumBrunch"
          >
            <h3 className="nav-text text-sm uppercase">dimsum brunch</h3>
          </Link>
          <Link
            className="w-full flex justify-center items-center nav-links my-3 py-2"
            href="/ladiesLuncheon"
          >
            <h3 className="nav-text text-sm uppercase">ladies Luncheon</h3>
          </Link>
          <div className="w-full h-40 bg-black"></div>
        </div>
      ) : (
        <div className="rest-section w-full overflow-hidden">
          <div className="inner-section">
            <div className=" py-10 inner-inner-section">
              <div className="animated-nav pb-4">
                <ul>
                  {options.map((option, index) => (
                    <li
                      key={index}
                      className={
                        activeOption === index ? "active mx-10" : "mx-10"
                      }
                      onClick={() => handleOptionClick(index)}
                      ref={(el) => (optionsRef.current[index] = el)}
                    >
                      <h3 className="text-base uppercase heroText">
                        {option?.title}
                      </h3>
                    </li>
                  ))}
                </ul>
                {activeOption === 6 || activeOption === 7 ? null : (
                  <div
                    className="linez"
                    style={getUnderlineStyle()}
                    ref={underlineRef}
                  ></div>
                )}
              </div>
              <div className="line-bottom mt-2"></div>
              <div className="two-btns mt-10">
                <div
                  className="btn-1 py-1 px-8"
                  style={{
                    backgroundColor: activeOption === 6 ? "#e5bc79" : "black",
                  }}
                  onClick={() => handleOptionClick(6)}
                >
                  <h3
                    className="text-base uppercase heroText"
                    style={{ color: activeOption === 6 ? "black" : "#e5bc79" }}
                  >
                    ladies luncheon
                  </h3>
                </div>
                <div
                  className="btn-2 py-1 px-8 ml-14"
                  style={{
                    backgroundColor: activeOption === 7 ? "#e5bc79" : "black",
                  }}
                  onClick={() => handleOptionClick(7)}
                >
                  <h3
                    className="text-base uppercase heroText"
                    style={{ color: activeOption === 7 ? "black" : "#e5bc79" }}
                  >
                    dimsum brunch
                  </h3>
                </div>
              </div>
              {renderBasedOnActiveOption()}
              <h3 className="text-xs text-white default-text w-full bottom-text mt-20 ml-96">
                <span className="star">*</span>Govt. Taxes Applicable. We Levy
                An Optional 10% Service Charge<span className="star">*</span>
              </h3>
            </div>
          </div>
          <div className="w-11/12 my-40  flex flex-row items-end justify-between urn-section">
            <h3 className="text-xl uppercase medium-text text-white px-24 ">
              come experience the everlasting <br /> taste of authenticity with
              a
              <br /> trendy twist of flavours and have <br /> an evocative
              dining experience <br /> with a chinese flair in the air.
            </h3>
            <Image src={urn} alt="urn" priority={true} className="urn-image" />
          </div>
          <div className="w-full">
            <div className="btn-3 w-80 mb-40 py-2 ml-40 pl-10 px-5 ">
              <h3 className=" text-base uppercase demo-text">
                Book a table now
              </h3>
              <Image src={rightLong} alt="right" priority className="ml-10" />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
