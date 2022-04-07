import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}

  transform(value: string) {
    // anyone using this needs to be aware of the risks ...
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
