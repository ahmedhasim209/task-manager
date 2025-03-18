/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa6";

const StageHeader = ({ status, onAddTask }) => {
  return (
    <div className="stage-head flex justify-between items-center w-full p-[10px] dark:bg-[#1E1F25] bg-[#FFFFFF] rounded-[7px]">
      <h2 className=" dark:text-[#F6F6F6] text-[#232360] text-[17px] font-medium">
        {status}
      </h2>
      <button
        onClick={() => onAddTask(status)}
        className="p-[5px] text-[15px] dark:bg-[#4C5BFC] bg-[#E8EAFF] rounded-[5px] dark:text-[#FFFFFF] text-[#6772FE] cursor-pointer"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default StageHeader;
