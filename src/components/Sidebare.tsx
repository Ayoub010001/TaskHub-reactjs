import {useAppSelector } from "../store/hooks"
import AddProjectBtn from "../ui/AddProjectBtn"
import ProjectCard from "../ui/ProjectCard"
import { Project } from "../types/Project"
import { Link } from "react-router"
 

function Sidebare() {

    const projects:Project[] = useAppSelector(state => state.projects.projects)

    return (
        <nav className="bg-gray-800 text-white min-w-[18rem] w-1/4 p-4 flex flex-col gap-4 border-r-2 border-gray-600">
            <Link to ="/">
                <h1 className="text-2xl font-bold">Kanban</h1>
            </Link>
            <h2 className="font-medium text-gray-400">ALL BOARDS (8)</h2>
            <ul className="flex flex-col gap-2">
                {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </ul>
            <AddProjectBtn />
        </nav>
    )
}

export default Sidebare