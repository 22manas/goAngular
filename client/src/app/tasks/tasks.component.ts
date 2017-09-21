import { Component, OnInit } from '@angular/core';
import {TaskService} from './task.service'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private ts:TaskService) { 
    this.ts.getTask().subscribe(task => {
      console.log(task);
    });
  }

  ngOnInit() {
  }

}
