import { Component } from '@angular/core';
import {TaskService} from "./services/task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-maxthunder-app';

  constructor(private taskService: TaskService) { }

  hasCompletedTasks(): boolean {
    return this.taskService.getCompletedTasks().length > 0;
  }
}
