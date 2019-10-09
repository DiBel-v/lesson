import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-container',
  template: `<app-tasks-list [items]="tasks | async"></app-tasks-list>`
})
export class TasksContainerComponent implements OnInit {
  public tasks: Observable<Task[]>;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.tasks;
  }

}
