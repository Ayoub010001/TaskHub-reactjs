export interface Task {
    id: string;
    projectId: string;
    title: string;
    description: string;
    status: "🟣 To Do"| "🔵 In Progress"| "🟢 Done";
    priority: 'low' | 'medium' | 'high';
}