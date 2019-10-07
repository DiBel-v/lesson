import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskContainterComponent } from './task-containter/task-containter.component';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';
import { TaskComponent } from './task/task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskContainterComponent,
    TasksContainerComponent,
    TaskComponent,
    TasksListComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
