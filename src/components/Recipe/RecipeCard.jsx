import { faClock, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import food from "./images/strawBerry.jpg";
export const RecipeCard = ({ name, recipeImg, type, link }) => {
  const [loader, setloader] = useState(true);
  setTimeout(() => {
    setloader(false)
  }, 2500);

  return (
    <div className="w-[360px] h-[470px] rounded-2xl bg-transparent overflow-hidden font-poppins shadow-my-shadow">
      <div className="relative overflow-hidden h-[240px]">
        <div className="absolute w-full h-full px-4 py-2 bg-fuchsia-500 text-fuchsia-100 overflow-scroll overflow-x-hidden">
          <div className="text-xl font-medium flex flex-col justify-center items-center h-full">
            {loader ? (
              <div className="w-[80px] h-[80px] rounded-full bg-transparent border-[5px] border-slate-300 border-t-slate-600 animate-spin"></div>
            ) : (
                  <ul className="list-disc text-xl w-full">
                <span className="underline">CUSINE TYPE</span>
                <li className="ml-8 text-lg">
                  <span className="text-fuchsia-300">
                    {type.cusine.toUpperCase()}
                  </span>
                </li>
                <span className="underline">MEAL TYPE</span>
                <li className="ml-8 text-lg">
                  <span className="text-fuchsia-300">
                    {type.meal.toUpperCase()}
                  </span>
                </li>
                <span className="underline">DISH TYPE</span>
                <li className="ml-8 text-lg">
                  <span className="text-fuchsia-300">
                    {type.dish.toUpperCase()}
                  </span>
                </li>
              </ul>
             
            )}
          </div>
        </div>
        <img
          className="absolute hover:rotate-[-45deg] origin-top-right w-full h-full object-cover bg-no-repeat bg-center hover:scale-110 transition-all duration-300 ease-in cursor-pointer"
          src={recipeImg}
          alt=""
        />
      </div>
      <div className="flex flex-col bg-white justify-around items-center gap-1 font-medium text-xl h-[230px] px-6 py-2">
        <div className="border-b-2 border-fuchsia-600 w-full pb-3 text-center">
          {name}
        </div>
        <div className="flex">
          <div className="text-center text-fuchsia-600">
            {" "}
            <FontAwesomeIcon icon={faClock} /> <span className=""> 20 </span>{" "}
            <span className="text-black font-medium"> Minutes </span>{" "}
          </div>
          <div className="text-center text-fuchsia-600">
            {" "}
            <FontAwesomeIcon icon={faBookOpen} /> <span className=""> 5 </span>{" "}
            <span className="text-black font-medium"> Ingredients </span>{" "}
          </div>
          <div className="text-center text-fuchsia-600">
            {" "}
            <FontAwesomeIcon icon={faUser} /> <span className=""> 4-5 </span>{" "}
            <span className="text-black font-medium"> Serving </span>{" "}
          </div>
        </div>
        <div className="text-center text-base font-medium">
          Food May Be Essential As Fuel For The Body, But Good Food Is Fuel For
          The Soul.
        </div>
        <div>
          {" "}
          <button className="relative border-2 border-fuchsia-600 px-6 py-1 rounded-xl text-black focus:outline-none focus:ring-4 ring-fuchsia-300 z-10 overflow-hidden before:content-[' '] before:absolute before:h-5 before:w-5 before:bg-fuchsia-600 before:z-[-1] before:rounded-full before:left-3 before:top-3 before:transition-all before:duration-200 before:ease-linear hover:text-white hover:before:scale-[14.1]">
            <a target="_blank" href={link}>
              View Recipe
            </a>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};
