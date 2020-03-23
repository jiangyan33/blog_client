import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private http: HttpClient
  ) {
    // 初始化分类数据
    if (!window.localStorage.getItem("categoryList")) {
      this.http.get(`${this.baseUrl}category/categoryList`).toPromise().then((data: any) => {
        if (data.code === 200) {
          window.localStorage.setItem("categoryList", JSON.stringify(data.data));
        }
      });
    }
  }

  // 请求服务器地址的前缀
  get baseUrl() {
    return 'http://120.79.185.158/api/';
  }

}
