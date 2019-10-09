import { TaskService } from './../task.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Task } from '../task';
import { Location } from '@angular/common';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnChanges {
  @Input() item: Task;
  public updatedTask: Task;
  public checkoutForm;
  constructor(private taskService: TaskService, private formBuilder: FormBuilder, private location: Location) {}
  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (this.item) {
      this.checkoutForm = this.formBuilder.group({
        name: new FormControl(this.item.name, [Validators.required, Validators.minLength(3)]),
        status: new FormControl('' + this.item.status, Validators.required),
        message: new FormControl(this.item.message ? this.item.message : '')
      });
    }

  }

  save(newTask, id: number, item: Task) {
    if (newTask.message !== '') {
      this.updatedTask = { id: item.id, name: newTask.name, created: item.created, status: +newTask.status, message: newTask.message };
    } else {
      this.updatedTask = { id: item.id, name: newTask.name, created: item.created, status: +newTask.status };

    }
    this.taskService.updateTask(id, this.updatedTask).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
