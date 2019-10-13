import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _tasks: BehaviorSubject<Task[]> = new BehaviorSubject([]);
  public readonly tasks: Observable<Task[]> = this._tasks.asObservable();

  constructor(private apiService: ApiService<Task>) {
    this.getAllData().subscribe((tasks: Task[]) => {
      console.log(tasks);
      this._tasks.next(tasks);
    });
  }
  public getAllData(): Observable<Task[]> {
    return this.apiService.getAllData('tasks');
  }
  create(task: Partial<Task>): Observable<Task> {
    const response$ = this.apiService.create('tasks', task);
    response$.subscribe((savedTask: Task) => {
      const prevTasks = this._tasks.getValue();
      this._tasks.next(prevTasks.concat([savedTask]));
    });
    return response$;
  }

  updateTask(id: number, task: Task): Observable<Task> {
    const response$ = this.apiService.updateTask('tasks', id, task);
    response$.subscribe((updateTask: Task) => {
      const prevTasks = this._tasks.getValue();
      prevTasks.forEach( (item, index) => {
        if (item.id === updateTask.id) {
          prevTasks.splice(index, 1, updateTask);
        }
      });
      this._tasks.next(prevTasks);
    });
    return response$;
  }
  deleteTask(id: number): Observable<Task> {
    const response$ = this.apiService.deleteTask('tasks', id);
    response$.subscribe((toDeleteTask: Task) => {
      const prevTask = this._tasks.getValue();
      prevTask.forEach( (item, index) => {
        if (item === toDeleteTask) {
          prevTask.splice(index, 1);
        }
      });
      this._tasks.next(prevTask);
    });
    return response$;
  }
  get(id: number): Observable<Task> {
    console.log(id);
    return this.apiService.get('tasks', id);
  }
}
