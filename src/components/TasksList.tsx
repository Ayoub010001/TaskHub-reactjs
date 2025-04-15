import { useAppSelector } from "../store/hooks"
import TaskCard from "../ui/TaskCard"
import { useParams } from "react-router"

function TasksList({TasksStatus}: {TasksStatus:string}) {

  const projectId:string|undefined = useParams().id
  const tasks = useAppSelector(state => state.tasks.tasks)
  const tasksByProject = tasks.filter(task => task.projectId === projectId)
  const filteredTasks = tasksByProject.filter(task => task.status === TasksStatus)

  return (
    <div>
        <h2 className="font-medium text-gray-400">{TasksStatus} ({filteredTasks.length})</h2>
        <div className="mt-4 flex flex-col gap-4">
            {filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)}
        </div>
    </div>
  )
}

export default TasksList