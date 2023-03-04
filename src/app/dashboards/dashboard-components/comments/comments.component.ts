import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = {};

  constructor() { }

  ngOnInit(): void {
  }

}
