import { CiSearch } from "react-icons/ci";
import killanImg from "../assets/killan-james.png";
import designImg from "../assets/design-team.png";
import ahmedImg from "../assets/ahmed-medi.png";
import { BiCheckDouble } from "react-icons/bi";
import { BiSolidMessageDetail } from "react-icons/bi";
import claudiaImg from "../assets/claudia-maudi.png";
import claudiaGroupImg from "../assets/claudia-maudi-group.png";
import novitaImg from "../assets/novita.png";
import milieImg from "../assets/milie-nose.png";
import ikhsanImg from "../assets/ikhsan-sd.png";
import { MdMicNone } from "react-icons/md";
import adityaImg from "../assets/aditya.png";
import designImg2 from "../assets/design-team-2.png";
import membersImg from "../assets/chat-members.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import messageThree from "../assets/message-three.png";
import messageFour from "../assets/message-four.png";
import { FaMicrophone } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import profileImg from "../assets/profile-photo.png";
import { IoIosArrowDown } from "react-icons/io";
import figmaImg from "../assets/attachment-figma.png";
import diamondImg from "../assets/attachment-diamond.png";
import xdImg from "../assets/attachment-xd.png";
import svgImg from "../assets/attachment-svg.png";
import { FaPlus } from "react-icons/fa";
import milieImgTwo from "../assets/milie-nose-offline.png";

