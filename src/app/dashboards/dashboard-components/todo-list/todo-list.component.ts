import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = {};

  constructor() { }

  ngOnInit(): void {
  }

}
