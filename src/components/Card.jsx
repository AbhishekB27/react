import ironman from '../images/ironman.jpg'
import tony from '../images/tony.jpg'
const Card = (props) => {
    let prop1 = props.size
    let prop2 = Number(props.size)
    console.log(typeof prop1)
    console.log(typeof prop2)
  return (
    <div className='bg-green-200 h-auto flex justify-center items-center flex-wrap'>

        <div className="box-border perspective  h-auto p-3">
      <div className="relative w-[350px] h-[400px] preserve-3d hover:my-rotate-180 duration-1000">
        <div className="absolute bg-purple-500 w-full h-full rounded-3xl backface-hidden">
            <img className='absolute object-cover h-full' src={ironman} alt="" />
            <div className="overlay absolute h-full w-full bg-black opacity-[0.5] flex justify-center items-center">
                <span className=' text-2xl text-white'>IRON MAN</span>
            </div>
        </div>
        <div className="absolute bg-yellow-300 w-full h-full rounded-3xl my-rotate-180 backface-hidden">
            <img className='absolute h-full object-cover' src={tony} alt=""/>
            <div className="overlay absolute h-full w-full bg-black opacity-[0.5] flex justify-center items-center">
                <span className=' text-2xl text-white'>TONY STARK</span>
            </div>
        </div>
      </div>
    </div>

    <div className="box-border perspective  h-auto p-3">
      <div className="relative w-[350px] h-[400px] preserve-3d hover:my-rotate-180 duration-1000">
        <div className="absolute bg-purple-500 w-full h-full rounded-3xl backface-hidden">
            <img className='absolute object-cover h-full' src={ironman} alt="" />
            <div className="overlay absolute h-full w-full bg-black opacity-[0.5] flex justify-center items-center">
                <span className=' text-2xl text-white'>IRON MAN</span>
            </div>
        </div>
        <div className="absolute bg-yellow-300 w-full h-full rounded-3xl my-rotate-180 backface-hidden">
            <img className='absolute h-full object-cover' src={tony} alt=""/>
            <div className="overlay absolute h-full w-full bg-black opacity-[0.5] flex justify-center items-center">
                <span className=' text-2xl text-white'>TONY STARK</span>
            </div>
        </div>
      </div>
    </div>

    <div className="box-border perspective  h-auto p-3">
      <div className="relative w-[350px] h-[400px] preserve-3d hover:my-rotate-180 duration-1000">
        <div className="absolute bg-purple-500 w-full h-full rounded-3xl backface-hidden">
            <img className='absolute object-cover h-full' src={ironman} alt="" />
            <div className="overlay absolute h-full w-full bg-black opacity-[0.5] flex justify-center items-center">
                <span className=' text-2xl text-white'>IRON MAN</span>
            </div>
        </div>
        <div className="absolute bg-yellow-300 w-full h-full rounded-3xl my-rotate-180 backface-hidden">
            <img className='absolute h-full object-cover' src={tony} alt=""/>
            <div className="overlay absolute h-full w-full bg-black opacity-[0.5] flex justify-center items-center">
                <span className=' text-2xl text-white'>TONY STARK</span>
            </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Card;
