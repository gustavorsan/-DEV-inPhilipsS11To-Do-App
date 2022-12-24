import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tdapp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  hasError = false;
  errorMessage =  '';

  taskDescription = '';

  @Output() newTask = new EventEmitter<string>();


  handleAddClick(event:Event){
    event.preventDefault();

    console.log(this.taskDescription)
    if(this.taskDescription.trim() === ''){
      this.setError();
      return;
    }
    if(this.hasError){
      this.clearError()
    }

    this.newTask.emit(this.taskDescription);

    this.taskDescription = '';
  }

  setError(){
    this.hasError = true;
    this.errorMessage = 'A tarefa não pode ser vazia';
  }

  clearError(){
    this.hasError = false;
    this.errorMessage = '';
  }
}
