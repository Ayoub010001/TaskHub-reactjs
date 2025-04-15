import { Project } from "../types/Project"
import { deleteProject } from "../store/projectsSlice"
import { useAppDispatch } from "../store/hooks"
import { Link, useNavigate } from "react-router"

function ProjectCard({ project }: { project: Project }) {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleDelete = (id: string) => {
        const confirmed = confirm("Are you sure you want to delete this project?");
        if (confirmed) {
            dispatch(deleteProject(id));
            setTimeout(() => {
                navigate("/");
            }, 0);
        }
    }

    return (
        <li className="">
            <Link to={`/${project.id}`} className="flex items-center justify-between gap-2 hover:bg-indigo-700/30 rounded cursor-pointer p-2">
            <div className="flex w-full items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panels-top-left-icon lucide-panels-top-left">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" /><path d="M9 21V9" />
                </svg>
                <p>{project.name}</p>
            </div>
            <button className="bg-red-700/50 hover:bg-red-700/80 p-2 rounded cursor-pointer"
                onClick={() => {
                    handleDelete(project.id)
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-trash2-icon lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
            </button>
            </Link>
        </li>
    )
}

export default ProjectCard