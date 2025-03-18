import { useState } from "react";
import TaskForm from "../Components/TaskForm";
import usersImgs from "../assets/tasl-header-left.png";
import Column from "../Components/Column";
import userImg1 from "../assets/chat-image-1.png";
import userImg2 from "../assets/chat-image-2.png";
import userImg3 from "../assets/chat-image-3.png";
import userImg4 from "../assets/chat-image-4.png";
import userImg5 from "../assets/chat-image-5.png";
import userImg55 from "../assets/chat-image-5-online.png";
import userImg6 from "../assets/chat-image-6.png";
import audioMessage from "../assets/audio.png";
import { IoMicOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useTasks } from "../TaskContext";

const Tasks = () => {
  const { tasks, setTasks } = useTasks();
  const [showForm, setShowForm] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const addTask = (task) => {
    const newTask = { id: Date.now(), ...task };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const changeTaskStatus = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="tasksPage">
      <DndProvider backend={HTML5Backend}>
        <div className="left-side w-[80%] dark:bg-[#131517] bg-[#F3F4F8] float-left h-[89.2vh] p-[20px] overflow-y-auto ">
          <div className="heading ">
            <div className="header w-full flex justify-between items-center mb-[10px] ">
              <p className=" text-3xl dark:text-[#F6F6F6] ">🔥 Tasks</p>
              <img
                className="cursor-pointer"
                src={usersImgs}
                alt="usersImage"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {["Backlog", "To Do", "In Progress", "Review"].map((status) => (
                <Column
                  key={status}
                  status={status}
                  tasks={tasks.filter((task) => task.status === status)}
                  onAddTask={(status) => {
                    setFormStatus(status);
                    setShowForm(true);
                  }}
                  onStatusChange={changeTaskStatus}
                  onEdit={editTask}
                  onDelete={deleteTask}
                />
              ))}
            </div>
            {showForm && (
              <TaskForm
                onClose={() => setShowForm(false)}
                onSubmit={addTask}
                status={formStatus}
              />
            )}
          </div>
        </div>
      </DndProvider>
      <div className="right-side dark:bg-[#1E1F25] w-[20%] float-right h-[89.2vh] pt-[20px] pb-[20px] pl-[10px] pr-[10px] relative ">
        <div className="deatils flex justify-around items-center">
          <p className=" dark:text-[#BFBFC9] text-[#232360] font-medium">
            Member
            <span className="text-[#5150F9] dark:text-[#FFFFFF] ml-[5px] ">
              (25)
            </span>
          </p>
          <p className="text-[#768396] dark:text-[#F1F1F1] font-medium cursor-pointer ">
            View All
          </p>
        </div>
        <div className="users-status mt-[20px] mb-[30px] flex justify-around items-center w-[80%] m-[auto] ">
          <img src={userImg1} alt="userImg" />
          <img src={userImg2} alt="userImg" />
          <img src={userImg3} alt="userImg" />
          <img src={userImg4} alt="userImg" />
          <img src={userImg5} alt="userImg" />
          <img src={userImg6} alt="userImg" />
        </div>
        <p className="text-[14px] pl-[25px] font-medium dark:text-[#F8F8F8] ">
          Group Chat
        </p>
        <div className="chat mt-[20px]">
          <div className="member-message flex justify-start items-center mb-[10px] ">
            <img
              className="w-[18px] h-[18px] mr-[5px]"
              src={userImg1}
              alt="userImg"
            />
            <div className="message-info flex flex-col justify-start items-start ">
              <div className="message p-[5px] dark:bg-[#282932] bg-[#F3F5F7] rounded rounded-bl-none dark:text-[#DFDFDF] text-[#768396] text-[12px] ">
                Hello! 👋
              </div>
              <div className="time text-[#AAB1B8] text-[8px] pl-2 ">
                08:00 am
              </div>
            </div>
          </div>
          <div className="owner-message flex flex-row-reverse justify-start items-center mb-[10px] ">
            <img
              className="w-[18px] h-[18px] ml-[5px]"
              src={userImg2}
              alt="userImg"
            />
            <div className="message-info flex flex-col justify-start items-start ">
              <div className="message p-[5px] bg-[#5051F9] rounded rounded-br-none text-[#FFFFFF] text-[12px] ">
                Hi, Everyone 🔥
              </div>
              <div className="time text-[#AAB1B8] text-[8px] pl-2 ">
                08:00 am
              </div>
            </div>
          </div>
          <div className="member-message flex justify-start items-center mb-[10px] ">
            <img
              className="w-[18px] h-[18px] mr-[5px]"
              src={userImg3}
              alt="userImg"
            />
            <div className="message-info flex flex-col justify-start items-start ">
              <div className="message p-[5px] dark:bg-[#282932] bg-[#F3F5F7] rounded rounded-bl-none dark:text-[#DFDFDF] text-[#768396] text-[12px] ">
                How are you,What did you do everyone
              </div>
              <div className="time text-[#AAB1B8] text-[8px] pl-2 ">
                08:03 am
              </div>
            </div>
          </div>
          <div className="member-message flex justify-start items-center mb-[10px] ">
            <img
              className="w-[18px] h-[18px] mr-[5px]"
              src={userImg4}
              alt="userImg"
            />
            <div className="message-info flex flex-col justify-start items-start ">
              <div className="message p-[5px] dark:bg-[#282932] bg-[#F3F5F7] rounded rounded-bl-none dark:text-[#DFDFDF] text-[#768396] text-[12px] ">
                Good ✌
              </div>
              <div className="time text-[#AAB1B8] text-[8px] pl-2 ">
                08:05 am
              </div>
            </div>
          </div>
          <div className="member-audio flex justify-start items-center mb-[10px] ">
            <img
              className="w-[18px] h-[18px] mr-[5px]"
              src={userImg55}
              alt="userImg"
            />
            <div className="message-info flex flex-col justify-start items-start ">
              <img
                src={audioMessage}
                className="message p-[5px] dark:bg-[#282932] bg-[#F3F5F7] rounded rounded-bl-none dark:text-[#DFDFDF] w-[170px] h-[37px] "
              />
              <div className="time text-[#AAB1B8] text-[8px] pl-2 ">
                08:08 am
              </div>
            </div>
          </div>
        </div>
        <div className="text-bar absolute flex gap-2 justify-around items-center bottom-[10px]">
          <input
            type="text"
            className="dark:bg-[#282932] bg-[#F3F5F7] focus:outline-none rounded-[10px] p-[10px] h-[50px] "
            placeholder="message"
          />
          <IoMicOutline className="font-medium text-xl dark:text-[#D1D1D1] cursor-pointer " />
          <BsThreeDots className="font-medium text-xl dark:text-[#D1D1D1] cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
