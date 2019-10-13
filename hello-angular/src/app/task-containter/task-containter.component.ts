import { TaskService } from './../task.service';
import { TaskStatus } from './../task';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from '../task';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import { State, selectTaskEntities, selectTasksLoading, selectTask } from '../reducers';
import { Router } from '@angular/router';
import { Store, select} from '@ngrx/store';
import { LoadTaskSuccess, LoadTask } from '../tasks.actions';

@Component({
  selector: 'app-task-containter',
  template: `<app-task [item]="task | async"></app-task>`
})
export class TaskContainterComponent implements OnInit {
  public task: Observable<Task>;
  public id: number;
  constructor(private taskService: TaskService, private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {
    // this.task = this.route.params.pipe(
    //   switchMap((params) => this.taskService.get(params.id))
    // );
    this.route.params.subscribe((param) => {
      this.task = this.store.pipe(select(selectTask, param.id));
      console.log(this.task);
    });
  }

}
