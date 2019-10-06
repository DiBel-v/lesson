import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  @Input() public items: Task[] = [];
  public selectedItem: Task;
  constructor() { }

  ngOnInit() {
    this.selectedItem = this.items[0];
  }
  makeActive(item: Task): void {
    this.selectedItem = item;
  }
}
