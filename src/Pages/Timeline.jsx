import timeLineHeadImg from "../assets/timeline-head.png";
import { FaAngleLeft } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { CgMathMinus } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import uxImg from "../assets/ux-members.png";
import informationImg from "../assets/information-members.png";
import designImg from "../assets/design-members.png";
import developersImg from "../assets/developers-members.png";
import phototypingImg from "../assets/phototyping-members.png";

const Timeline = () => {
  return (
    <div className="timeline dark:bg-[#131517] bg-[#F3F4F8] p-[20px] h-[89.2vh] overflow-auto ">
      <div className="heding w-[98%] m-auto flex justify-between items-center">
        <div className="left flex justify-between items-center">
          <p className="mr-[130px] text-[24px] font-semibold dark:text-[#F0F0F0] text-[#232360]">
            Timeline
          </p>
          <div className="today mr-[10px] px-[20px] py-[8px] border-2 border-[#5051F9] rounded-[16.5px] text-[14px] font-semibold text-[#5051F9] cursor-pointer ">
            Today
          </div>
          <div className="date flex justify-between items-center px-[8px] py-[8px] border-2 dark:border-[#1E2225] border-[#E3E3E3] rounded-[16.5px] text-[14px] font-semibold dark:text-[#D8D8D8] text-[#768396] gap-4 ">
            <FaAngleLeft className="cursor-pointer" />
            <p>June, 20,2022</p>
            <FaAngleLeft className="rotate-180 cursor-pointer " />
          </div>
        </div>
        <div className="right flex justify-between items-center">
          <div className="invite mr-[20px] bg-[#1EA7FF] text-[#ffffff] font-semibold text-[14px] px-[20px] py-[8px] rounded-[16.5px] cursor-pointer ">
            + Invite
          </div>
          <img src={timeLineHeadImg} alt="timeLineHeadImg" />
        </div>
      </div>
      <div className="time pt-[35px] w-[98%] m-auto flex justify-between items-center gap-[30px] text-[16px] font-medium dark:text-[#768396] text-[#768396]">
        <div>S 04</div>
        <div>S 05</div>
        <div>S 06</div>
        <div>S 07</div>
        <div>S 04</div>
        <div>S 05</div>
        <div>S 06</div>
        <div>S 07</div>
        <div>S 08</div>
        <div>S 09</div>
        <div>S 010</div>
        <div>S 011</div>
        <div>S 012</div>
        <div>S 013</div>
        <div>S 014</div>
        <div>S 015</div>
        <div>S 016</div>
        <div>S 018</div>
        <div>S 019</div>
        <div>S 020</div>
        <div>S 021</div>
      </div>
      <div className="main-content pt-[20px] w-[98%] m-auto flex justify-between items-center ">
        <div className="left-bar w-[290px] h-[100%]">
          <div className="ux-research dark:bg-[#1E1F25] bg-[#FFFFFF] rounded-[10px] px-[20px] py-[33px] flex justify-between items-center">
            <div className="left flex justify-between items-center">
              <FaPlus className="mr-[10px] text-2xl dark:text-[#1E1F25] text-[#ffffff] bg-[#1EA7FF] p-[5px] rounded-[8px] cursor-pointer " />
              <p className="font-semibold text-[14px] dark:text-[#F0F0F0] text-[#232360]">
                UX Research
              </p>
            </div>
            <div className="right flex justify-between items-center  ">
              <img src={uxImg} alt="uxImg" className="mr-[10px]" />
              <BsThreeDots className="cursor-pointer dark:text-[#768396] " />
            </div>
          </div>
          <div className="information mt-[20px] dark:bg-[#1E1F25] bg-[#FFFFFF] rounded-[10px] px-[20px] py-[33px] flex justify-between items-center ">
            <div className="left flex justify-between items-center">
              <FaPlus className="mr-[10px] text-2xl dark:text-[#1E1F25] text-[#ffffff] bg-[#5051F9] p-[5px] rounded-[8px] cursor-pointer " />
              <p className="font-semibold text-[14px] dark:text-[#F0F0F0] text-[#232360]">
                Information Arc...
              </p>
            </div>
            <div className="right flex justify-between items-center  ">
              <img
                src={informationImg}
                alt="informationImg"
                className="mr-[10px]"
              />
              <BsThreeDots className="cursor-pointer dark:text-[#768396] " />
            </div>
          </div>
          <div className="design mt-[20px] dark:bg-[#1E1F25] bg-[#FFFFFF] rounded-[10px] px-[20px] py-[33px]  ">
            <div className="head flex justify-between items-center ">
              <div className="left flex justify-between items-center">
                <CgMathMinus className="mr-[10px] text-2xl text-[#768396] border-2 border-[#768396] p-[5px] rounded-[8px] cursor-pointer " />
                <p className="font-semibold text-[14px] dark:text-[#F0F0F0] text-[#232360]">
                  Design Phase
                </p>
              </div>
              <div className="right flex justify-between items-center  ">
                <img src={designImg} alt="designImg" className="mr-[10px]" />
                <BsThreeDots className="cursor-pointer dark:text-[#768396] " />
              </div>
            </div>
            <div className="content pt-[15px] text-[16px] text-[#768396] font-semibold">
              <p className="mb-[10px]">Build Wireframe</p>
              <p>User Interface D..</p>
            </div>
          </div>
          <div className="phototyping mt-[20px] dark:bg-[#1E1F25] bg-[#FFFFFF] rounded-[10px] px-[20px] py-[33px] flex justify-between items-center ">
            <div className="left flex justify-between items-center">
              <FaPlus className="mr-[10px] text-2xl dark:text-[#1E1F25] text-[#ffffff] bg-[#F6BC3E] p-[5px] rounded-[8px] cursor-pointer " />
              <p className="font-semibold text-[14px] dark:text-[#F0F0F0] text-[#232360]">
                Phototyping
              </p>
            </div>
            <div className="right flex justify-between items-center  ">
              <img
                src={phototypingImg}
                alt="phototypingImg"
                className="mr-[10px]"
              />
              <BsThreeDots className="cursor-pointer dark:text-[#768396] " />
            </div>
          </div>
          <div className="development mt-[20px] dark:bg-[#1E1F25] bg-[#FFFFFF] rounded-[10px] px-[20px] py-[33px]  ">
            <div className="head flex justify-between items-center ">
              <div className="left flex justify-between items-center">
                <CgMathMinus className="mr-[10px] text-2xl text-[#768396] border-2 border-[#768396] p-[5px] rounded-[8px] cursor-pointer " />
                <p className="font-semibold text-[14px] dark:text-[#F0F0F0] text-[#232360]">
                  Development
                </p>
              </div>
              <div className="right flex justify-between items-center  ">
                <img
                  src={developersImg}
                  alt="developersImg"
                  className="mr-[10px]"
                />
                <BsThreeDots className="cursor-pointer dark:text-[#768396] " />
              </div>
            </div>
            <div className="content pt-[15px] text-[16px] text-[#768396] font-semibold">
              <p className="mb-[10px]">Back-End Dev..</p>
              <p>Front-End Dev..</p>
            </div>
          </div>
        </div>
        <div className="right flex-1 flex justify-between ml-[40px] items-center h-full ">
          <div className="line w-[1px] h-[744px] bg-[#EBEDF4] dark:bg-[#24252D] "></div>
          <div className="line w-[1px] h-[744px] bg-[#EBEDF4] dark:bg-[#24252D] "></div>
          <div className="line w-[1px] h-[744px] bg-[#EBEDF4] dark:bg-[#24252D] "></div>
          <div className="line w-[1px] h-[744px] bg-[#EBEDF4] dark:bg-[#24252D] "></div>
          <div className="line w-[1px] h-[744px] bg-[#EBEDF4] dark:bg-[#24252D] "></div>
          <div className="line w-[1px] h-[744px] bg-[#EBEDF4] dark:bg-[#24252D] "></div>
          <div className="line w-[1px] h-[744px] bg-[#EBEDF4] dark:bg-[#24252D] "></div>
          <div className="line w-[1px] h-[744px] bg-[#EBEDF4] dark:bg-[#24252D] "></div>
          <div className="line w-[1px] h-[744px] bg-[#EBEDF4] dark:bg-[#24252D] "></div>
          <div className="line w-[1px] h-[744px] bg-[#EBEDF4] dark:bg-[#24252D] "></div>
          <div className="line w-[1px] h-[744px] bg-[#EBEDF4] dark:bg-[#24252D] "></div>
          <div className="line w-[1px] h-[744px] bg-[#EBEDF4] dark:bg-[#24252D] "></div>
          <div className="line w-[1px] h-[744px] bg-[#EBEDF4] dark:bg-[#24252D] "></div>
          <div className="line w-[1px] h-[744px] bg-[#EBEDF4] dark:bg-[#24252D] "></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
