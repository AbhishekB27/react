import React, { useState } from "react";

export const Hamburger = ({ btnSta }) => {
  console.log(btnSta);
  const [button, setButton] = useState(btnSta);
  const clickEvent = () => {
    button === "on" ? setButton("off") : setButton("on");
  };
  return (
    <div
      onClick={clickEvent}
      className="p-[0.5rem] bg-transparent md:flex flex-col justify-around w-[3rem] h-[3rem] rounded-[0.25em] cursor-pointer lg:hidden sm:flex xs:flex"
    >
      <div
        className={`${
          button === "on" ? "w-[2rem] block rotate-45" : "rotate-0"
        }  origin-[length:0%_0%] h-[0.25rem] w-[2rem] rounded-[1em] bg-white transition-all duration-100 ease-linear`}
      ></div>
      <div
        className={`${
          button === "off" ? "w-[2rem]" : "w-[0rem]"
        } origin-[length:0%_100%] h-[0.25rem] w-[2rem] rounded-[1em] bg-white  transition-all duration-100 ease-linear`}
      ></div>
      <div
        className={`${
          button === "on" ? "w-[2rem] block -rotate-45" : "rotate-0"
        }  origin-[length:0%_100%] h-[0.25rem] w-[2rem] rounded-[1em] bg-white transition-all duration-100 ease-linear`}
      ></div>
    </div>
  );
};
