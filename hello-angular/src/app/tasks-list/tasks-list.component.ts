import { TaskService } from './../task.service';
import { Component, OnInit, Input, Output, EventEmitter, AfterContentChecked} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit, AfterContentChecked {
  @Input() public items: Task[] = [];
  public selectedItem: Task;
  public newTask: Task;
  private newTaskTxt: string;
  public nextId: number;

  constructor(private taskService: TaskService) {}
  ngAfterContentChecked(): void {
    if (this.items){
    this.nextId = this.items[this.items.length - 1].id + 1;
    }
  }
  ngOnInit() {

  }
  makeActive(item: Task): void {
    this.selectedItem = item;
  }
  create(txt: string) {
    this.newTask = {id: this.nextId, name: txt, created: new Date(), status: 1};
    console.log(this.newTask);
    this.taskService.create(this.newTask).subscribe( () =>
      this.items.push(this.newTask)
    );
  }
  deleteTask(id: number) {
    this.items = this.items.filter( item => item.id !== id );
    this.taskService.deleteTask(id);
  }
}
