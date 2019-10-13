import { Action } from '@ngrx/store';
import { Task } from './task';

export enum TasksActionTypes {
  Load = '[Tasks] Load Tasks',
  LoadCompleted = '[Tasks] Load Completed',
  LoadFialed = '[Tasks] Load Failed',
  LoadTask = '[Task] Get Current Task',
  LoadTaskSuccess = '[Task] Get Task Success',
  AddTask = '[Task] Add task',
  DeleteTask = '[Task] Delete task'
}

export class Load implements Action {
  readonly type = TasksActionTypes.Load;
}

export class LoadCompleted implements Action {
  readonly type = TasksActionTypes.LoadCompleted;
  constructor(public payload: Task[]) {}
}

export class LoadFailed implements Action {
  readonly type = TasksActionTypes.LoadFialed;
  constructor(public payload: any) {}
}

export class LoadTask implements Action {
  readonly type = TasksActionTypes.LoadTask;
  constructor(public payload: any) {}
}
export class LoadTaskSuccess implements Action {
  readonly type = TasksActionTypes.LoadTaskSuccess;
  constructor(public payload: any) {}
}

export class AddTask implements Action {
  readonly type = TasksActionTypes.AddTask;
  constructor(public payload: any) {}
}

export class DeleteTask implements Action {
  readonly type = TasksActionTypes.DeleteTask;
  constructor(public payload: number) {}
}

export type TasksActions = Load | LoadCompleted | LoadFailed |
LoadTask | LoadTaskSuccess | DeleteTask | AddTask;
