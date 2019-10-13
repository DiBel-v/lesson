import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../task';
import { Observable } from 'rxjs';
import { Store, select} from '@ngrx/store';
import { State, selectTaskEntities, selectTasksLoading } from '../reducers';
import { Load } from '../tasks.actions';

@Component({
  selector: 'app-tasks-container',
  template: `<app-tasks-list *ngIf="!loading" [items]="tasks$ | async"></app-tasks-list>
  <div *ngIf="loading">Идет загрузка</div>`
})
export class TasksContainerComponent implements OnInit {
  public tasks$: Observable<Task[]>;
  public loading: boolean;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new Load());
    this.tasks$ = this.store.pipe(select(selectTaskEntities));
    this.store.pipe(select(selectTasksLoading)).subscribe((result) => {
      this.loading = result;
    });
  }

}
