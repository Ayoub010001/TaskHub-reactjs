import './App.css'
import Sidebare from './components/Sidebare'
import Tasksviewer from './pages/Tasksviewer'
import { Routes, Route } from 'react-router'
import CreateProject from './pages/CreateProject'
import CreateTasks from './pages/CreateTasks'
import HomePage from './pages/HomePage'
import UpdateTask from './pages/UpdateTask'

function App() {
  return (
    <div className='App flex w-full h-screen'>
      <Sidebare />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<Tasksviewer />} />
        <Route path="/createproject" element={<CreateProject />} />
        <Route path="/createtasks/:projectId" element={<CreateTasks />} />
        <Route path="/updatetasks/:taskId" element={<UpdateTask />} />
      </Routes>
    </div>
  )
}

export default App
