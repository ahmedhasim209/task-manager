import coverImg from "../assets/cover.png";
import profImg from "../assets/prof-pic.png";
import { LuCloudUpload } from "react-icons/lu";

const Settings = () => {
  return (
    <div className="settings p-[20px] dark:bg-[#131517] bg-[#F3F4F8] h-[89.2vh] overflow-auto">
      <div className="profile relative ">
        <div className="cover w-[100%] h-[280px] m-auto ">
          <img src={coverImg} alt="coverImg" className="w-full h-full" />
        </div>
        <div className="prof-pic">
          <div className="prof-holder w-[135px] h-[135px] rounded-[50%] overflow-hidden border-[7px] border-white dark:border-[#131517] absolute bottom-[-90px] left-[80px] ">
            <img src={profImg} alt="profImg" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="text-buttons ml-[230px] flex justify-between items-center">
        <div className="text  pt-[15px] pb-[30px] font-semibold text-[30px] dark:text-[#E4E4E4] text-[#232360] ">
          Settings
        </div>
        <div className="buttons">
          <button className="border-2 dark:bg-[#131517] dark:border-[#1C1F22] dark:text-[#D9DADE] border-[#D9DADE] py-[5px] px-[10px] cursor-pointer mr-[10px] rounded-[8px] text-[14px] font-medium ">
            Cancel
          </button>
          <button className="border-2 border-[#5051F9] py-[5px] px-[10px] cursor-pointer mr-[10px] rounded-[8px] text-[14px] font-medium text-[#ffffff] bg-[#5051F9]">
            Save
          </button>
        </div>
      </div>
      <div className="links dark:text-[#505664] text-[#6A7181] pt-[30px] pb-[50px] ml-[89px] flex items-center gap-4 cursor-pointer ">
        <p className="text-[#232360] dark:text-[#E4E4E4] ">My details</p>
        <p>My details</p>
        <p>Profile</p>
        <p>Password</p>
        <p>Team</p>
        <p>Plan</p>
        <p>Billing</p>
        <p>Email</p>
        <p>Notifications</p>
      </div>
      <div className="inputs flex items-center gap-5 ml-[89px] w-[620px] flex-wrap">
        <div className="first flex flex-col items-start">
          <label
            htmlFor="first"
            className="pb-[10px] pl-[10px] font-medium text-[14px] dark:text-[#E4E4E4] text-[#232360] "
          >
            First name
          </label>
          <input
            id="first"
            type="text"
            placeholder="Killan"
            className="border-2 dark:border-[#23272B] dark:text-[#E5E5ED] border-[#E5E5ED] focus:outline-none rounded-[10px] p-[10px] h-[40px] w-[300px] bg-transparent "
          />
        </div>
        <div className="last flex flex-col items-start">
          <label
            htmlFor="last"
            className="pb-[10px] pl-[10px] font-medium text-[14px] dark:text-[#E4E4E4] text-[#232360] "
          >
            Last name
          </label>
          <input
            id="last"
            type="text"
            placeholder="James"
            className="border-2 dark:border-[#23272B] dark:text-[#E5E5ED] border-[#E5E5ED] focus:outline-none rounded-[10px] p-[10px] h-[40px] w-[300px] bg-transparent "
          />
        </div>
        <div className="last flex flex-col items-start">
          <label
            htmlFor="Email"
            className="pb-[10px] pl-[10px] font-medium text-[14px] dark:text-[#E4E4E4] text-[#232360] "
          >
            Email
          </label>
          <input
            id="Email"
            type="email"
            placeholder="killanjames@gmail.com"
            className="border-2 dark:border-[#23272B] dark:text-[#E5E5ED] border-[#E5E5ED] focus:outline-none rounded-[10px] p-[10px] h-[40px] w-[520px] bg-transparent "
          />
        </div>
      </div>
      <div className="upload mt-[50px] border-2 dark:border-[#23272B] dark:text-[#E5E5ED] border-[#E5E5ED] w-[560px] h-[125px] ml-[89px] rounded-[10px] flex flex-col justify-center items-center ">
        <div className="icon p-[10px] dark:bg-[#1E1F25] bg-[#E9ECF5] rounded-[50%] mb-[10px] cursor-pointer">
          <LuCloudUpload className="text-xl dark:text-[#FFFFFF] " />
        </div>
        <div className="text text-[13px] font-medium dark:text-[#5E6370] text-[#3B3F58] text-center ">
          Click to upload or drag and drop <br /> SVG, PNG, JPG or GIF (max,
          800x400px)
        </div>
      </div>
    </div>
  );
};

export default Settings;
