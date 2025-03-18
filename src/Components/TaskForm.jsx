import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TaskForm = ({ onClose, onSubmit, status }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("#FF0000");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      category,
      color,
      description,
      photo,
      status,
    });
    onClose();
  };

  return (
    <div className="form-holder fixed inset-0 bg-opacity-[25%] bg-[#000000cc] flex justify-center items-center z-10">
      <div className="form dark:bg-[#131517] bg-[#F3F4F8] p-[25px] rounded-[15px]">
        <h2 className="text-left text-xl dark:text-[#E4E4E4] capitalize font-bold mb-[15px]">
          Add new task to{" "}
          <span className="text-[#232360] dark:text-[#505664] ">{status}</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="name-holder">
            <label className="block text-sm font-medium text-[#232360] dark:text-[#E4E4E4] mb-1">
              Task Name
            </label>
            <input
              value={name}
              type="text"
              className="w-full p-2 border-2 rounded focus:outline-none bg-[#F3F4F8] dark:bg-[#131517] dark:border-[#23272B]  dark:text-[#E5E5ED] border-[#E5E5ED]"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="category-holder">
            <label className="block text-sm font-medium text-[#232360] dark:text-[#E4E4E4] mb-1">
              Category
            </label>
            <input
              value={category}
              type="text"
              className="w-full p-2 border-2 rounded focus:outline-none bg-[#F3F4F8] dark:bg-[#131517] dark:border-[#23272B]  dark:text-[#E5E5ED] border-[#E5E5ED]"
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className="color-holder">
            <label className="block text-sm font-medium text-[#232360] dark:text-[#E4E4E4] mb-1">
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
                  onClick={() => setColor(col)}
                  className="w-[40px] h-[20px] rounded-[5px] cursor-pointer"
                  style={{
                    backgroundColor: col,
                    border: color === col ? "3px solid black" : "none",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="description-holder">
            <label className="block text-sm font-medium text-[#232360] dark:text-[#E4E4E4] mb-1">
              Description
            </label>
            <textarea
              value={description}
              className="w-full h-[200px] resize-none p-2 border-2 rounded focus:outline-none bg-[#F3F4F8] dark:bg-[#131517] dark:border-[#23272B]  dark:text-[#E5E5ED] border-[#E5E5ED] "
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="photo-holder">
            <label className="block text-sm font-medium text-[#232360] dark:text-[#E4E4E4] mb-1">
              Photo
            </label>
            <input
              type="file"
              className="w-[70%] p-1 border-2 rounded cursor-pointer bg-[#F3F4F8] dark:bg-[#131517] dark:border-[#23272B]  dark:text-[#E5E5ED] border-[#E5E5ED]"
              onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
            />
          </div>
          <div className="buttons-holder flex justify-end pt-2">
            <button
              type="button"
              className="mr-2 p-2 bg-[#FC9858] text-white rounded cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="p-2 bg-[#5051F9] text-white rounded cursor-pointer"
              onClick={onSubmit}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
