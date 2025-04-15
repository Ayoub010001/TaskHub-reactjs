import { useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { addProject } from '../store/projectsSlice'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router'

interface ErrorState {
  titleError: string | null,
  descriptionError: string | null,
}

function CreateProject() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const [error, setError] = useState<ErrorState>({
    titleError:null,
    descriptionError:null,
  })

  const [projectInput, setProjectInput] = useState({
    name: "",
    description: "",
  })

  const handlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(projectInput.name !=="" && projectInput.name !=="") {
      if(error.titleError === null && error.descriptionError === null){
        const id = nanoid(10)
        dispatch(addProject({...projectInput, id: id}));
        setProjectInput({
          name: "",
          description: "",
        })
        setError({
          titleError: null,
          descriptionError: null,
        })
        navigate("/"+id)
      }
    }

    if (projectInput.name === "") {
      setError((prev) => ({
        ...prev,
        titleError: "Name is required",
      }))
    }
    if (projectInput.description === "") {
      setError((prev) => ({
        ...prev,
        descriptionError: "Description is required",
      }))
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProjectInput((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (name === 'name' && value.length < 3) {
      setError((prev) => ({
        ...prev,
        titleError: "Name must be at least 3 characters long",
      }))
    } else if (name === 'name') {
      setError((prev) => ({
        ...prev,
        titleError: null,
      }))
    }

    if (name === 'description' && value.length < 10) {
      setError((prev) => ({
        ...prev,
        descriptionError: "Description must be at least 10 characters long",
      }))
    } else if (name === 'description') {
      setError((prev) => ({
        ...prev,
        descriptionError: null,
      }))
    }
  }

  return (
    <main className="w-full h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="m-4 font-bold text-xl">Create Project</h1>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-96">
          <form className="flex flex-col space-y-4"
            onSubmit={handlSubmit}
          >
            <input
              type="text"
              placeholder="Project Name"
              className="p-2 bg-gray-700 rounded-md text-white"
              value={projectInput.name}
              name='name'
              onChange={handleChange}
            />
            <p className='text-sm text-red-600/80 italic'>{error.titleError}</p>
            <textarea
              placeholder="Project Description"
              className="p-2 bg-gray-700 rounded-md text-white"
              value={projectInput.description}
              name='description'
              onChange={handleChange}
            ></textarea>
            <p className='text-sm text-red-600/80 italic'>{error.descriptionError}</p>
            <button className="cursor-pointer bg-blue-600 p-2 rounded-md">Create</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default CreateProject