import { Link } from "react-router"

function AddProjectBtn() {
    return (
        <div className="flex gap-2 justify-between">
            <Link to="/createproject" className="flex items-center w-full gap-2 p-2 pr-4 hover:bg-violet-700/50 rounded cursor-pointer text-violet-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panels-top-left-icon lucide-panels-top-left">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" /><path d="M9 21V9" />
                </svg>
                + Add New Task
                </Link>
        </div>
    )
}

export default AddProjectBtn