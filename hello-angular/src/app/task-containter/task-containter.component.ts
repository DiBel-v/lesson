import { TaskStatus } from './../task';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from '../task';
import { TasksListComponent } from '../tasks-list/tasks-list.component';

@Component({
  selector: 'app-task-containter',
  template: `<app-task [item]="task"></app-task>`
})
export class TaskContainterComponent implements OnInit {
  @Input() public task: Task = {
      id: 1,
      name: 'Погулять',
      created: new Date(),
      status: TaskStatus.Failed
  };
  // @Output() public item: Task;
  constructor() { }

  ngOnInit() {
  }

}
