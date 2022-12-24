import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'tdapp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() filterEvent = new EventEmitter<'todos'|'ativos'|'completadas'>();
  filterType = ''

  ngOnInit(): void {
    this.sendFilterType('todos')
  }

  sendFilterType(type: 'todos'|'ativos'|'completadas'){
    this.filterType = type;
    this.filterEvent.emit(type);
 }
}
