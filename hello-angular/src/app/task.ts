export interface Task {
    id: number;
    name: string;
    created: Date;
    status: TaskStatus;
    message?: string;
}
export enum TaskStatus {
    Completed,
    Uncompleted,
    Failed
}
