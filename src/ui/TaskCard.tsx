import { useAppDispatch } from "../store/hooks"
import { Task } from "../types/Task"
import { Trash2 } from "lucide-react"
import { deleteTask } from "../store/tasksSlice"
import { Pencil } from "lucide-react"
import { Link } from "react-router"


function TaskCard({task}: {task: Task}) {

    const dispatch = useAppDispatch();

    const handleDelete = (id:string) => {
        confirm("Are you sure you want to delete this task?") &&
        dispatch(deleteTask(id));
    }

    return (
        <div className="relative bg-slate-800 hover:bg-slate-700 transition duration-300 ease-in-out cursor-pointer  p-2 rounded-lg">
            <h3 className="font-medium text-xl">{task.title}</h3>
            <span className="text-sm font-bold capitalize text-slate-500">{task.priority}</span>
            <p className="text-gray-400">{task.description}</p>
            <button className="bg-slate-100 cursor-pointer hover:bg-red-600 hover:text-slate-50 text-slate-800 font-bold w-8 h-8 flex justify-center items-center rounded-xl absolute -top-2 -right-2 text-sm"
                onClick={() => handleDelete(task.id)}
            >
                <Trash2 size={22} strokeWidth={1.8} />
            </button>
            <Link to={`/updatetasks/${task.id}`}>
                <button className="mt-2 cursor-pointer bg-slate-200 hover:bg-slate-300 text-slate-800 py-1 px-2 rounded-md text-sm flex gap-2 font-medium">
                <Pencil size={20} strokeWidth={1.8} /><span>Edit</span>
                </button>
            </Link>
        </div>
    )
}

export default TaskCard