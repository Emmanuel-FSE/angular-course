import { Injectable } from '@angular/core';
import { TASKS } from '../fake-tasks'
import { Task } from '../Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks() {
    return TASKS;
  }
}
