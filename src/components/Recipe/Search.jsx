import {
  faCross,
  faMultiply,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";

export const Search = ({ setRecipies }) => {
  const [query, setquery] = useState();
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    setquery(event.target.value);
  };
  const getRecipe = async (event) => {
    // use this to prevent default form refresh
    setLoading(true)
    event.preventDefault();
    try {
      let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=aa39bec7&app_key=79486f57499e5a0f9566bd4bd0945f84`;
      const res = await axios.get(url);
      setRecipies(res.data.hits.map((hits) => hits.recipe));
      setLoading(false)
    } catch (error) {
      console.log(error.message);
      setLoading(false)
    }
  };
  return (
    <form
      onSubmit={getRecipe}
      action=""
      className="w-[70%] mx-auto bg-white rounded-md"
    >
      <div className="flex gap-4 relative text-gray-700">
        <button type="submit" className="text-xl absolute inset-y-0 pl-2">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          onChange={handleChange}
          className="w-full py-2 px-3 pl-10 text-lg rounded-md bg-transparent placeholder:text-gray-700 outline-none focus:border-blue-500 focus:ring-blue-300 border focus:ring"
          type="text"
          name=""
          id=""
          placeholder="Search..."
        />
        <button
          type="reset"
          className="absolute right-0 inset-y-0 pr-2 text-lg active:scale-150 active:text-red-400 transition-all duration-100 ease-linear"
        >
          {loading ? (
            <div className="flex justify-center items-center text-blue-500">
              <span className="text-lg font-medium">Loading...</span>
              <div
                className="animate-ping flex w-6 h-6 bg-blue-500 rounded-full"
              ></div>
            </div>
          ) : (
            <FontAwesomeIcon icon={faMultiply} />
          )}
        </button>
      </div>
    </form>
  );
};
