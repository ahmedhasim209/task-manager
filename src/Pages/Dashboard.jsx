// import React, { useState } from "react";
import { useTasks } from "../TaskContext";
import { SiGoogletasks } from "react-icons/si";
import victorSvg from "../assets/vector-task.svg";
import reviewSvg from "../assets/vector-review.svg";
import toSvg from "../assets/vector-to.svg";
import xBarImg from "../assets/x-bar.png";
import yBarImg from "../assets/y-bar.png";
import monthBarImg from "../assets/month-bar.png";
import { FaPlay } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { IoLink } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";
import { BiAlarm } from "react-icons/bi";
import { GrAppsRounded } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import callImg from "../assets/call-members.png";
import { BiPhoneCall } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import crisImg from "../assets/cris-morich.png";
import charlieImg from "../assets/charlie-chu.png";
import JasonImg from "../assets/jason-mandala.png";
import charmieImg from "../assets/charmie.png";
import { BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

const Dashboard = () => {
  const { tasks } = useTasks();

  // Count tasks by status
  const taskCount = {
    todo: tasks.filter((task) => task.status === "To Do").length,
    inProgress: tasks.filter((task) => task.status === "In Progress").length,
    review: tasks.filter((task) => task.status === "Review").length,
    backlog: tasks.filter((task) => task.status === "Backlog").length,
  };

  return (
    <div className="dashboard grid grid-cols-[3fr_1fr] grid-rows-1 h-[89.2vh]">
      <div className="left-side dark:bg-[#131517] bg-[#F3F4F8] float-left p-[20px] overflow-auto ">
        <div className="content-holder flex flex-col justify-between items-start gap-[10px] ">
          <div className="top-part h-[210px] w-[100%]">
            <div className="cart-holder w-[100%] h-[100%] flex justify-between items-center gap-[10px]">
              <div className="cart1 dark:bg-[#1E1F25] p-[15px] w-[275px] h-[210px] rounded-[16px] bg-[#FFFFFF]">
                <div className="top h-[40%] flex justify-between items-center">
                  <div className="task-title flex justify-between items-center ">
                    <SiGoogletasks className="text-3xl p-[8px] rounded-[50%] dark:text-[#D8D8D8] dark:bg-[#282932] bg-[#F3F7FD] text-[#8D98A9] font-medium" />
                    <p className=" dark:text-[#E1E3E7] text-[16px] text-[#7a828f] font-medium ml-[5px] ">
                      Backlog
                    </p>
                  </div>
                  <p className="dark:text-[#E1E3E7] text-[#1E1E1E] text-[22px] font-semibold ">
                    {taskCount.backlog}
                  </p>
                </div>
                <div className="hr w-[90%] h-[2px] m-auto bg-[#E8EDF1] my-[5px] dark:bg-[#24252D] "></div>
                <div className="bottom h-[50%] flex justify-between items-center ">
                  <img src={victorSvg} alt="victorSvg" className="w-[100px]" />
                  <p className="text-end font-semibold dark:text-[#898999]  text-[#768396] ">
                    <span className=" dark:text-[#898999] text-[#299702]">
                      08+
                    </span>{" "}
                    more <br /> from last week
                  </p>
                </div>
              </div>
              <div className="cart2 dark:bg-[#1E1F25] p-[15px] w-[275px] h-[210px] rounded-[16px] bg-[#FFFFFF]">
                <div className="top h-[40%] flex justify-between items-center">
                  <div className="task-title flex justify-between items-center ">
                    <SiGoogletasks className="text-3xl p-[8px] rounded-[50%] dark:text-[#D8D8D8] dark:bg-[#282932] bg-[#F3F7FD] text-[#8D98A9] font-medium" />
                    <p className=" dark:text-[#E1E3E7] text-[16px] text-[#7a828f] font-medium ml-[5px] ">
                      To Do
                    </p>
                  </div>
                  <p className="dark:text-[#E1E3E7] text-[#1E1E1E] text-[22px] font-semibold ">
                    {taskCount.todo}
                  </p>
                </div>
                <div className="hr w-[90%] h-[2px] m-auto bg-[#E8EDF1] my-[5px] dark:bg-[#24252D] "></div>
                <div className="bottom h-[50%] flex justify-between items-center ">
                  <img src={toSvg} alt="toSvg" className="w-[100px]" />
                  <p className="text-end font-semibold dark:text-[#898999]  text-[#768396] ">
                    <span className=" dark:text-[#898999] text-[#299702]">
                      08+
                    </span>{" "}
                    more <br /> from last week
                  </p>
                </div>
              </div>
              <div className="cart3 dark:bg-[#1E1F25] p-[15px] w-[275px] h-[210px] rounded-[16px] bg-[#FFFFFF]">
                <div className="top h-[40%] flex justify-between items-center">
                  <div className="task-title flex justify-between items-center ">
                    <SiGoogletasks className="text-3xl p-[8px] rounded-[50%] dark:text-[#D8D8D8] dark:bg-[#282932] bg-[#F3F7FD] text-[#8D98A9] font-medium" />
                    <p className=" dark:text-[#E1E3E7] text-[16px] text-[#7a828f] font-medium ml-[5px] ">
                      In Progress
                    </p>
                  </div>
                  <p className="dark:text-[#E1E3E7] text-[#1E1E1E] text-[22px] font-semibold ">
                    {taskCount.inProgress}
                  </p>
                </div>
                <div className="hr w-[90%] h-[2px] m-auto bg-[#E8EDF1] my-[5px] dark:bg-[#24252D] "></div>
                <div className="bottom h-[50%] flex justify-between items-center ">
                  <img src={victorSvg} alt="victorSvg" className="w-[100px]" />
                  <p className="text-end font-semibold dark:text-[#898999]  text-[#768396] ">
                    <span className=" dark:text-[#898999] text-[#299702]">
                      08+
                    </span>{" "}
                    more <br /> from last week
                  </p>
                </div>
              </div>
              <div className="cart4 dark:bg-[#1E1F25] p-[15px] w-[275px] h-[210px] rounded-[16px] bg-[#FFFFFF]">
                <div className="top h-[40%] flex justify-between items-center">
                  <div className="task-title flex justify-between items-center ">
                    <SiGoogletasks className="text-3xl p-[8px] rounded-[50%] dark:text-[#D8D8D8] dark:bg-[#282932] bg-[#F3F7FD] text-[#8D98A9] font-medium" />
                    <p className=" dark:text-[#E1E3E7] text-[16px] text-[#7a828f] font-medium ml-[5px] ">
                      Review
                    </p>
                  </div>
                  <p className="dark:text-[#E1E3E7] text-[#1E1E1E] text-[22px] font-semibold ">
                    {taskCount.review}
                  </p>
                </div>
                <div className="hr w-[90%] h-[2px] m-auto bg-[#E8EDF1] my-[5px] dark:bg-[#24252D] "></div>
                <div className="bottom h-[50%] flex justify-between items-center ">
                  <img src={reviewSvg} alt="reviewSvg" className="w-[100px]" />
                  <p className="text-end font-semibold dark:text-[#898999]  text-[#768396] ">
                    <span className=" dark:text-[#898999] text-[#299702]">
                      08+
                    </span>{" "}
                    more <br /> from last week
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mid-part p-[25px] h-[370px] dark:bg-[#1E1F25] bg-[#FFFFFF] w-full rounded-[16px]">
            <div className="heading flex justify-between items-center pb-[10px]">
              <p className="text-[#232360] dark:text-[#FAFAFA] text-[24px] font-semibold pb-[10px] ">
                Task Done
              </p>
              <div className="date flex justify-between items-center gap-[40px] text-[18px] text-[#232360] dark:text-[#D7D7D7] font-semibold ">
                <p className="pb-[10px]">Daily</p>
                <p className="pb-[10px]">Weekly</p>
                <p className="text-[#1EA7FF] border-b-2 border-[#1EA7FF] pb-[10px] ">
                  Monthly
                </p>
              </div>
            </div>
            <div className="chart flex  gap-3 justify-around items-center">
              <img src={xBarImg} alt="xBarImg" className="pb-[50px] " />
              <div className="main-chart flex-1 ">
                <img src={yBarImg} alt="yBarImg" className="w-full h-[255px]" />
                <img
                  src={monthBarImg}
                  alt="monthBarImg"
                  className="w-full h-[100%]"
                />
              </div>
            </div>
          </div>
          <div className="bottom-part p-[25px] mb-[50px] h-[250px] w-full rounded-[16px]">
            <div className="heading">
              <p className="text-[24px] dark:text-[#FFFFFF] text-[#232360] font-semibold pb-[25px] ">
                Task
              </p>
            </div>
            <div className="task-cart w-full h-[85px] rounded-[10px] dark:bg-[#1E1F25] bg-[#FFFFFF] mb-[20px] flex justify-between items-center overflow-hidden ">
              <div className="time flex justify-between items-center dark:bg-[#212229] bg-[#FBFAFF] p-[20px] pl-[30px] h-full ">
                <div className="play-icon w-[35px] h-[35px] flex justify-center items-center bg-[#5051F9] mr-[10px]  rounded-[50%] ">
                  <FaPlay className="text-[#FFFFFF] p-[5px] text-2xl" />
                </div>
                <div className="text flex flex-col justify-between items-center ">
                  <p className=" text-[14px] font-medium dark:text-[#FFFFFF] ">
                    Start from
                  </p>
                  <div className="time flex justify-between items-center dark:text-[#C6C6C6] text-[#778399] text-[13px] ">
                    <LuClock3 className=" mr-[5px] mt-[1px] text-[15px] " />
                    <p>9.00 am</p>
                  </div>
                </div>
              </div>
              <div className="task-details flex flex-col justify-between items-start ml-[-100px] ">
                <p className="text-[16px] dark:text-[#EDEDED] text-[#23235F] font-medium ">
                  Search Inspiration for project
                </p>
                <div className="links flex justify-between items-center">
                  <div className="link flex justify-between items-center pr-[20px] relative before:absolute before:content-[''] before:top-0 before:right-[6px] before:w-[2px] before:h-[90%] before:mx-auto dark:before:bg-[#2F3039] before:bg-[#E8EDF3] ">
                    <IoLink className="rotate-135 dark:text-[#C2C7D0] text-[#95A4BB] text-xl mt-[3px] mr-[5px] " />
                    <p className=" text-[#5453F6] dark:text-[#5453F6] text-[13px] font-medium cursor-pointer ">
                      www.uistore.com
                    </p>
                  </div>
                  <div className="comment flex justify-between items-center">
                    <FaRegCommentDots className=" dark:text-[#C2C7D0] text-[#95A4BB] text-xl mt-[3px] mr-[5px]" />
                    <p className="text-[#95A4BB] dark:text-[#C2C7D0] text-[13px] font-medium">
                      8 comments
                    </p>
                  </div>
                </div>
              </div>
              <div className="task-percent flex flex-col justify-between items-start gap-[10px] ml-[-75px]">
                <p className=" text-[16px] text-[#23235F] dark:text-[#EDEDED] font-semibold ">
                  24% complete
                </p>
                <div className="bar w-[200px] bg-[#E3E8EE] dark:bg-[#2A2B34] rounded-[6px] h-[5px] overflow-hidden relative before:absolute before:content-[''] before:top-0 before:left-0 before:w-[24%] before:h-[100%] before:bg-[#23B2FF] before:rounded-[6px] "></div>
              </div>
              <div className="reminder flex justify-between items-center p-[10px] dark:bg-[#282932] bg-[#EDECFE] mr-[30px] rounded-[9px] text-[#5051F9] dark:text-[#E9E9E9] font-semibold cursor-pointer ">
                <BiAlarm className="mr-[5px] text-xl" />
                <p>Reminder</p>
              </div>
            </div>
            <div className="task-cart w-full h-[85px] rounded-[10px] dark:bg-[#1E1F25] bg-[#FFFFFF] mb-[20px] flex justify-between items-center overflow-hidden ">
              <div className="time flex justify-between items-center dark:bg-[#212229] bg-[#FBFAFF] p-[20px] pl-[30px] h-full ">
                <div className="play-icon w-[35px] h-[35px] flex justify-center items-center bg-[#5051F9] mr-[10px]  rounded-[50%] ">
                  <FaPlay className="text-[#FFFFFF] p-[5px] text-2xl" />
                </div>
                <div className="text flex flex-col justify-between items-center ">
                  <p className=" text-[14px] font-medium dark:text-[#FFFFFF] ">
                    Start from
                  </p>
                  <div className="time flex justify-between items-center dark:text-[#C6C6C6] text-[#778399] text-[13px] ">
                    <LuClock3 className=" mr-[5px] mt-[1px] text-[15px] " />
                    <p>3.00 am</p>
                  </div>
                </div>
              </div>
              <div className="task-details flex flex-col justify-between items-start ml-[-100px] ">
                <p className="text-[16px] dark:text-[#EDEDED] text-[#23235F] font-medium ">
                  Search Inspiration for project
                </p>
                <div className="links flex justify-between items-center">
                  <div className="link flex justify-between items-center pr-[20px] relative before:absolute before:content-[''] before:top-0 before:right-[6px] before:w-[2px] before:h-[90%] before:mx-auto dark:before:bg-[#2F3039] before:bg-[#E8EDF3] ">
                    <IoLink className="rotate-135 dark:text-[#C2C7D0] text-[#95A4BB] text-xl mt-[3px] mr-[5px] " />
                    <p className=" text-[#5453F6] text-[13px] font-medium cursor-pointer ">
                      www.uistore.org
                    </p>
                  </div>
                  <div className="comment flex justify-between items-center dark:text-[#C2C7D0]">
                    <FaRegCommentDots className="text-[#95A4BB] dark:text-[#C2C7D0] text-xl mt-[3px] mr-[5px]" />
                    <p className="text-[#95A4BB] dark:text-[#C2C7D0] text-[13px] font-medium">
                      5 comments
                    </p>
                  </div>
                </div>
              </div>
              <div className="task-percent flex flex-col justify-between items-start gap-[10px] ml-[-75px]">
                <p className=" text-[16px] dark:text-[#EDEDED] text-[#23235F] font-semibold ">
                  60% complete
                </p>
                <div className="bar w-[200px] bg-[#E3E8EE] dark:bg-[#2A2B34] rounded-[6px] h-[5px] overflow-hidden relative before:absolute before:content-[''] before:top-0 before:left-0 before:w-[60%] before:h-[100%] before:bg-[#5051F9] before:rounded-[6px] "></div>
              </div>
              <div className="reminder flex justify-between items-center p-[10px] dark:bg-[#282932] bg-[#EDECFE] mr-[30px] rounded-[9px] text-[#5051F9] dark:text-[#E9E9E9] font-semibold cursor-pointer ">
                <BiAlarm className="mr-[5px] text-xl" />
                <p>Reminder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side  dark:bg-[#1E1F25] overflow-auto p-[20px] ">
        <div className="scheudle">
          <div className="head flex justify-between items-center pb-[20px] ">
            <p className="text-[20px] dark:text-[#FFFFFF] text-[#232360] font-semibold ">
              Today’s Scheudle
            </p>
            <div className="icons flex justify-between items-center px-[10px] py-[5px] rounded-[14.5px] dark:bg-[#000000] bg-[#F4F4F4] ">
              <GrAppsRounded className="mr-[15px] dark:text-[#C8CCD7] text-[#C8CCD7]" />
              <MdDateRange className="dark:text-[#7B8492] text-[#768396]" />
            </div>
          </div>
          <div className="call-head pb-[25px] ">
            <div className="text flex justify-between items-center text-[#1EA7FF] text-[12px] ">
              <p>30 minute call with Client</p>
              <p>+ Invite</p>
            </div>
            <p className="text-[18px] dark:text-[#FFFFFF] text-[#232360] font-medium ">
              Project Discovery Call
            </p>
          </div>
          <div className="call w-[315px] h-[70px] rounded-[10px] bg-[#5051F9] flex justify-around items-center">
            <img src={callImg} alt="callImg" className=" w-[95px] h-[30px] " />
            <div className="time text-[#FFFFFF] text-[16px] font-medium ">
              28:35
            </div>
            <div className="icons flex justify-between items-center text-xl font-medium text-[#FFFFFF] gap-[10px] ">
              <BiPhoneCall />
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
        <div className="hr w-[90%] h-[3px] m-auto dark:bg-[#242424] bg-[#E8EDF1] mt-[30px] "></div>
        <div className="messages pb-[30px] ">
          <p className="text-[20px] dark:text-[#FFFFFF] text-[#232360] font-semibold py-[20px] ">
            Messages
          </p>
          <div className="chat">
            <div className="cris flex justify-between items-center pb-[15px] ">
              <div className="content flex justify-between items-center">
                <img
                  src={crisImg}
                  alt="crisImg"
                  className="p-[2px] rounded-[50%] border-2 border-[#F1B032] "
                />
                <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                  <p className="name dark:text-[#FFFFFF] text-[#232360] text-[16px] font-semibold ">
                    Cris Morich
                  </p>
                  <p className="message dark:text-[#9BABC5] text-[#768396] text-[16px] font-medium ">
                    Hi Angelina! How are You?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="chat">
            <div className="charmie flex justify-between items-center pb-[15px] ">
              <div className="content flex justify-between items-center">
                <img
                  src={charmieImg}
                  alt="charmieImg"
                  className="p-[2px] rounded-[50%] border-2 border-[#EDA0A8] "
                />
                <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                  <p className="name dark:text-[#FFFFFF] text-[#232360] text-[16px] font-semibold ">
                    Charmie
                  </p>
                  <p className="message dark:text-[#9BABC5] text-[#768396] text-[16px] font-medium ">
                    Do you need that design?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="chat">
            <div className="jason flex justify-between items-center pb-[15px] ">
              <div className="content flex justify-between items-center">
                <img
                  src={JasonImg}
                  alt="JasonImg"
                  className="p-[2px] rounded-[50%] border-2 border-[#79C4DB] "
                />
                <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                  <p className="name dark:text-[#FFFFFF] text-[#232360] text-[16px] font-semibold ">
                    Jason Mandala
                  </p>
                  <p className="message dark:text-[#9BABC5] text-[#768396] text-[16px] font-medium ">
                    What is the price of hourly...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="chat">
            <div className="charlie-chu flex justify-between items-center pb-[15px] ">
              <div className="content flex justify-between items-center">
                <img
                  src={charlieImg}
                  alt="charlieImg"
                  className="p-[2px] rounded-[50%] border-2 border-[#AA98CA] "
                />
                <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                  <p className="name dark:text-[#FFFFFF] text-[#232360] text-[16px] font-semibold ">
                    Charlie Chu
                  </p>
                  <p className="message dark:text-[#9BABC5] text-[#768396] text-[16px] font-medium ">
                    Awsome design!!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="new-task">
          <div className="head py-[20px] flex justify-between items-center ">
            <p className="text-[20px] dark:text-[#FFFFFF] text-[#232360] font-semibold">
              New Task
            </p>
            <BsThreeDots className="text-[#E8EDF1] text-2xl " />
          </div>
          <p className="text-[14px] dark:text-[#9BABC5] text-[#768396] font-medium pb-[20px] ">
            Task Title
          </p>
          <input
            type="text"
            className="bg-[#E8EDF1] dark:bg-[#050505] dark:text-[#FFFFFF] focus:outline-none rounded-[10px] p-[10px] h-[40px] w-[90%] m-auto mb-[15px] "
            placeholder="Create New Task!"
          />
          <div className="emojis flex justify-between items-center ">
            <MdKeyboardArrowLeft className="text-xl text-[#5051F9] " />
            <p>🎉 😍 😁 🔥 😘 😉 😎 👩 🙄</p>
            <MdKeyboardArrowLeft className="text-xl text-[#5051F9] rotate-180 " />
          </div>
        </div>
        <div className="hr w-[90%] h-[3px] m-auto dark:bg-[#242424] bg-[#E8EDF1] mt-[30px] "></div>
        <div className="add-collaborators py-[20px]">
          <p className="text-[13px] dark:text-[#FFFFFF] text-[#768396] font-medium ">
            Add Collaborators
          </p>
          <div className="collaborators pt-[10px] flex justify-between items-center ">
            <div className="member-one flex justify-between items-center gap-1 px-[10px] py-[7px] rounded-[17.5px] dark:bg-[#262647] bg-[#E8E8FF]">
              <div className="member-img w-[22px] h-[22px]">
                <img src={charlieImg} alt="charlieImg" />
              </div>
              <p className=" text-[13px] text-[#5051F9] font-medium dark:text-[#FFFFFF] ">
                Angela
              </p>
              <AiOutlinePlus className="text-xl text-[#5051F9] dark:text-[#FFFFFF] font-medium rotate-45 " />
            </div>
            <div className="member-two flex justify-between items-center gap-1 px-[10px] py-[7px] rounded-[17.5px] dark:bg-[#02314F] bg-[#E5F5FF] ">
              <div className="member-img w-[22px] h-[22px]">
                <img src={JasonImg} alt="JasonImg" />
              </div>
              <p className=" text-[13px] text-[#1EA7FF] dark:text-[#FFFFFF] font-medium ">
                Chris
              </p>
              <AiOutlinePlus className="text-xl text-[#1EA7FF] dark:text-[#FFFFFF] font-medium rotate-45 " />
            </div>
            <div className="add w-[36px] h-[36px] rounded-[50%] dark:bg-[#000000] bg-[#E8EDF1] flex justify-center items-center ">
              <AiOutlinePlus className="text-2xl dark:text-[#FFFFFF] text-[#232360]" />
            </div>
            <div className="next w-[36px] h-[36px] rounded-[50%] bg-[#5051F9] flex justify-center items-center ">
              <MdKeyboardArrowLeft className="text-2xl text-[#FFFFFF] rotate-180 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
