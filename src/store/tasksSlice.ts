import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/Task";

const tasksInit: Task[] = [{
    id: "1",
    projectId: "1",
    title: 'Task 1',
    description: 'Task 1 description',
    status: "🟣 To Do",
    priority: 'medium'
},
{
    id: "2",
    projectId:"1",
    title: 'Task 2',
    description: 'Task 2 description',
    status: "🔵 In Progress",
    priority: 'high'
},
{
    id: "3",
    projectId: "2",
    title: 'Task 3',
    description: 'Task 3 description',
    status: "🟣 To Do",
    priority: 'medium'
},
{
    id: "4",
    projectId: "2",
    title: 'Task 4',
    description: 'Task 4 description',
    status: "🔵 In Progress",
    priority: 'high'
}]

interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: tasksInit,
};

export const store = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setTasks: (state, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload;
        },
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        updateTask: (state, action: PayloadAction<Task>) => {
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id
            );
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );
        },
    }
});

export const { setTasks, addTask, updateTask, deleteTask } = store.actions;
export default store.reducer;

export const selectTasks = (state: { tasks: TasksState }) => state.tasks.tasks;
export const selectTasksByStatus = (state: { tasks: TasksState }, status: string) =>
    state.tasks.tasks.filter((task) => task.status === status);