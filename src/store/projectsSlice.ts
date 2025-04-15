import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../types/Project";


const projectsInitialState: Project[] = [
  {
      id: "1",
      name: "Project 1",
      description: "Description for Project 1",
  },
  {
      id: "2",
      name: "Project 2",
      description: "Description for Project 2",
  }
];

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: projectsInitialState,
};


const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action: PayloadAction<Project>) => {
      const index = state.projects.findIndex(
        (project) => project.id === action.payload.id
      );
      if (index !== -1) {
        state.projects[index] = action.payload;
      }
    },
    deleteProject: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },
  },
});

export const { setProjects, addProject, updateProject, deleteProject } =
  projectsSlice.actions;
export default projectsSlice.reducer;
export const selectProjects = (state: { projects: ProjectsState }) =>
  state.projects.projects;