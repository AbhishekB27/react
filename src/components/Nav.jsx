export const Nav = ()=>{
    return(
        <div className="bg-crimson-400 text-white text-lg font-medium">
            <nav className="flex justify-between items-center p-2">
                <span>Abhishek Bahuguna</span>
                <ol className="hidden gap-10 justify-end items-center md:flex">
                    <li className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:70%_2px] transition-all duration-300 ease-out hover:cursor-pointer">HOME</li>
                    <li className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:70%_2px] transition-all duration-300 ease-out hover:cursor-pointer">ABOUT</li>
                    <li className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:70%_2px] transition-all duration-300 ease-out hover:cursor-pointer">CONTACT</li>
                    <li className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:70%_2px] transition-all duration-300 ease-out hover:cursor-pointer">SERVICES</li>
                    <li className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:70%_2px] transition-all duration-300 ease-out hover:cursor-pointer">BRAND</li>
                </ol>
            </nav>
        </div>
    )
}