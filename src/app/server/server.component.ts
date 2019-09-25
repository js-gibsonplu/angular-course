import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  username = '';
  serverName = '';
  servers = ['four', 'five', 'six'];
  showParagraph = false;
  buttonClicks: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.username);
  }

  onResetUN() {
    this.username = '';
  }

  getStatus() {
    return this.username === 'bacon' ? 'lightblue' : '';
  }

  addServer() {
    this.servers.push(this.serverName)
  }

  changeParagraphState(event) {
    this.buttonClicks.push(event)
    console.log(this.buttonClicks)
    console.log(this.showParagraph)
    this.showParagraph = !this.showParagraph;
  }
}
