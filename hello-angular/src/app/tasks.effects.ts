import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TasksActionTypes, LoadCompleted } from './tasks.actions';
import { map, switchMap } from 'rxjs/operators';
import { TaskService } from './task.service';
import { Task } from './task';

@Injectable()
export class TasksEffects {
  public item;
  constructor(private actions$: Actions, private service: TaskService) {}
  @Effect() tasks$ = this.actions$.pipe(
    ofType(TasksActionTypes.Load),
    switchMap(() => this.service.getAllData()),
    map((items: Task[]) => new LoadCompleted(items))
  );
  @Effect() task$ = this.actions$.pipe(
    ofType(TasksActionTypes.LoadTask),
    map((action) => action.payload),
    switchMap((payload) => this.service.get(+payload))
  );
  @Effect() newTask$ = this.actions$.pipe(
    ofType(TasksActionTypes.AddTask),
    map((action)=> action.payload),
    switchMap((payload) =>
       this.service.create(payload)
      )
  );
  @Effect() deleteTask$ = this.actions$.pipe(
    ofType(TasksActionTypes.DeleteTask),
    map((action) => action.payload),
    switchMap((payload) => {
      console.log(payload);
       this.service.deleteTask(payload);
    }
      )
  );
}
