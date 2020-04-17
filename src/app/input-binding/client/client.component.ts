import { Client } from './../cliente.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() { }
  @Input() client: Client;
  ngOnInit(): void {
  }

}