const Messages = () => {
  return (
    <div className="messages-page dark:bg-[#212229] grid grid-cols-[1fr_2fr_1fr] grid-rows-1 h-[89.2vh]">
      <div className="messages p-[15px] overflow-auto ">
        <h1 className="text-[30px] dark:text-[#FFFFFF] font-bold mb-[10px]">
          Messages
        </h1>
        <div className="input relative pb-[20px]">
          <input
            type="text"
            className="bg-[#F3F5F7] dark:bg-[#050505] dark:text-[#A9ABAD] focus:outline-none rounded-[10px] pl-8 p-[10px] h-[40px] w-full"
            placeholder="search..."
          />
          <span className="absolute left-3 top-[22.5px] transform -translate-y-1/2 pointer-events-none">
            <CiSearch className="text-[#A9ABAD] " />
          </span>
        </div>
        <div className="chats">
          <div className="recent pb-[30px]">
            <div className="killan-james flex justify-between items-center pb-[15px] ">
              <div className="content flex justify-between items-center">
                <img src={killanImg} alt="killanImg" />
                <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                  <p className="name dark:text-[#E9E9E9] text-[#1A1D1F] text-[16px] font-bold ">
                    Killan James
                  </p>
                  <p className="message text-[#258C60] text-[14px] ">
                    Typing...
                  </p>
                </div>
              </div>
              <div className="time flex flex-col justify-between items-end">
                <p className="message text-[#A9ABAD] text-[13px] ">4:30 PM</p>
                <p className="message flex justify-center items-center text-[#FFFFFF] bg-[#D34141] font-bold w-[16px] h-[16px] rounded-[50%] text-[14px]">
                  2
                </p>
              </div>
            </div>
            <div className="design-team flex justify-between items-center pb-[15px] ">
              <div className="content flex justify-between items-center">
                <img src={designImg} alt="designImg" />
                <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                  <p className="name dark:text-[#E9E9E9] text-[#1A1D1F] text-[16px] font-bold ">
                    Design Team
                  </p>
                  <p className="message dark:text-[#D2D2D2] text-[#292C31] text-[14px] ">
                    Hello! Everyone
                  </p>
                </div>
              </div>
              <div className="time flex flex-col justify-between items-end">
                <p className="message text-[#A9ABAD] text-[13px] ">9:36 AM</p>
                <BiCheckDouble className="text-[#41D37E] text-xl" />
              </div>
            </div>
            <div className="ahmed-medi flex justify-between items-center  ">
              <div className="content flex justify-between items-center">
                <img src={ahmedImg} alt="ahmedImg" />
                <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                  <p className="name dark:text-[#E9E9E9] text-[#1A1D1F] text-[16px] font-bold ">
                    Ahmed Medi
                  </p>
                  <p className="message dark:text-[#A9ABAD] text-[#A9ABAD] text-[14px] ">
                    Wow really Cool 🔥
                  </p>
                </div>
              </div>
              <div className="time flex flex-col justify-between items-end">
                <p className="message text-[#A9ABAD] text-[13px] ">1:15 AM</p>
              </div>
            </div>
          </div>
          <div className="all-chats">
            <div className="head text-[#B4B5B7] text-[14px] flex items-center pb-[15px]">
              <BiSolidMessageDetail className="mr-[5px] text-l" />
              <p>All Message</p>
            </div>
            <div className="chats">
              <div className="claudia-maudi flex justify-between items-center pb-[15px] ">
                <div className="content flex justify-between items-center">
                  <img src={claudiaImg} alt="claudiaImg" />
                  <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                    <p className="name dark:text-[#E9E9E9] text-[#1A1D1F] text-[16px] font-bold ">
                      Claudia Maudi
                    </p>
                    <p className="message text-[#258C60] text-[14px] ">
                      Typing...
                    </p>
                  </div>
                </div>
                <div className="time flex flex-col justify-between items-end">
                  <p className="message text-[#A9ABAD] text-[13px] ">4:30 PM</p>
                </div>
              </div>
              <div className="novita flex justify-between items-center pb-[15px] ">
                <div className="content flex justify-between items-center">
                  <img src={novitaImg} alt="killanImg" />
                  <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                    <p className="name dark:text-[#E9E9E9] text-[#1A1D1F] text-[16px] font-bold ">
                      Novita
                    </p>
                    <p className="message dark:text-[#A9ABAD] text-[#44464B] text-[14px] ">
                      yah, nice design
                    </p>
                  </div>
                </div>
                <div className="time flex flex-col justify-between items-end">
                  <p className="message text-[#A9ABAD] text-[13px] ">4:30 PM</p>
                  <p className="message flex justify-center items-center text-[#FFFFFF] bg-[#D34141] font-bold w-[16px] h-[16px] rounded-[50%] text-[14px]">
                    2
                  </p>
                </div>
              </div>
              <div className="milie-nose flex justify-between items-center pb-[15px] ">
                <div className="content flex justify-between items-center">
                  <img src={milieImg} alt="milieImg" />
                  <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                    <p className="name dark:text-[#E9E9E9] text-[#1A1D1F] text-[16px] font-bold ">
                      Milie Nose
                    </p>
                    <p className="message dark:text-[#A9ABAD] text-[#44464B] text-[14px] ">
                      Awesome 🔥
                    </p>
                  </div>
                </div>
                <div className="time flex flex-col justify-between items-end">
                  <p className="message text-[#A9ABAD] text-[13px] ">4:30 PM</p>
                  <p className="message flex justify-center items-center text-[#FFFFFF] bg-[#D34141] font-bold w-[16px] h-[16px] rounded-[50%] text-[14px]">
                    1
                  </p>
                </div>
              </div>
              <div className="ikhsan flex justify-between items-center pb-[15px] ">
                <div className="content flex justify-between items-center">
                  <img src={ikhsanImg} alt="ikhsanImg" />
                  <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                    <p className="name dark:text-[#E9E9E9] text-[#1A1D1F] text-[16px] font-bold ">
                      Ikhsan SD
                    </p>
                    <p className="message dark:text-[#44464B] text-[#B3B5B7] text-[14px] ">
                      <MdMicNone className=" dark:text-[#A9ABAD] inline-block text-xl" />
                      Voice message
                    </p>
                  </div>
                </div>
                <div className="time flex flex-col justify-between items-end">
                  <p className="message text-[#A9ABAD] text-[13px] ">
                    yesterday
                  </p>
                </div>
              </div>
              <div className="aditya flex justify-between items-center pb-[15px] ">
                <div className="content flex justify-between items-center">
                  <img src={adityaImg} alt="adityaImg" />
                  <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                    <p className="name dark:text-[#E9E9E9] text-[#1A1D1F] text-[16px] font-bold ">
                      Aditya
                    </p>
                    <p className="message dark:text-[#44464B] text-[#BFC0C1] text-[14px] ">
                      publish now
                    </p>
                  </div>
                </div>
                <div className="time flex flex-col justify-between items-end">
                  <p className="message text-[#A9ABAD] text-[13px] ">
                    yesterday
                  </p>
                  <BiCheckDouble className="text-[#41D37E] text-xl" />
                </div>
              </div>
              <div className="ahmed-medi flex justify-between items-center  ">
                <div className="content flex justify-between items-center">
                  <img src={ahmedImg} alt="ahmedImg" />
                  <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                    <p className="name dark:text-[#E9E9E9] text-[#1A1D1F] text-[16px] font-bold ">
                      Ahmed Medi
                    </p>
                    <p className="message dark:text-[#44464B] text-[#A9ABAD] text-[14px] ">
                      Wow really Cool 🔥
                    </p>
                  </div>
                </div>
                <div className="time flex flex-col  items-end">
                  <p className="message text-[#A9ABAD] text-[13px] ">1:15 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chat bg-[#F3F4F8] dark:bg-[#131517] overflow-auto ">
        <div className="head p-[15px] flex items-center justify-between mb-[15px]">
          <div className="chat-icon flex items-center">
            <img
              src={designImg2}
              alt="designImg2"
              className="w-[60px] h-[60px]"
            />
            <div className="text-info flex flex-col justify-between items-start ml-[20px]">
              <p className="name dark:text-[#F8F8F8] text-[#000000] text-[30px] font-medium ">
                Design Team
              </p>
              <p className="message dark:text-[#768396] text-[#768396] text-[14px] font-medium">
                60 member, 10 online
              </p>
            </div>
          </div>
          <div className="group-members">
            <img src={membersImg} alt="membersImg" />
          </div>
        </div>
        <div className="chat-deatils p-[15px]">
          <div className="preson-deatils flex items-start mb-[20px]">
            <img
              src={killanImg}
              alt="killanImg"
              className="w-[34px] h-[34px]"
            />
            <div className="message-holder felx flex-col">
              <div className="preson-info flex items-center ml-[10px]">
                <p className="name dark:text-[#F5F5F5] text-[#000000] text-[16px] font-medium  ">
                  Killan James
                </p>
                <p className="message-time dark:text-[#7C8B9F] text-[#768396] text-[13px] ml-[20px]">
                  10:12 AM
                </p>
              </div>
              <div className="messages ml-[10px]">
                <div className="message-one flex items-center">
                  <p className="bg-[#ECEFFA] dark:bg-[#1E1F25] text-[#768396] dark:text-[#768396] py-[5px] px-[10px] mb-[8px] rounded-[10px] rounded-tl-[0px] ">
                    Hi, Are you still Web Designer.
                  </p>
                  <BsThreeDotsVertical className="text-[#6B7C93] ml-[5px]" />
                </div>
                <div className="message-two flex items-center">
                  <p className="bg-[#ECEFFA] dark:bg-[#1E1F25] text-[#768396] dark:text-[#768396] py-[5px] px-[10px] mb-[8px] rounded-[10px] ">
                    would love to see some Design 😁
                  </p>
                  <BsThreeDotsVertical className="text-[#6B7C93] ml-[5px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="date w-full">
            <p className="text-center text-[#6B7C93] text-[13px] font-medium relative before:content-[''] before:absolute  before:top-[60%] before:left-[30px] before:h-[1px] before:w-[35%] before:bg-[#E6E8E9] dark:before:bg-[#212229]  after:content-[''] after:absolute  after:top-[60%] after:right-[30px] after:h-[1px] after:w-[35%] after:bg-[#E6E8E9] dark:after:bg-[#212229]">
              Today, March 24
            </p>
          </div>
          <div className="preson-deatils flex items-start my-[20px]">
            <img
              src={claudiaGroupImg}
              alt="claudiaGroupImg"
              className="w-[34px] h-[34px]"
            />
            <div className="message-holder felx flex-col">
              <div className="preson-info flex items-center ml-[10px]">
                <p className="name dark:text-[#F5F5F5] text-[#000000] text-[16px] font-medium  ">
                  Claudia Maudi
                </p>
                <p className="message-time dark:text-[#7C8B9F] text-[#768396] text-[13px] ml-[20px]">
                  10:30 AM
                </p>
              </div>
              <div className="messages ml-[10px]">
                <div className="message-one flex items-center">
                  <p className="bg-[#ECEFFA] dark:bg-[#1E1F25] text-[#768396] dark:text-[#768396] py-[5px] px-[10px] mb-[8px] rounded-[10px] rounded-tl-[0px] ">
                    Hey, happy to hear from you. Yes, I will be back in <br /> a
                    couple fo days.
                  </p>
                  <BsThreeDotsVertical className="text-[#6B7C93] ml-[5px]" />
                </div>
                <div className="message-two flex items-center">
                  <p className="bg-[#ECEFFA] dark:bg-[#1E1F25] text-[#768396] dark:text-[#768396] py-[5px] px-[10px] rounded-[10px] ">
                    Here are some Design i took earlier today.
                  </p>
                  <BsThreeDotsVertical className="text-[#6B7C93] ml-[5px]" />
                </div>
                <div className="images-holder pt-[10px] flex items-center">
                  <div className="message-three rounded-[10px] overflow-hidden w-[150px] h-[200px] mr-[10px]">
                    <img
                      src={messageThree}
                      alt="messageThree"
                      className="w-[100%] h-[100%] "
                    />
                  </div>
                  <div className="message-four rounded-[10px] overflow-hidden w-[150px] h-[200px]">
                    <img
                      src={messageFour}
                      alt="messageFour"
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="preson-deatils flex flex-row-reverse items-start pb-[5px]">
            <img
              src={ikhsanImg}
              alt="ikhsanImg"
              className="w-[34px] h-[34px]"
            />
            <div className="message-holder felx flex-col">
              <div className="preson-info flex flex-row-reverse items-center mr-[10px]">
                <p className="name dark:text-[#F5F5F5] text-[#000000] text-[16px] font-medium  ">
                  Ikhsan SD
                </p>
                <p className="message-time dark:text-[#F5F5F5] text-[#768396] text-[13px] mr-[20px]">
                  10:30 AM
                </p>
              </div>
              <div className="messages mr-[10px]">
                <div className="message-one flex flex-row-reverse items-center">
                  <p className="bg-[#5051F9] text-[#FFFFFF] py-[5px] px-[10px] mb-[8px] rounded-[10px] rounded-tr-[0px] ">
                    Great 🔥 That’s a nice design Idea. 😍👏
                  </p>
                  <BsThreeDotsVertical className="text-[#6B7C93] mr-[5px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-area dark:bg-[#282932] bg-[#ECEFFA] p-[20px] w-full ">
          <div className="text-holder flex justify-between items-center dark:bg-[#1E1F25] bg-[#ffffff] p-[10px] rounded-2xl">
            <div className="text flex items-center">
              <FaMicrophone className="text-[#777E90] mr-[10px] cursor-pointer text-xl outline-0" />
              <input
                type="text"
                placeholder="Add a comment..."
                className="bg-[#ffffff] dark:bg-[#1E1F25] dark:text-[#8899A8] focus:outline-none w-[500px]"
              />
            </div>
            <div className="icons flex items-center text-[#777E90]">
              <MdInsertPhoto className="mr-[10px] cursor-pointer text-xl" />
              <FaRegFaceSmileBeam className="mr-[10px] cursor-pointer text-xl" />
              <BsSend className="mr-[10px] cursor-pointer text-xl" />
              <FaLocationDot className="cursor-pointer text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="profile-info overflow-auto">
        <div className="profile-photo py-[35px] flex flex-col justify-center items-center">
          <div className="image-holder rounded-[50%] w-[100px] h-[100px] overflow-hidden mb-[10px]">
            <img src={profileImg} alt="profileImg" className="w-full h-full " />
          </div>
          <div className="text-info">
            <h3 className="dark:text-[#EEEEEE] text-[#1A1D1F] text-[16px]">
              Killan James
            </h3>
            <p className="text-[#768396] text-[12px]">@killan james</p>
          </div>
        </div>
        <div className="attachments">
          <div className="heding flex justify-between items-center px-[40px] dark:text-[#737A8F] text-[#424141] ">
            <h3 className="text-[16px] font-semibold  ">Attachments</h3>
            <IoIosArrowDown className="text-xl" />
          </div>
          <div className="files px-[40px] py-[24px]">
            <div className="attachments-files">
              <div className="file flex items-center pb-[27px] ">
                <div className="image-holder flex justify-center items-center w-[40px] h-[40px] rounded-[50%] dark:bg-[#282932] bg-[#FFFFFF] shadow ">
                  <img
                    src={figmaImg}
                    alt="figmaImg"
                    className="w-[15px] h-[22.5px] "
                  />
                </div>
                <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                  <p className="name text-[#000000] text-[14px] font-medium dark:text-[#F2F2F2] ">
                    Very important file.figma
                  </p>
                  <p className="message text-[#A8A8A8] dark:text-[#838797] text-[13px]">
                    7.5 MB 3.22.22, 11:15 AM
                  </p>
                </div>
              </div>
              <div className="file flex items-center pb-[27px] ">
                <div className="image-holder flex justify-center items-center w-[40px] h-[40px] rounded-[50%] dark:bg-[#282932] bg-[#FFFFFF] shadow ">
                  <img
                    src={diamondImg}
                    alt="diamondImg"
                    className="w-[22px] h-[22px] "
                  />
                </div>
                <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                  <p className="name text-[#000000] text-[14px] font-medium dark:text-[#F2F2F2] ">
                    Some file. scratch
                  </p>
                  <p className="message text-[#A8A8A8] dark:text-[#838797] text-[13px]">
                    7.5 MB 3.22.22, 11:15 AM
                  </p>
                </div>
              </div>
              <div className="file flex items-center pb-[27px] ">
                <div className="image-holder flex justify-center items-center w-[40px] h-[40px] rounded-[50%] dark:bg-[#282932] bg-[#FFFFFF] shadow ">
                  <img src={xdImg} alt="xdImg" className="w-[22px] h-[22px] " />
                </div>
                <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                  <p className="name text-[#000000] text-[14px] font-medium dark:text-[#F2F2F2] ">
                    List of someting. xd
                  </p>
                  <p className="message text-[#A8A8A8] dark:text-[#838797] text-[13px]">
                    7.5 MB 3.22.22, 11:15 AM
                  </p>
                </div>
              </div>
              <div className="file flex items-center pb-[27px] ">
                <div className="image-holder flex justify-center items-center w-[40px] h-[40px] rounded-[50%] dark:bg-[#282932] bg-[#FFFFFF] shadow ">
                  <img
                    src={svgImg}
                    alt="svgImg"
                    className="w-[22px] h-[22px] "
                  />
                </div>
                <div className="text-info flex flex-col justify-between items-start ml-[10px]">
                  <p className="name text-[#000000] text-[14px] font-medium dark:text-[#F2F2F2] ">
                    Very important fil.svg
                  </p>
                  <p className="message text-[#A8A8A8] dark:text-[#838797] text-[13px]">
                    7.5 MB 3.22.22, 11:15 AM
                  </p>
                </div>
              </div>
              <p className="view-all text-[14px] text-[#5051F9] cursor-pointer font-medium ">
                View all
              </p>
            </div>
          </div>
          <div className="members">
            <div className="heading">
              <div className="heding flex justify-between items-center px-[40px]  text-[#424141] ">
                <h3 className="text-[16px] font-semibold dark:text-[#737A8F] ">
                  Members
                </h3>
                <IoIosArrowDown className="text-xl cursor-pointer dark:text-[#C9C8C8] " />
              </div>
            </div>
          </div>
          <div className="add-member py-[22px] px-[40px] flex items-center text-[#5051F9] cursor-pointer ">
            <div className="plus flex justify-center items-center w-[40px] h-[40px] rounded-[50%] dark:bg-[#282932] bg-[#FFFFFF] shadow ">
              <FaPlus />
            </div>
            <p className="pl-[15px] font-medium ">Add Member</p>
          </div>
          <div className="members px-[40px]">
            <div className="member flex items-center pb-[24px] ">
              <div className="image-holder">
                <img
                  src={novitaImg}
                  alt="novitaImg"
                  className="w-[30px] h-[30px]"
                />
              </div>
              <p className="name pl-[10px] text-[16px] font-medium dark:text-[#E4E4E4] ">
                Novita
              </p>
            </div>
            <div className="member flex items-center pb-[24px] ">
              <div className="image-holder">
                <img
                  src={milieImgTwo}
                  alt="milieImg"
                  className="w-[30px] h-[30px]"
                />
              </div>
              <p className="name pl-[10px] text-[16px] font-medium dark:text-[#E4E4E4] ">
                Milie Nose
              </p>
            </div>
            <div className="member flex items-center pb-[24px] ">
              <div className="image-holder">
                <img
                  src={ikhsanImg}
                  alt="ikhsanImg"
                  className="w-[30px] h-[30px]"
                />
              </div>
              <p className="name pl-[10px] text-[16px] font-medium dark:text-[#E4E4E4] ">
                Ikhsan SD
              </p>
            </div>
            <div className="member flex items-center pb-[24px] ">
              <div className="image-holder">
                <img
                  src={adityaImg}
                  alt="adityaImg"
                  className="w-[30px] h-[30px]"
                />
              </div>
              <p className="name pl-[10px] text-[16px] font-medium dark:text-[#E4E4E4] ">
                Aditya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
