import { TaskService } from './../task.service';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() item: Task;
  constructor(private taskService: TaskService, private location: Location) { }

  ngOnInit() {
  }
  save(id: number, item: Task) {
    console.log(item);
    this.taskService.updateTask(id, item).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
