import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css'],
})
export class MyContainerComponent implements OnInit {
  constructor() {}

  @Input() data: { name: string; occupation: string };
  @Input() template: { html: string };

  ngOnInit() {
    console.log(this.template.html);
  }
}
