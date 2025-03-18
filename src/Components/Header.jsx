import { FaRegBell } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import userImage from "../assets/Ahmed-Hashim.jpg";
import { useTheme } from "../ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="header dark:bg-[#1E1F25] w-[94%] h-[75px] bg-[#FFFFFF] float-right">
      <nav className="flex items-center justify-end relative h-[100%]">
        <div className="search-holder absolute left-[50%] transform translate-x-[-95%]">
          <input
            type="text"
            className="dark:bg-[#050505] dark:text-[#F3F7FA] dark:placeholder:text-[#9BABC5] bg-[#F3F7FA] focus:outline-none h-[30px] p-5 placeholder:text-gray-600 text-lg rounded-[5px] w-[400px]"
            placeholder="Search anything..."
          />
          <IoSearchOutline className="absolute inset-y-0 right-0 flex items-center pr-3 text-3xl top-1 text-[#94A2BC]" />
        </div>
        <div className="right-part flex text-white mr-[30px] items-center justify-center ">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 mr-[10px]"
          >
            {theme === "dark" ? (
              <MdLightMode className="text-yellow-400" />
            ) : (
              <MdDarkMode className="text-gray-500" />
            )}
          </button>
          <FaRegBell className="mr-[10px] cursor-pointer text-2xl dark:text-[#FEFEFE] text-[#768396] " />
          <div className="uImageH w-[52px] h-[52px] rounded-[50%] bg-[#E7E7FF] flex items-center justify-center overflow-hidden ">
            <img
              src={userImage}
              alt="user"
              className="cursor-pointer border-2 border-blue w-[50px] h-[50px] rounded-[50%]"
            />
          </div>
          <IoIosArrowDown className="ml-[2px] cursor-pointer dark:text-[#FEFEFE] text-[#5250F9] text-2xl" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
