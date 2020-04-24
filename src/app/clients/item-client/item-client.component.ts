import { Client } from './../client.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {
  onEdit = false;
   name: string;
   age: number;
  constructor() { }
  @Input() client: Client;
  @Output() updateClient = new EventEmitter<Client>();
  @Output() removeClient = new EventEmitter<any>();
  ngOnInit(): void {
  }

  edit(){
    this.onEdit = true;
    this.name = this.client.name;
    this.age = this.client.age;
  }

  remove(){
    this.removeClient.emit();
  }

  save(){
    this.onEdit = false;
    this.client.name = this.name;
    this.client.age = this.age;
    this.updateClient.emit(this.client);
  }
}
