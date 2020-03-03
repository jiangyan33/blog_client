import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }

  transform(value: any) {
    // 绕过angular的安全检查，该html片段是安全的
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

}
