import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  visible: boolean = false;

  ngOnInit(): void {
  }

  onClick() {
    this.visible = true;
  }
  onClose() {
    this.visible = false;
  }

}
