// import { Hamburger } from "./components/Hamburger";
// import { Nav } from "./components/Nav";
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import "./App.css";
import { RecipeApp } from "./components/Recipe/RecipeApp";

function App() {
  // const [data, setdata] = useState([])
  // const getData = async ()=>{
  //   try {
  //     const url = 'https://api.sampleapis.com/codingresources/codingResources'
  //   const response = await axios.get(url)
  //   const data = response.data
  //   data.map(res=>{
  //     console.log(res.url)
  //   })
  //   setdata(data)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
  // useEffect(() => {
  //   getData()
  //   return () => {
  //   }
  // },[])

  return (
    <div className="">
      {/* <nav className='bg-black p-2 text-[#5ED3F3] text-3xl font-poppins flex justify-center items-center gap-1'>React <img className='h-10 w-10 hover:animate-spin cursor-pointer' src={logoR} alt="" /> </nav> */}
      <RecipeApp />
    </div>
  );
}

export default App;
