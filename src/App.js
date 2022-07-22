// import logo from './logo.svg';
// import './App.css';
function App() {
  return (
    <div className="box-border perspective xs:bg-gray-900 h-auto w-full pt-20 text-white flex justify-center items-center gap-8 flex-wrap pb-10 lg:h-screen">
      <div className="relative preserve-3d hover:my-rotate-180 duration-1000 w-[320px] h-[490px] hover:cursor-pointer container ">
        <div className="absolute backface-hidden w-full h-full bg-slate-800 rounded-3xl mx-auto overflow-hidden ">
          <div className="circle absolute w-[150px] h-[150px] bg-green-300 rounded-full border-4 border-white left-[90px] top-[70px]"></div>
          <div className="backG h-[150px] w-full bg-gradient-to-r from-[#D21CB9] to-[#8E33BF]"></div>
          <div className="backG h-[100%] w-full bg-transparent flex justify-center items-center flex-col pb-20">
            <div className="name text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#D21CB9] to-[#8E33BF]">
              Abhishek Bahuguna
            </div>
            <div className="role text-lg font-normal">MERN DEVELOPER</div>
            <div className="detail text-center">
              {" "}
              A Full-Stack developer is a professional responsible for working
              on both front-end and back-end development processes. They design,
              develop, and maintain fully-fledged and functioning platforms with
              databases or servers. These servers do not need other third-party
              applications to build an entire system from scratch.{" "}
            </div>
          </div>
        </div>
        <div className="back absolute w-full my-rotate-180 h-full backface-hidden bg-gradient-to-r from-[#D21CB9] to-[#8E33BF] rounded-3xl"></div>
      </div>

      <div className="relative preserve-3d hover:my-rotate-180 duration-1000 w-[320px] h-[490px] hover:cursor-pointer container ">
        <div className="absolute backface-hidden w-full h-full bg-slate-800 rounded-3xl mx-auto overflow-hidden ">
          <div className="circle absolute w-[150px] h-[150px] bg-green-300 rounded-full border-4 border-white left-[90px] top-[70px]"></div>
          <div className="backG h-[150px] w-full bg-gradient-to-r from-[#01FDFF] to-[#00C6FF]"></div>
          <div className="backG h-[100%] w-full bg-transparent flex justify-center items-center flex-col pb-20">
            <div className="name text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#01FDFF] to-[#00C6FF]">
              Deepak Singh
            </div>
            <div className="role text-lg font-normal">MERN DEVELOPER</div>
            <div className="detail text-center">
              {" "}
              A Full-Stack developer is a professional responsible for working
              on both front-end and back-end development processes. They design,
              develop, and maintain fully-fledged and functioning platforms with
              databases or servers. These servers do not need other third-party
              applications to build an entire system from scratch.{" "}
            </div>
          </div>
        </div>
        <div className="box-border back absolute w-full my-rotate-180 h-full backface-hidden bg-gradient-to-r from-[#01FDFF] to-[#00C6FF] rounded-3xl"></div>
      </div>

      <div className="relative preserve-3d hover:my-rotate-180 duration-1000 w-[320px] h-[490px] hover:cursor-pointer container ">
        <div className="absolute backface-hidden w-full h-full bg-slate-800 rounded-3xl mx-auto overflow-hidden ">
          <div className="circle absolute w-[150px] h-[150px] bg-green-300 rounded-full border-4 border-white left-[90px] top-[70px]"></div>
          <div className="backG h-[150px] w-full bg-gradient-to-r from-[#FFC000] to-[#FF5B01]"></div>
          <div className="backG h-[100%] w-full bg-transparent flex justify-center items-center flex-col pb-20">
            <div className="name text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFC000] to-[#FF5B01]">
              Mohit Kumar
            </div>
            <div className="role text-lg font-normal">MERN DEVELOPER</div>
            <div className="detail text-center">
              {" "}
              A Full-Stack developer is a professional responsible for working
              on both front-end and back-end development processes. They design,
              develop, and maintain fully-fledged and functioning platforms with
              databases or servers. These servers do not need other third-party
              applications to build an entire system from scratch.{" "}
            </div>
          </div>
        </div>
        <div className="box-border back absolute w-full my-rotate-180 h-full backface-hidden bg-gradient-to-r from-[#FFC000] to-[#FF5B01] rounded-3xl"></div>
      </div>
    </div>
  );
}

export default App;
