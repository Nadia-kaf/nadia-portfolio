import React, { useState } from "react";
import html from "../assets/html.png";
import CSS from "../assets/CSS.png";
import javascript from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind-css.png";
import nodejs from "../assets/nodejs.png";

export default function Skills() {
  return (
    <div className="drop-shadow-2xl md:flex">
      <div className="w-full  flex flex-col justify-center">
        <div className="overflow-x-scroll pb-10 hide-scroll-bar mt-10 mb-10 md:flex">
          <div className="flex flex-nowrap">
            <div className="shadow-lg bg-slate-800 border-slate-400    backdrop-filter backdrop-blur-xl bg-white/30 bg-opacity-50 relative">
              <img src={html} alt="" className="w-64  pr-5 pl-1 images" />
              <p className=" pr-10 pl-10 text-white">HTML</p>
              <p className=" pr-10 pl-10 text-white">Intermediate</p>
            </div>
            <div className="shadow-lg bg-slate-800 border-slate-400    backdrop-filter backdrop-blur-xl bg-white/30 bg-opacity-50 relative">
              <img src={CSS} alt="" className="w-64  pr-5 pl-1 images" />
              <p className=" pr-10 pl-10 text-white">CSS</p>
              <p className=" pr-10 pl-10 text-white">Intermediate</p>
            </div>
            <div className="shadow-lg bg-slate-800 border-slate-400    backdrop-filter backdrop-blur-xl bg-white/30 bg-opacity-50 relative">
              <img src={javascript} alt="" className="w-64  pr-5 pl-1 images" />
              <p className=" pr-10 pl-10 text-white">JavaScript</p>
              <p className=" pr-10 pl-10 text-white">Intermediate</p>
            </div>
            <div className="shadow-lg bg-slate-800 border-slate-400    backdrop-filter backdrop-blur-xl bg-white/30 bg-opacity-50 relative">
              <img src={react} alt="" className="w-64  pr-5 pl-1 images" />
              <p className=" pr-10 pl-10 text-white">REACT</p>
              <p className=" pr-10 pl-10 text-white">Intermediate</p>
            </div>
            <div className="shadow-lg bg-slate-800 border-slate-400    backdrop-filter backdrop-blur-xl bg-white/30 bg-opacity-50 relative">
              <img src={nodejs} alt="" className="w-64  pr-5 pl-1 images" />
              <p className=" pr-10 pl-10 text-white">NodeJs</p>
              <p className=" pr-10 pl-10 text-white">Intermediate</p>
            </div>
            <div className="shadow-lg bg-slate-800 border-slate-400    backdrop-filter backdrop-blur-xl bg-white/30 bg-opacity-50 relative">
              <img src={tailwind} alt="" className="w-64  pr-5 pl-1 images" />
              <p className=" pr-10 pl-10 text-white">Tailwind</p>
              <p className=" pr-10 pl-10 text-white">Intermediate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
