import {Component} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {Task} from "../../models/task";
import {TaskService} from "../../services/task.service";
import {async, Observable} from "rxjs";

@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [
    NgForOf, CommonModule
  ],
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.scss'
})
export class TaskTableComponent {

  tasks$?: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    this.update();
  }

  update() {
    this.tasks$ = this.taskService.getTask();
  }

}
