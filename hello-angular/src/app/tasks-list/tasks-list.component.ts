import { TaskService } from './../task.service';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

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

  constructor(private taskService: TaskService) {}
  ngOnInit() {

  }
  makeActive(item: Task): void {
    this.selectedItem = item;
  }
  deleteTask(id: number) {
    this.items = this.items.filter( item => item.id !== id );
    this.taskService.deleteTask(id);
  }
}
