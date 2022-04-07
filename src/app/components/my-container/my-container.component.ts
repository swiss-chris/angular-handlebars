import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css'],
})
export class MyContainerComponent {
  constructor() {}

  @Input() data: { name: string; occupation: string };
}
