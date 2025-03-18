import { IoLinkOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import chartImg from "../assets/storage-chart.png";
import mediaImg from "../assets/images.png";
import docsImg from "../assets/files.png";
import musicImg from "../assets/music.png";
import otherImg from "../assets/other.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaFolder } from "react-icons/fa";
import barChart from "../assets/bar-chart.png";
import { FaArrowUp } from "react-icons/fa6";
import fileImg from "../assets/docx.png";
import photoImg from "../assets/images.png";
import figmaImg from "../assets/fig.png";
import illImg from "../assets/Illustration.png";
import proposalImg from "../assets/proposal-members.png";
import backImg from "../assets/back-ground.png";
import illmImg from "../assets/ill-members.png";
import { BsThreeDotsVertical } from "react-icons/bs";

const Files = () => {
  return (
    <div className="files dark:bg-[#131517] bg-[#F3F4F8] p-[15px] h-[89.2vh] overflow-y-auto ">
      <div className="header w-full flex justify-between items-center mb-[20px] ">
        <p className=" text-3xl dark:text-[#FFFFFF] ">Files</p>
        <div className="left-hrader flex justify-between items-center ">
          <div className="new-folder flex justify-between items-center p-[10px] bg-[#5051F9] text-[#FFFFFF] rounded-[23px] cursor-pointer mr-[10px] ">
            <FaPlus className="mr-[5px]" />
            Create New Folder
          </div>
          <div className="upload flex justify-between items-center cursor-pointer p-[9px] rounded-[23px] border dark:border-[#1E2124] border-[#D7D7D7] dark:text-[#F3F3F3] text-[#505050] ">
            <IoLinkOutline className="rotate-135" />
            Upload
          </div>
        </div>
      </div>
      <div className="content">
        <div className="top-row flex justify-between items-center gap-[20px] ">
          <div className="files-holder p-[20px] h-[400px] flex-1 dark:bg-[#1E1F25] bg-[#FFFFFF] rounded-[10px]">
            <div className="heading flex justify-between items-center ">
              <div className="files-head flex justify-around items-center ">
                <div className="files-icons flex justify-around items-center shadow-md shadow-[#5051F914] p-[5px] rounded">
                  <FaFolder className="text-[#5051F9] text-xl  " />
                  <IoIosArrowDown className="ml-[10px] cursor-pointer dark:text-[#F0F0F0] text-[#768396] text-xl " />
                </div>
                <p className="ml-[10px] font-medium dark:text-[#FDFDFD] text-[#232360] ">
                  All Files
                </p>
              </div>
              <div className="show-all flex justify-around items-center shadow-md shadow-[#5051F914] p-[5px] rounded font-medium dark:text-[#FDFDFD] text-[#232360] ">
                Show All
                <IoIosArrowDown className="cursor-pointer dark:text-[#EBECED] ml-[5px] text-[#768396] text-xl" />
              </div>
            </div>
            <div className="content pt-[10px] grid grid-cols-3 grid-rows-2 gap-5 h-[90%] ">
              <div className="border dark:bg-[#282932] border-[#E3EBEE] dark:border-none rounded-[10px] p-[10px] flex flex-col justify-around items-start ">
                <div className="flex justify-between items-center w-full ">
                  <FaFolder className="text-[#1EA7FF] text-[30px]  " />
                  <div className="flex">
                    <p className=" px-[7px] bg-[#5051F9] font-bold text-[#ffffff] text-xl  rounded-[9px] mr-[3px] ">
                      A
                    </p>
                    <p className=" px-[7px] bg-[#1EA7FF] font-bold text-[#ffffff] text-xl rounded-[9px] ">
                      B
                    </p>
                  </div>
                </div>
                <div className="file-text">
                  <p className="title dark:text-[#FDFDFD] text-[#232360] font-medium text-[14px] ">
                    Documents
                  </p>
                  <p className="files-count text-[#768396] text-[13px] ">
                    24 files
                  </p>
                </div>
              </div>
              <div className="border dark:bg-[#282932] border-[#E3EBEE] dark:border-none rounded-[10px] p-[10px] flex flex-col justify-around items-start ">
                <div className="flex justify-between items-center w-full ">
                  <FaFolder className="text-[#5051F9] text-[30px]  " />
                </div>
                <div className="file-text">
                  <p className="title dark:text-[#FDFDFD] text-[#232360] font-medium text-[14px] ">
                    Music
                  </p>
                  <p className="files-count text-[#768396] text-[13px] ">
                    102 files
                  </p>
                </div>
              </div>
              <div className="border dark:bg-[#282932] border-[#E3EBEE] dark:border-none rounded-[10px] p-[10px] flex flex-col justify-around items-start ">
                <div className="flex justify-between items-center w-full ">
                  <FaFolder className="text-[#1EA7FF] text-[30px]  " />
                  <div className="flex">
                    <p className=" px-[7px] bg-[#5051F9] font-bold text-[#ffffff] text-xl  rounded-[9px] mr-[3px] ">
                      A
                    </p>
                    <p className=" px-[7px] bg-[#1EA7FF] font-bold text-[#ffffff] text-xl rounded-[9px] ">
                      B
                    </p>
                  </div>
                </div>
                <div className="file-text">
                  <p className="title dark:text-[#FDFDFD] text-[#232360] font-medium text-[14px] ">
                    Work Project
                  </p>
                  <p className="files-count text-[#768396] text-[13px] ">
                    84 files
                  </p>
                </div>
              </div>
              <div className="border dark:bg-[#282932] border-[#E3EBEE] dark:border-none rounded-[10px] p-[10px] flex flex-col justify-around items-start ">
                <div className="flex justify-between items-center w-full ">
                  <FaFolder className="text-[#F7B000] text-[30px]  " />
                  <div className="flex">
                    <p className=" px-[7px] bg-[#5051F9] font-bold text-[#ffffff] text-xl  rounded-[9px] mr-[3px] ">
                      A
                    </p>
                  </div>
                </div>
                <div className="file-text">
                  <p className="title dark:text-[#FDFDFD] text-[#232360] font-medium text-[14px] ">
                    Personal Media
                  </p>
                  <p className="files-count text-[#768396] text-[13px] ">
                    2450 files
                  </p>
                </div>
              </div>
              <div className="border dark:bg-[#282932] border-[#E3EBEE] dark:border-none rounded-[10px] p-[10px] flex flex-col justify-around items-start ">
                <div className="flex justify-between items-center w-full ">
                  <FaFolder className="text-[#34D870] text-[30px]  " />
                </div>
                <div className="file-text">
                  <p className="title dark:text-[#FDFDFD] text-[#232360] font-medium text-[14px] ">
                    Reddingo Backup
                  </p>
                  <p className="files-count text-[#768396] text-[13px] ">
                    22 files
                  </p>
                </div>
              </div>
              <div className="border dark:bg-[#282932] border-[#E3EBEE] dark:border-none rounded-[10px] p-[10px] flex flex-col justify-around items-start ">
                <div className="flex justify-between items-center w-full ">
                  <FaFolder className="text-[#FF694A] text-[30px]  " />
                  <div className="flex">
                    <p className=" px-[7px] bg-[#1EA7FF] font-bold text-[#ffffff] text-xl rounded-[9px] ">
                      B
                    </p>
                  </div>
                </div>
                <div className="file-text">
                  <p className="title dark:text-[#FDFDFD] text-[#232360] font-medium text-[14px] ">
                    Root
                  </p>
                  <p className="files-count text-[#768396] text-[13px] ">
                    105 files
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="storage h-[400px] dark:bg-[#1E1F25] bg-[#FFFFFF] p-[20px] w-[350px] rounded-[10px] ">
            <div className="storage-space flex justify-around items-center p-[20px] dark:bg-[#282932] bg-[#F6F6F8] rounded-[10px] ">
              <img src={chartImg} alt="chartImg" />
              <div className="storage-info">
                <p className="text-[#232360] dark:text-[#F1F1F1] ">
                  Available Storage
                </p>
                <p className="text-[#768396] dark:text-[#B8BABC]">
                  130GB / 512GB
                </p>
              </div>
            </div>
            <div className="storage-details mt-[15px] p-[10px] pl-0">
              <div className="media mb-[15px] flex justify-start items-center w-full gap-[10px] ">
                <img
                  src={mediaImg}
                  alt="mediaImg"
                  className="p-[10px] text-[15px] dark:bg-[#282932] bg-[#F7F7F9] rounded-[5px]"
                />
                <div className="info w-full ">
                  <div className="text flex justify-between items-center mb-[10px] ">
                    <p className="title dark:text-[#EFEFEF] text-[#232360] font-medium text-[14px] ">
                      Media
                    </p>
                    <p className="space text-[#768396] font-medium text-[12px] ">
                      86 GB
                    </p>
                  </div>
                  <div className="bar w-[100%] h-[5px] rounded dark:bg-[#131517] bg-[#F7F7F9] relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[72%] before:bg-[#5051F9] before:rounded "></div>
                </div>
              </div>
              <div className="documents mb-[15px] flex justify-start items-center w-full gap-[10px] ">
                <img
                  src={docsImg}
                  alt="mediaImg"
                  className="p-[10px] text-[15px] dark:bg-[#282932] bg-[#F7F7F9] rounded-[5px]"
                />
                <div className="info w-full ">
                  <div className="text flex justify-between items-center mb-[10px] ">
                    <p className="title dark:text-[#EFEFEF] text-[#232360] font-medium text-[14px] ">
                      Documents
                    </p>
                    <p className="space text-[#768396] font-medium text-[12px] ">
                      26 GB
                    </p>
                  </div>
                  <div className="bar w-[100%] h-[5px] rounded dark:bg-[#131517] bg-[#F7F7F9] relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[32%] before:bg-[#FCC35B] before:rounded "></div>
                </div>
              </div>
              <div className="music mb-[15px] flex justify-start items-center w-full gap-[10px] ">
                <img
                  src={musicImg}
                  alt="mediaImg"
                  className="p-[10px] text-[15px] dark:bg-[#282932] bg-[#F7F7F9] rounded-[5px]"
                />
                <div className="info w-full ">
                  <div className="text flex justify-between items-center mb-[10px] ">
                    <p className="title dark:text-[#EFEFEF] text-[#232360] font-medium text-[14px] ">
                      Music
                    </p>
                    <p className="space text-[#768396] font-medium text-[12px] ">
                      10 GB
                    </p>
                  </div>
                  <div className="bar w-[100%] h-[5px] rounded dark:bg-[#131517] bg-[#F7F7F9] relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[7.2%] before:bg-[#FF694A] before:rounded "></div>
                </div>
              </div>
              <div className="other flex justify-start items-center w-full gap-[10px] ">
                <img
                  src={otherImg}
                  alt="mediaImg"
                  className="p-[10px] text-[15px] dark:bg-[#282932] bg-[#F7F7F9] rounded-[5px]"
                />
                <div className="info w-full ">
                  <div className="text flex justify-between items-center mb-[10px] ">
                    <p className="title dark:text-[#EFEFEF] text-[#232360] font-medium text-[14px] ">
                      Other File
                    </p>
                    <p className="space text-[#768396] font-medium text-[12px] ">
                      18 GB
                    </p>
                  </div>
                  <div className="bar w-[100%] h-[5px] rounded dark:bg-[#131517] bg-[#F7F7F9] relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[12.7%] before:bg-[#1EA7FF] before:rounded "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-row flex justify-between items-center gap-[20px] pt-[20px]">
          <div className="recent-files p-[20px] h-[370px] flex-1 dark:bg-[#1E1F25] bg-[#FFFFFF] rounded-[10px]">
            <div className="heading flex justify-between items-center pb-[10px] w-full">
              <p className="font-medium text-[30px] dark:text-[#F5F5F5] text-[#232360] ">
                Recent Files
              </p>
              <p className="font-medium text-[17px] text-[#1EA7FF] cursor-pointer ">
                View All
              </p>
            </div>
            <div className="content grid grid-cols-[2fr_1fr_1fr_1fr_1fr] grid-rows-5 gap-[10px] h-[80%] mx-auto">
              <div className="flex items-center text-[#768396] font-medium cursor-pointer">
                <p>Name</p>
                <FaArrowUp className=" text-[15px]" />
              </div>
              <div className="flex items-center text-[#768396] font-medium cursor-pointer">
                <p>Size</p>
                <FaArrowUp className="text-[125x ]" />
              </div>
              <div className="flex items-center text-[#768396] font-medium cursor-pointer">
                <p>Last Modified</p>
                <FaArrowUp className=" text-[15px] " />
              </div>
              <div className="flex items-center text-[#768396] font-medium cursor-pointer">
                <p>Members</p>
                <FaArrowUp className="text-[125x ] " />
              </div>
              <div className="flex items-center text-[#768396] font-medium cursor-pointer"></div>
              <div className="flex items-center">
                <img
                  src={fileImg}
                  alt="fileImg"
                  className="p-[5px] text-[15px] dark:bg-[#282932] bg-[#F7F7F9] rounded-[9px]"
                />
                <p className="title text-[17px] dark:text-[#F5F5F5] text-[#232360] font-medium ml-[8px] ">
                  Proposal.docx
                </p>
              </div>
              <div className="flex items-center text-[#768396] font-medium">
                2.9 MB
              </div>
              <div className="text-[#768396] font-medium flex items-center">
                Feb 25,2022
              </div>
              <div className="flex items-center">
                <img src={proposalImg} alt="" />
              </div>
              <div className="flex justify-end items-center">
                <BsThreeDotsVertical className="dark:text-[#768396]" />
              </div>
              <div className="flex items-center">
                <img
                  src={photoImg}
                  alt="photoImg"
                  className="p-[5px] text-[15px] dark:bg-[#282932] bg-[#F7F7F9] rounded-[9px]"
                />
                <p className="title text-[17px] dark:text-[#F5F5F5] text-[#232360] font-medium ml-[8px] ">
                  Background.jpg
                </p>
              </div>
              <div className="flex items-center text-[#768396] font-medium">
                3.5 MB
              </div>
              <div className="text-[#768396] font-medium flex items-center">
                Feb 24,2022
              </div>
              <div className="flex items-center">
                <img src={backImg} alt="backImg" />
              </div>
              <div className="flex justify-end items-center">
                <BsThreeDotsVertical className="dark:text-[#768396]" />
              </div>
              <div className="flex items-center">
                <img
                  src={figmaImg}
                  alt="figmaImg"
                  className="p-[5px] text-[15px] dark:bg-[#282932] bg-[#F7F7F9] rounded-[9px]"
                />
                <p className="title text-[17px] dark:text-[#F5F5F5] text-[#232360] font-medium ml-[8px] ">
                  Apex website.fig
                </p>
              </div>
              <div className="flex items-center text-[#768396] font-medium ">
                23.5 MB
              </div>
              <div className="text-[#768396] font-medium flex items-center">
                Feb 22,2022
              </div>
              <div className="flex items-center">
                <img src={proposalImg} alt="proposalImg" />
              </div>
              <div className="flex justify-end items-center">
                <BsThreeDotsVertical className="dark:text-[#768396]" />
              </div>
              <div className="flex items-center">
                <img
                  src={illImg}
                  alt="illImg"
                  className="p-[5px] text-[15px] dark:bg-[#282932] bg-[#F7F7F9] rounded-[9px]"
                />
                <p className="title text-[17px] dark:text-[#F5F5F5] text-[#232360] font-medium ml-[8px] ">
                  Illustration.ai
                </p>
              </div>
              <div className="flex items-center text-[#768396] font-medium ">
                7.2 MB
              </div>
              <div className="text-[#768396] font-medium flex items-center">
                Feb 20,2022
              </div>
              <div className="flex items-center">
                <img src={illmImg} alt="illmImg" />
              </div>
              <div className="flex justify-end items-center">
                <BsThreeDotsVertical className="dark:text-[#768396]" />
              </div>
            </div>
          </div>
          <div className="activity-chart h-[370px] dark:bg-[#1E1F25] bg-[#FFFFFF] p-[20px] w-[350px] rounded-[10px] flex justify-center items-start flex-col ">
            <p className="title dark:text-[#F1F1F1] text-[#232360] text-[24px] font-medium mb-[10px] ">
              Activity Chart
            </p>
            <img src={barChart} alt="barChart" className="m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
