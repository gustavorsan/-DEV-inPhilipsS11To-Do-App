import { Component } from '@angular/core';
import { Task } from './model/task.model';

@Component({
  selector: 'tdapp-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.css']
})
export class ToDoAppComponent {
  tasks:Task[] =[new Task('teste1',false),new Task('teste2',true),new Task('teste3',false)]

  addTask(description:string){
    this.tasks.push(new Task(description,false));
  }

  filterItens(filterType:'todos'|'ativos'|'completadas'){
    
    let  currentItens: Task[] = [];
     //'todos'|'ativos'
    switch(filterType){
       case 'completadas': currentItens = this.tasks.filter(task => {return task.completed}) 
             break;
       case 'ativos': currentItens = this.tasks.filter(task => {return !task.completed}) 
             break;
       default: currentItens = this.tasks;
         break
    }
 
 
    this.tasks = currentItens;
   }
}
