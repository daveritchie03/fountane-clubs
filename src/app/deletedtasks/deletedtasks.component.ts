import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletedtasks',
  templateUrl: './deletedtasks.component.html',
  styleUrls: ['./deletedtasks.component.css']
})
export class DeletedtasksComponent implements OnInit {

  constructor() { }

  visible: boolean = false;

  ngOnInit() {
  }

  onClick() {
    this.visible = true;
  }
  onClose() {
    this.visible = false;
  }
}
