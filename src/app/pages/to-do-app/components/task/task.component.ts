import { Component, Input } from '@angular/core';

@Component({
  selector: 'tdapp-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() name = '';
  @Input() completed = false;

  toggleCompletion(){
    this.completed = !this.completed;
  }
}
