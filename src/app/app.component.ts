import { Component } from '@angular/core';

// 元数据，对组件进行描述（名称，模块，样式），告诉angular如何处理这个组件，
// 装饰器
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-client';
}
