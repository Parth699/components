"use client";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import h1 from "../content/h1.jpg";
import l1 from "../content/l1.jpg";
// import { AOS } from "aos";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Collection = () => {
  useEffect(() => {
    AOS.init(); // Initialize the AOS library
  }, []);

  const a = (
    <div className="w-[100%] mx-auto container  flex justify-center items-center flex-col mt-4 p-3">
      <h1 data-aos="fade-up" className="text-3xl my-5">
        COLLECTIONS
      </h1>

      {/*<div className="w-full flex flex-wrap justify-center items-center m-8 max-sm:m-0">}*/}
      <div class="hover01 column w-full flex justify-center items-center flex-col flex-wrap md:flex-row max-sm:w-[200px]">
        <div className="sm:flex-1 w-full h-auto   flex max-sm:justify-center md:justify-end items-center max-md:mb-8 md:mr-8 ">
          <figure
            data-aos="fade-up"
            className="w-[500px] h-[400px]  hvr-glow  max-sm:w-[300px] max-sm:h-auto"
          >
            <Image src={h1} fill className="" />
          </figure>
          {/* <span>Hover</span> */}
        </div>
        <div
          style={{ height: "auto", width: "auto" }}
          className="sm:flex-1 h-auto w-max  flex max-sm:justify-center md:justify-start items-center max-sm:w-[200px] max-md:mb-8 "
        >
          <figure
            data-aos="fade-up"
            className="w-[500px] h-[400px] hvr-glow max-sm:w-[300px]"
          >
            <Image src={l1} fill className="" />
          </figure>
          {/* <span>Hover</span>     */}
        </div>
        {/* <div>
    <figure className="h-max w-max"><Image src={h1} height={400} width={400}/></figure>
    <span>Hover</span>
  </div> */}
      </div>
      {/*</div>*/}
    </div>
  );

  return (
    <div className="sm:container sm:mx-auto w-full flex flex-col justify-start items-center mt-8">
      <h1 data-aos="fade-up" className="text-3xl my-5">
        COLLECTIONS
      </h1>
      <div className="hover01 w-full flex flex-col sm:flex-row justify-center items-center gap-8 p-5  ">
        <div data-aos="fade-up" className="flex basix-1/2 w-full justify-center sm:justify-end items-center overflow-hidden">
          <Image src={h1} className="" />
        </div>
        <div data-aos="fade-up" className="flex w-full justify-center sm:justify-start items-center overflow-hidden">
          <Image src={l1} className="" />
        </div>
      </div>
    </div>
  );
};

export default Collection;
