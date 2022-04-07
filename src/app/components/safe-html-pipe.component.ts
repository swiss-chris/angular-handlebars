// inspired by https://stackoverflow.com/a/45141487/349169
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// anyone using this pipe needs to be aware of the risks ...

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}

  transform(value: string) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
