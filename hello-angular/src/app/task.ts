export interface Task {
    id: number;
    name: string;
    created: Date;
    status: TaskStatus;
}
export enum TaskStatus {
    Completed,
    Uncompleted,
    Failed
}
