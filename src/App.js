import "./App.css";
import { RecipeApp } from "./components/Recipe/RecipeApp";

function App() {

  return (
    <div className="">
      {/* <nav className='bg-black p-2 text-[#5ED3F3] text-3xl font-poppins flex justify-center items-center gap-1'>React <img className='h-10 w-10 hover:animate-spin cursor-pointer' src={logoR} alt="" /> </nav> */}
      <RecipeApp />
    </div>
  );
}

export default App;
