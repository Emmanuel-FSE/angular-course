import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() ontoggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  delete() {
    this.onDeleteTask.emit(this.task);
  }

  ontoggle() {
    this.ontoggleReminder.emit(this.task);
  }
}
