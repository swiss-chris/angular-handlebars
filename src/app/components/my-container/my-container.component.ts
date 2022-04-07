import { Component, Input, OnInit } from '@angular/core';
import * as Handlebars from 'handlebars';

@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css'],
})
export class MyContainerComponent implements OnInit {
  constructor() {}

  @Input() data: { person: { name: string; occupation: string } };
  @Input() template: { html: string };

  ngOnInit() {
    console.log(this.template.html);
    var templateScript = Handlebars.compile(this.template.html);
    var html = templateScript(this.data);

    console.log(html);
  }
}
