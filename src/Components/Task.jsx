/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import { useDrag } from "react-dnd";

const Task = ({ task, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    onEdit(editedTask);
    setIsEditing(false);
  };
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`p-4 mb-2 dark:bg-[#1E1F25] bg-white shadow rounded cursor-move ${
        isDragging ? "opacity-50" : "opacity-100"
      } `}
    >
      {isEditing ? (
        <div className="edit-holder">
          <h3 className=" text-[#232360] dark:text-[#F8F8F8] capitalize text-center font-bold text-xl mb-[5px]">
            edit the task
          </h3>
          <label className="block text-sm text-[#232360] dark:text-[#F8F8F8] font-medium mb-1">
            Category
          </label>
          <input
            type="text"
            className="w-full p-2 border-2 rounded focus:outline-none dark:bg-[#131517] dark:text-[#F8F8F8] dark:border-[#23272B] border-[#E5E5ED]"
            value={editedTask.category}
            onChange={(e) => {
              setEditedTask({ ...editedTask, category: e.target.value });
            }}
          ></input>
          <label className="block text-sm dark:text-[#F8F8F8] font-medium mb-1">
            Photo
          </label>
          <input
            type="file"
            className="w-full p-2 border-2 rounded focus:outline-none dark:bg-[#131517] dark:text-[#F8F8F8] dark:border-[#23272B] border-[#E5E5ED]"
            onChange={(e) => {
              setEditedTask({
                ...editedTask,
                photo: URL.createObjectURL(e.target.files[0]),
              });
            }}
          ></input>
          <label className="block text-sm dark:text-[#F8F8F8] font-medium mb-1">
            Task Name
          </label>
          <input
            type="text"
            className="w-full p-2 border-2 rounded focus:outline-none dark:bg-[#131517] dark:text-[#F8F8F8] dark:border-[#23272B] border-[#E5E5ED]"
            value={editedTask.name}
            onChange={(e) => {
              setEditedTask({ ...editedTask, name: e.target.value });
            }}
          ></input>
          <div className="color-holder">
            <label className="block dark:text-[#F8F8F8] text-sm font-medium mb-1">
              Color
            </label>
            <div className="flex space-x-2">
              {[
                "#FF0000",
                "#FFA500",
                "#008000",
                "#0000FF",
                "#00FFFF",
                "#800080",
              ].map((col) => (
                <button
                  type="button"
                  key={col}
                  onClick={() => setEditedTask({ ...editedTask, color: col })}
                  className="w-[40px] h-[20px] rounded-[5px] cursor-pointer "
                  style={{
                    backgroundColor: col,
                    border:
                      editedTask.color === col ? "2px solid black" : "none",
                  }}
                />
              ))}
            </div>
          </div>
          <label className="block dark:text-[#F8F8F8] text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            type="text"
            className="w-full h-[200px] resize-none p-2 border-2 rounded focus:outline-none dark:bg-[#131517] dark:text-[#F8F8F8] dark:border-[#23272B] border-[#E5E5ED] "
            value={editedTask.description}
            onChange={(e) => {
              setEditedTask({ ...editedTask, description: e.target.value });
            }}
          ></textarea>
          <button
            onClick={handleEdit}
            className="p-2 bg-[#008000] text-white rounded mr-2 cursor-pointer"
          >
            Save
          </button>
          <button
            onClick={handleEdit}
            className="p-2 bg-gray-500 text-white rounded cursor-pointer"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <div className="top-holder mb-[10px] flex justify-between items-center">
            <div
              className={`category pr-[10px] pl-[10px] pt-[2.5px] pb-[2.5px] rounded-[7px] text-[#ffffff] w-fit `}
              style={{ background: `${task.color}` }}
            >
              <p>{task.category}</p>
            </div>
            <div className=" flex justify-end ">
              <button
                onClick={() => setIsEditing(true)}
                className="p-[5px] dark:bg-[#262647] bg-[#E8EAFF] text-[#6772FE] rounded mr-2 cursor-pointer"
              >
                <FaRegEdit />
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="p-[5px] bg-[#D34141] text-white rounded cursor-pointer"
              >
                <BsTrash3 />
              </button>
            </div>
          </div>
          {task.photo && (
            <div className=" w-[100%] h-[100px] photo-holder overflow-hidden rounded-[12px] mb-[10px]">
              <img
                src={task.photo}
                className="h-full w-full"
                alt="task-photo"
              />
            </div>
          )}
          <div className="task-content">
            <h3 className="text-[13px] font-bold dark:text-[#F6F6F6] text-[#232360] ">
              {task.name}
            </h3>
            <p className="text-[12px] font-medium dark:text-[#768396] text-[#768396]">
              {task.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
