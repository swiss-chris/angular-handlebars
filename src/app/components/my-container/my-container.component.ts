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
  @Input() template: { html: string };

  innerHtml: string;

  ngOnInit() {
    const templateScript = Handlebars.compile(this.template.html);
    this.innerHtml = templateScript(this.data);
  }
}
