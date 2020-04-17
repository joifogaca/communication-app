import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }
  value: number = 0;
  title = "My title";
  ngOnInit(): void {
  }

  incBy(n: number){
    this.value +=n;
  }

}
