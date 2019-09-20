import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  username = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.username);
  }

  onResetUN() {
    this.username = '';
  }

  getStatus() {
    return this.username === 'bacon' ? 'brown' : '';
  }
}
