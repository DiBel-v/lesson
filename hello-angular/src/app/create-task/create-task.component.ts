import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskStatus } from '../task';
import { State, selectTaskEntities, selectTasksLoading } from '../reducers';
import { Router } from '@angular/router';
import { Store} from '@ngrx/store';
import { AddTask } from '../tasks.actions';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  public checkoutForm;
  constructor(private taskService: TaskService, private router: Router, private formBuilder: FormBuilder, private store: Store<State>) { 
    this.checkoutForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  }

  ngOnInit() {
  }

  onSubmit(newTask) {
    // this.taskService.create({
    //   name: newTask.name,
    //   created: new Date(),
    //   status: TaskStatus.Uncompleted
    // });
    this.store.dispatch(new AddTask({
      name: newTask.name,
      created: new Date(),
      status: TaskStatus.Uncompleted
       }));
    this.router.navigate(['/tasks']);
  }

}
