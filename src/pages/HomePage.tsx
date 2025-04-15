import { useAppSelector } from "../store/hooks";
import { selectTasks } from "../store/tasksSlice";
function HomePage() {
  const allTasks = useAppSelector(selectTasks);
  const totalTasks = allTasks.length;
  const todoTasks = allTasks.filter(task => task.status === "🟣 To Do").length
  const inProgressTasks = allTasks.filter(task => task.status === "🔵 In Progress").length;
  const doneTasks = allTasks.filter(task => task.status === "🟢 Done").length;
  return (
    <div className="w-full h-screen bg-gray-900 text-white">
      <h1 className="m-4 text-white font-bold text-2xl">TaskHub Platform</h1>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 p-2 w-full">
        <div className="bg-linear-65 from-indigo-300 to-indigo-400 p-4 rounded-lg shadow-lg m-4 col-span-3 lg:col-span-1">
          <h1 className="text-indigo-800/80 font-bold">Total Tasks</h1>
          <h1 className="text-3xl font-bold text-indigo-800">{totalTasks}</h1>
        </div>
        <div className="bg-linear-65 from-purple-300 to-purple-400 p-4 rounded-lg shadow-lg m-4">
          <h1 className="text-purple-800/80 font-bold">To Do</h1>
          <h1 className="text-3xl font-bold text-purple-800">{todoTasks}</h1>
        </div>
        <div className="bg-linear-65 from-blue-300 to-blue-400 p-4 rounded-lg shadow-lg m-4">
          <h1 className="text-blue-800/80 font-bold">In Progress</h1>
          <h1 className="text-3xl font-bold text-blue-800">{inProgressTasks}</h1>
        </div>
        <div className="bg-linear-65 from-green-300 to-green-400 p-4 rounded-lg shadow-lg m-4">
          <h1 className="text-green-800/80 font-bold">Done</h1>
          <h1 className="text-3xl font-bold text-green-800">{doneTasks}</h1>
        </div>
      </div>
    </div>
  )
}

export default HomePage