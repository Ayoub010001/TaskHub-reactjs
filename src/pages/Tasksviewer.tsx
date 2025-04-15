import TasksList from "../components/TasksList"
import Header from "../components/Header"

const TasksStatus:string[] = ["🟣 To Do", "🔵 In Progress", "🟢 Done"]

function Tasksviewer() {
  return (
    <main className="w-full h-screen bg-gray-900 text-white">
        <Header />
        <div className="grid grid-cols-3 gap-4 p-4">
          {TasksStatus.map((status, index) => ( <TasksList key={index}  TasksStatus={status}/>))}
        </div>
    </main>
  )
}

export default Tasksviewer