import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  counter = 0;
  myTask = ['Go and get Mango Lassi', 'Plan the weekend', 'Identified Something', 'Somemore Task']
  myCompletedTask = [];

  constructor() { }

  ngOnInit() {
  }

  SayHello = function () {

    this.myTask.push(this.addTask)
    this.addTask = ""
  }

  taskDone(i) {
    console.log(i);
    this.myCompletedTask.push(this.myTask[i])

  }

}
