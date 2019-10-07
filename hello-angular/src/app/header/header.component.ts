import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public uncompletedTasks: number = 0;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.tasks.subscribe((tasks: Task[]) => {
      this.uncompletedTasks = tasks.reduce((acc, task) => {
        if ( task.status === 1) {
          return acc + 1;
        }
        return acc;
      }, 0);
    });
  }

}
