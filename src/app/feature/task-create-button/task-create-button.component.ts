import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-task-create-button',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './task-create-button.component.html',
  styleUrl: './task-create-button.component.scss'
})
export class TaskCreateButtonComponent {

}
