import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../task';

@Component({
  selector: 'app-tasks-container',
  template: `<app-tasks-list [items]="tasks"></app-tasks-list>`
})
export class TasksContainerComponent implements OnInit {
  private tasks: Task[] = [
    {
      id: 1,
      name: 'Погулять',
      created: new Date(),
      status: TaskStatus.Failed
    },
    {
      id: 2,
      name: 'Приготовить ужин',
      created: new Date(),
      status: TaskStatus.Uncompleted
    },
    {
      id: 3,
      name: 'Постирать',
      created: new Date(),
      status: TaskStatus.Completed
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
