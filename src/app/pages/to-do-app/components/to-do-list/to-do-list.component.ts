import { Component, Input } from '@angular/core';
import { Task } from '../../model/task.model';

@Component({
  selector: 'tdapp-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  @Input() tasks:Task[] = [];
}
