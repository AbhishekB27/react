import { useState } from "react";
import { Hamburger } from "./Hamburger";

export const Nav = ({ logo, brandName }) => {
  const [button, setButton] = useState("off");
  const buttonClick = () => {
    button === "on" ? setButton("off") : setButton("on");
  };
  return (
    <div className="bg-black/[0.4]  font-poppins text-white text-lg font-medium fixed top-0 w-full z-10">
      <nav className="flex flex-col p-2 justify-between items-center">
        <div className="lg:flex lg:flex-row justify-between items-center w-full xs:flex-col">
          <div className="flex justify-between items-center gap-2 w-full">
            <div className="flex justify-center items-center gap-3">
              <img
                className="h-[50px] w-[50px] hover:animate-spin cursor-pointer"
                src={logo}
                alt=""
              />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-lime-500 font-Edu_VIC_WA_NT_Beginner text-2xl font-semibold">
                {brandName}
              </span>
            </div>
            <div onClick={buttonClick}>
              <Hamburger btnSta={button} />
            </div>
          </div>
          <div className={`lg:block lg:h-auto lg:w-auto float-right lg:bg-transparent bg-black/90 xs:w-full xs:h-screen xs:${button === 'on'? 'block' : 'hidden'} transition-all duration-500 ease-linear`}>
            <ol className="lg:flex lg:flex-row justify-around gap-10 items-center font-medium text-xl xs:flex xs:flex-col xs:justify-center h-full">
              <li className=" bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_3px] hover:bg-[length:75%_3px] bg-no-repeat transition-all duration-200 ease-linear cursor-pointer">
                About
              </li>
              <li className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_3px] hover:bg-[length:75%_3px] bg-no-repeat transition-all duration-200 ease-linear cursor-pointer">
                Services
              </li>
              <li className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_3px] hover:bg-[length:75%_3px] bg-no-repeat transition-all duration-200 ease-linear cursor-pointer">
                Cusine
              </li>
              <li className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_3px] hover:bg-[length:75%_3px] bg-no-repeat transition-all duration-200 ease-linear cursor-pointer">
                Gallery
              </li>
              <li className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_3px] hover:bg-[length:75%_3px] bg-no-repeat transition-all duration-200 ease-linear cursor-pointer">
                Contact
              </li>
            </ol>
          </div>
        </div>
      </nav>
    </div>
  );
};
