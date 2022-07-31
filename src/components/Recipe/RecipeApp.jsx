import React, { useState } from "react";
import { Nav } from "../Nav";
import logoR from "./images/logoR.png";
import bgImage from "./images/Recipe.jpg";
import { RecipeCard } from "./RecipeCard";
import { Search } from "./Search";

export const RecipeApp = () => {
  const [recipe, setRecipies] = useState([]);

  const myStyle = {
    backgroundImage: `url('${bgImage}')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div
      style={myStyle}
      className="relative w-full h-screen bg-fuchsia-400 box-border flex justify-center items-center pt-16"
    >
      <Nav logo={`${logoR}`} brandName="Recipe" brandClr="" />
      <div className="flex gap-2 flex-col justify-center items-center h-[550px] w-[90%] mx-auto ">
        <Search setRecipies={setRecipies} />
        <div className="recipe_div flex flex-wrap justify-center items-center w-full h-full gap-5 gap-y-8 py-3 overflow-scroll overflow-x-hidden">
          {
            recipe.length === 0 ? ( <div>  </div> ) : recipe.filter(item=>item.label.length <= 30).map((data,index)=>{
              console.log(data)
              // console.log(data.label.length)
              return(
                <RecipeCard key={index} name={data.label} recipeImg={data.images.REGULAR.url} type={{'cusine':`${data.cuisineType}`,'meal':`${data.mealType}`,'dish':`${data.dishType}`}} link={data.url}/>
              )
            })
            
          }
        </div>
      </div>
    </div>
  );
};
