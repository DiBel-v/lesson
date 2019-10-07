import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskStatus } from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  public checkoutForm;
  constructor(private taskService: TaskService, private router: Router, private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      name: ''
  });
  }

  ngOnInit() {
  }

  onSubmit(newTask) {
    this.taskService.create({
      name: newTask.name,
      created: new Date(),
      status: TaskStatus.Uncompleted
    });
    this.router.navigate(['/tasks']);
  }

}
