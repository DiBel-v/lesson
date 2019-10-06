import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiService: ApiService<Task>) { }

  getAllData(): Observable<Task[]> {
    return this.apiService.getAllData('tasks');
  }
  create(task: Task): Observable<Task> {
    return this.apiService.create('tasks', task);
  }
  get(id: number): Observable<Task> {
    return this.apiService.get('tasks', id);
  }
  deleteTask(id: number): Observable<Task> {
    return this.apiService.deleteTask('tasks', id);
  }
  updateTask(id: number,task: Task): Observable<Task>{
    return this.apiService.updateTask('tasks', id, task);
  }
}
