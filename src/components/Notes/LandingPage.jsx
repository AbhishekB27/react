import React from "react";
import girl from "./images/girl.gif";
import boy from "./images/boy.png";
import Note1 from "./images/Notes1.svg";
import Note2 from "./images/notes2.svg";

export const LandingPage = () => {
  return (
    <div className="bg-[#191D3C] w-full lg:h-[100vh] md:h-screen xs:grid xs:grid-rows-2  xs:place-items-center xs:h-[100%] lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center">
      <div className="relative xs:w-[70%] lg:w-[45%] lg:h-[75%] md:w-[45%] md:h-[75%] flex justify-center items-center">
        <div className="w-[85%] flex flex-col py-1 px-1 gap-6">
          <div className="w-fit xs:mt-2 bg-slate-500/80 text-slate-400 px-3 text-sm py-1 rounded-3xl">
            Simple Notes Planning Tools
          </div>
          <div className="flex flex-wrap gap-1">
            <span className="text-5xl font-Edu_VIC_WA_NT_Beginner font-semibold bg-clip-text text-transparent bg-gradient-to-t from-[#F55142] to-[#B1231A]">
              Create.
            </span>
            <span className="font-semibold text-5xl text-white">Organise.</span>
            <span className="font-semibold text-5xl text-white">Share.</span>
            <span className="font-semibold text-5xl text-[#FFC63A] -rotate-6 border border-[#FFC63A] px-2 pt-[6px] pb-3 hover:rotate-0 transition-all duration-100 ease-linear cursor-pointer relative">
              Easy.
              <span className="absolute w-2 h-2 rounded-full bg-[#FFC63A] left-[-3px] top-[-3px]"></span>
              <span className="absolute right-[-3px] top-[-3px] w-2 h-2 rounded-full bg-[#FFC63A]"></span>
              <span className="absolute bottom-[-3px] left-[-3px] w-2 h-2 rounded-full bg-[#FFC63A]"></span>
              <span className="absolute bottom-[-3px] right-[-3px] w-2 h-2 rounded-full bg-[#FFC63A]"></span>
            </span>
          </div>
          <div className="text-white text-base lg:w-[80%] md:w-[80%]">
            Notes is the best place to jot dwon quick thoughts or to save longer
            notes filled with checklist, images, web links, scanned docs,
            handwritten notes or sketches
          </div>
          <div className="flex gap-4">
            <button className='relative py-1 px-7 text-white font-poppins focus:outline-none rounded-3xl z-10 overflow-hidden before:content-[" "] before:absolute before:h-4 before:w-4 before:bg-gradient-to-t before:from-[#F55142] before:to-[#B1231A] before:z-[-1] before:rounded-full before:left-3 before:top-3 before:transition-all before:duration-200 before:ease-linear hover:text-white before:scale-[14.1] hover:before:scale-90 border-2 border-transparent hover:border-[#F55142]'>
              Try Now
            </button>
            <button className='relative py-1 px-7 text-white font-poppins focus:outline-none rounded-3xl border-2 border-[#F55142] z-10 overflow-hidden before:content-[" "] before:absolute before:h-4 before:w-4 before:bg-gradient-to-t before:from-[#F55142] before:to-[#B1231A] before:z-[-1] before:rounded-full before:left-3 before:top-3 before:transition-all before:duration-200 before:ease-linear hover:text-white hover:before:scale-[14.1] hover:border-transparent'>
              SignIn
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-[45%] h-[75%]">
        <img
          className="absolute z-10 h-[65px] w-[65px] -rotate-12 left-[-25px] top-[270px] animate-bounce"
          src={Note1}
          alt=""
        />
        <img
          className="absolute z-10 h-[65px] w-[65px] -rotate-12 right-[-25px] top-[120px] animate-bounce"
          src={Note2}
          alt=""
        />
        <img
          className="animate-bounce2 z-10 absolute translate-y-[-30px]  translate-x-16 transition-all duration-300 ease-linear hover:scale-110 hover:-rotate-12 cursor-pointer"
          src={boy}
          alt=""
          srcset=""
        />
        <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
          <div className="bg-gradient-to-b from-gray-300/30 to-transparent w-full h-full border-t-[70px] border-l-[70px] border-gray-400/50 border-l-gray-300/10">
            <div className="absolute animate-pulse w-[450px] top-[-200px] left-[-200px] h-[450px] bg-gradient-to-t from-[#F55142] to-[#B1231A] rounded-[50%]"></div>
            <div className="absolute w-[250px] animate-pulse h-[250px] bg-[#57DBF7] rounded-full bottom-[180px] right-[280px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
