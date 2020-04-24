

import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }
  name: string = "";
  age: number = 0;
  clients: Client [] = [];
  ngOnInit(): void {
  }

  save(){
    this.clients.push({
      name: this.name,
      age : this.age
    })
  }

  removeClient(index: number){
    this.clients.splice(index,1);
  }

  updateClient(c: Client, index: number){
    this.clients[index] = c; 
  }

}
