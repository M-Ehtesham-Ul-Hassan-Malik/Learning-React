import { useState } from "react";
import { CheckCircle, Trash2 } from "lucide-react";
import { Card } from "./components/Card";
import { CardContent } from "./components/CardContent";

const predefinedTasks = [
  "Complete project report",
  "Review code changes",
  "Attend team meeting",
  "Update documentation",
  "Fix UI bugs",
];

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (predefinedTasks.length > 0) {
      const newTask =
        predefinedTasks[Math.floor(Math.random() * predefinedTasks.length)];
      setTasks((prevTasks) => [...prevTasks, { text: newTask, completed: false }]);
    }
  };

  const markComplete = (index) => {
    console.log(`Marking task ${index} as complete`); // Debug log

    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      );

      console.log("Updated tasks:", updatedTasks); // Check updated state
      return updatedTasks;
    });
  };

  const deleteTask = (index) => {
    console.log(`Deleting task ${index}`); // Debug log
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <button
        onClick={addTask}
        className="mb-4 bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Add Random Task
      </button>
      <div className="w-full max-w-md space-y-2">
        {tasks.map((task, index) => (
          <Card
            key={index} // Force re-render
            className={`flex justify-between items-center p-4 border transition ${
              task.completed ? "bg-gray-300" : "bg-white"
            }`}
          >
            <CardContent
              className={`transition ${
                task.completed ? "line-through text-gray-500" : "text-black"
              }`}
            >
              {task.text}
            </CardContent>

            <div className="flex space-x-2">
              <button
                onClick={() => markComplete(index)}
                className="p-2 border rounded bg-gray-200 hover:bg-gray-300 transition"
              >
                <CheckCircle
                  className={task.completed ? "text-green-500" : "text-gray-500"}
                />
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="p-2 border rounded bg-red-200 hover:bg-red-300 transition"
              >
                <Trash2 className="text-red-500" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
