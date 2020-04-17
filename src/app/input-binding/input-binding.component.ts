import { Client } from './cliente.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  constructor() { }
  @Input() name: string;
  @Input("otherName") lastName: string;
  @Input() age: string;
  clients : Client[] = [{
    id: 1,
    name: "Bob",
    age: 32
  },
  {
    id: 2,
    name: "Jonh",
    age: 33
  },
  {
    id: 3,
    name: "Mark",
    age: 30
  },
  {
    id: 4,
    name: "Bill",
    age: 38
  }
]
  ngOnInit(): void {
  }

}
