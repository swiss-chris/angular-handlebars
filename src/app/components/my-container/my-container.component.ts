import { Component, Input, OnInit } from '@angular/core';
import * as Handlebars from 'handlebars';

@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css'],
})
export class MyContainerComponent implements OnInit {
  constructor() {}

  @Input() data: any;

  // WARNING: the client of this component is responsible for keeping this string sanatized from injection attacks!
  @Input() preSanitizedTemplate: string;

  innerHtml: string;

  ngOnInit() {
    const render = Handlebars.compile(this.preSanitizedTemplate);
    this.innerHtml = render(this.data);
  }
}
