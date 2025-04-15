import { useParams } from "react-router";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Task } from "../types/Task";
import { useAppDispatch } from "../store/hooks";
import { addTask } from "../store/tasksSlice";
import { useNavigate } from "react-router";

function CreateTasks() {
  const { projectId} = useParams<string>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const [taskState, setTaskState] = useState({
    projectId: projectId,
    title: "",
    description: "",
    priority: "low",
    status: "🟣 To Do",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(taskState.title !== "" && taskState.description !== "") {
      console.log(taskState)
      const task: Task = {
        id:nanoid(10),
        projectId: taskState.projectId?? "",
        title: taskState.title,
        description: taskState.description,
        priority: (taskState.priority as "high" | "medium" | "low") ?? "high",
        status: (taskState.status as "🟣 To Do" | "🔵 In Progress" | "🟢 Done") ?? "🟣 To Do",
      }
      dispatch(addTask(task))
      navigate("/"+projectId)
      setTaskState({
        projectId: projectId,
        title: "",
        description: "",
        priority: "low",
        status: "🟣 To Do",
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTaskState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div  className="w-full h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <h1 className="text-3xl font-bold">Create Tasks</h1>
        <form className="flex flex-col gap-4 w-1/2" onSubmit={handleSubmit}>
          
          <input type="text" 
          placeholder="Task Title" 
          className="p-2 bg-gray-800 rounded"
          onChange={handleChange}
          required
          name="title"
          />
          
          <textarea 
          required
          name="description"
            onChange={handleChange}
          placeholder="Task Description" className="p-2 bg-gray-800 rounded" />
          
          <select className="p-2 bg-gray-800 rounded"
          name="priority"
          onChange={handleChange}>
            <option value="low">
              Low Priotity
            </option>
            <option value="medium">
              Medium Priotity
            </option>
            <option value="high">
              High Priotity
            </option>
          </select>

          <select className="p-2 bg-gray-800 rounded"
          name="status"
          onChange={handleChange}>
            <option value="🟣 To Do">🟣 To Do</option>
            <option value="🔵 In Progress">🔵 In Progress</option>
            <option value="🟢 Done">🟢 Done</option>
          </select>
          <button type="submit" className="p-2 bg-blue-600 rounded">Create Task</button>
        
        </form>
      </div>
    </div>
  )
}

export default CreateTasks