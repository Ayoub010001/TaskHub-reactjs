import { Link } from "react-router"
import { useParams } from "react-router"

function Header() {
  const { id : projectId} = useParams<{ id: string }>();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white border-b-2 border-gray-600">
        <h2 className="text-xl font-medium">All Tasks</h2>
        <div className="flex items-center gap-4">
            <Link to={"/createtasks/"+projectId}  className="bg-indigo-600/80 hover:bg-indigo-800 duration-300 ease-in py-2 px-4 font-medium rounded cursor-pointer">+ Create Task</Link>
        </div>
    </header>
  )
}

export default Header