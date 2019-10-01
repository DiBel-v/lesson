import { Component, OnInit, OnChanges, SimpleChange, DoCheck } from '@angular/core';
import { Todo } from './todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  public todoList: Todo[];
  public nextId: number;
  public todoText: string = '';
  constructor() { }
  ngOnInit() {
    this.todoList = [
      {
        id: 1,
        task: 'Убрать в комнате'
      },
      {
        id: 2,
        task: 'Приготовить ужин'
      }
    ];
    this.nextId = this.todoList.length;
  }
  //Изменения в ngOnChanges работают только в случае c Inpit, в это нет, в данном случае, смысла.
  //А ngDoCheck, и ngAfterViewChecked работают не так, как надо по заданию.

  public addTask(txt: string): void {
    this.todoList.push({id: this.nextId, task: txt});
    this.nextId++;
    console.log('Массив изменился');
  }
  public deleteTask(index: number): void {
    this.todoList.splice(index, 1);
    console.log('Массив изменился');
  }
}

