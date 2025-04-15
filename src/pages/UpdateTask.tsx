import { useParams } from "react-router";
import { useAppSelector } from "../store/hooks";
import { useState } from "react";
import { Task } from "../types/Task";
import { updateTask } from "../store/tasksSlice";
import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router";


function UpdateTask() {
 const { taskId } = useParams<string>();
 const taskUpdate = useAppSelector(state => state.tasks.tasks).find(task => task.id === taskId);
 if(!taskUpdate) {
        return (
            <div className="w-full h-screen bg-gray-900 text-white flex items-center justify-center">
                <h1 className="text-3xl font-bold">Task not found</h1>
            </div>)
 }
 const dispatch = useAppDispatch();
 const navigate = useNavigate();
 const [taskState, setTaskState] = useState<Task>(taskUpdate);
 

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateTask(taskState));
    navigate(`/${taskState.projectId}`);
 }

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTaskState((prevState) => ({
        ...prevState,
        [name]: value,
    }));
 }

  return (
    <div  className="w-full h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <h1 className="text-3xl font-bold">Update Tasks {taskId}</h1>
        <form className="flex flex-col gap-4 w-1/2" onSubmit={handleSubmit}
        >
          
          <input type="text" 
          placeholder="Task Title" 
          className="p-2 bg-gray-800 rounded"
           onChange={handleChange}
        value={taskState?.title}
          required
          name="title"
          />
          
          <textarea 
          required
          name="description"
            onChange={handleChange}
          value={taskState?.description}
          placeholder="Task Description" className="p-2 bg-gray-800 rounded" />
          
          <select className="p-2 bg-gray-800 rounded"
          name="priority"
          onChange={handleChange}
          value={taskState?.priority}
          >
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
             onChange={handleChange}
        value={taskState?.status}
          >
            <option value="🟣 To Do">🟣 To Do</option>
            <option value="🔵 In Progress">🔵 In Progress</option>
            <option value="🟢 Done">🟢 Done</option>
          </select>
          <button type="submit" className="p-2 bg-lime-600 rounded cursor-pointer">Update Task</button>
        
        </form>
      </div>
    </div>
  )
}

export default UpdateTask