import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskContainterComponent } from './task-containter.component';

describe('TaskContainterComponent', () => {
  let component: TaskContainterComponent;
  let fixture: ComponentFixture<TaskContainterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskContainterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskContainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
