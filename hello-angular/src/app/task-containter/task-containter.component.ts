import { TaskService } from './../task.service';
import { TaskStatus } from './../task';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from '../task';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-task-containter',
  template: `<app-task [item]="task | async"></app-task>`
})
export class TaskContainterComponent implements OnInit {
  public task: Observable<Task>;
  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.task = this.route.params.pipe(
      switchMap((params) => this.taskService.get(params.id))
    );
  }

}
