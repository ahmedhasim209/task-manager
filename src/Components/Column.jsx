/* eslint-disable react/prop-types */
import Task from "./Task";
import StageHeader from "./StageHeader";
import { useDrop } from "react-dnd";

const Column = ({
  status,
  tasks,
  onAddTask,
  onStatusChange,
  onEdit,
  onDelete,
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item) => onStatusChange(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`rounded w-full ${
        isOver
          ? "dark:bg-[#1E1F25] dark:bg-[#1e1f2592] bg-gray-200"
          : "dark:bg-transparent bg-gray-100"
      } `}
    >
      {/* Header with title and add button  */}
      <StageHeader status={status} onAddTask={onAddTask} />
      {/* Render all tasks in this column */}
      <div className="mt-2 space-y-2">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onStatusChange={onStatusChange}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        ) : (
          <p className="text-sm text-gray-500 italic">No tasks here.</p>
        )}
      </div>
    </div>
  );
};

export default Column;
