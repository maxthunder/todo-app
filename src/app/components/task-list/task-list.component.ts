import { Component } from '@angular/core';
import { Task } from 'src/app/task';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Array<Task>;
  description: string;

  constructor(private taskService: TaskService) {
    this.getAllTasks();
  }

  getAllTasks() {
    this.tasks = this.taskService.getTasks();
  }

  add() {
    this.tasks = this.taskService.addNewTask(this.description);
    this.description = '';
  }

  delete(task) {
    this.tasks = this.taskService.deleteTask(task);
  }

  deleteAllTasks() {
    return this.taskService.deleteAllTasks()
  }

  // Test Data

  generateTestData() {
    this.taskService.addNewTask("Walk the dog.");
    this.taskService.addNewTask("Wash the dishes.");
    this.taskService.addNewTask("Mow the lawn.");
  }
}
