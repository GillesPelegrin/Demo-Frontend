import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TaskTableComponent} from "./feature/task-table/task-table.component";
import {TaskCreateButtonComponent} from "./feature/task-create-button/task-create-button.component";
import {HeaderComponent} from "./feature/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TaskTableComponent, TaskCreateButtonComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
