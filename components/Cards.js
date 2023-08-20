import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import h1 from "../content/h1.jpg";
import blackFlowet from "../content/black_flower.gif";
import "./Cards.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Cards = () => {
  useEffect(() => {
    AOS.init(); // Initialize the AOS library
  }, []);
  return (
    
    <div className="relative mt-12">
      <div className="flex justify-center items-center m-8">
      <h1 data-aos="fade-up" className="text-3xl my-5">
      CATALOGUE
    </h1>
      </div>
      <div className="absolute top-[0]">
        <Image
          src={blackFlowet} // Replace with the actual path to your GIF in the public folder
          alt="My Animation"
          width={700}
          className=" max-sm:hidden translate-x-[-50%]"
          height={500}
           
        />
      </div>
      <div className="flex justify-center items-center">

        <div data-aos="fade-up"  className="grid grid-cols-2 place-items-center gap-4 max-sm:grid-cols-1 ">
        <div class="relative group h-80 w-40 max-sm:w-80">
          <Image
            src={h1}
            alt="Your Image"
            height={400}
            width={200}
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center">
            <p class="text-white text-xl font-bold">HINGES</p>
          </div>
        </div>


        <div class="relative group h-80 w-40 max-sm:w-80 row-span-2">
          <Image
            src={h1}
            alt="Your Image"
            height={400}
            width={200}
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center">
            <p class="text-white text-xl font-bold">HINGES</p>
          </div>
        </div>

        <div class="relative group h-80 w-40 max-sm:w-80">
          <Image
            src={h1}
            alt="Your Image"
            height={400}
            width={200}
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center">
            <p class="text-white text-xl font-bold">HINGES</p>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Cards;
