import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  @Input() preSanatizedTemplate: string;

  innerHtml: string;

  ngOnInit() {
    const templateFunction = Handlebars.compile(this.preSanatizedTemplate);
    this.innerHtml = templateFunction(this.data);
  }
}
