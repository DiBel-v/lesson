import { TaskService } from './../task.service';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { State, selectTaskEntities, selectTasksLoading, selectTaskEntity } from '../reducers';
import { Store, select} from '@ngrx/store';
import { DeleteTask } from '../tasks.actions';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  @Input() public items: Task[] = [];
  public selectedItem: Task;
  public newTask: Task;
  public nextId: number;

  constructor(private taskService: TaskService, private store: Store<State>) {}
  ngOnInit() {

  }
  makeActive(item: Task): void {
    this.selectedItem = item;
  }
  deleteTask(id: number) {
    this.items = this.items.filter( item => item.id !== id );
    this.store.dispatch(new DeleteTask(id));
    // this.taskService.deleteTask(id);
  }
}
