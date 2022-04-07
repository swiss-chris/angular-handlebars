import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = { person: { name: 'Chris', occupation: 'developer' } };
  preSanitizedTemplate = `
      <style type='text/css'>
        body {
          font-family: Arial, Helvetica, sans-serif;
        }

        .green { 
          color: green;
        }
      </style>

      <div>
        <a href='https://www.medium.com' target='_blank'>This is a working link</a>
        <div class='green'>
          This is dynamic green text using a style tag.
        </div>
        <div style='color:red;'>
          This is dynamic red text using an inline style attribute.
        </div>
        <div>
          Text rendered from Handlebars template: My name is {{person.name}}. I am a {{person.occupation}}.
        </div>
      </div>
    `;
}
