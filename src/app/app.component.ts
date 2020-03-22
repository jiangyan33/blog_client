import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

// 元数据，对组件进行描述（名称，模块，样式），告诉angular如何处理这个组件，
// 装饰器
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    private message: MessageService
  ) {
    // 初始化分类数据
    if (!window.localStorage.getItem("categoryList")) {
      this.http.get(`${this.message.baseUrl}category/categoryList`).toPromise().then((data: any) => {
        if (data.success === 200) {
          window.localStorage.setItem("categoryList", JSON.stringify(data.message));
        }
      });
    }
  }
}
