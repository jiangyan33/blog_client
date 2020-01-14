import { Injectable } from '@angular/core';
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseUrl: String;
  constructor(private messageService: MessageService, private http: HttpClient) {
    this.baseUrl = this.messageService.get("baseUrl");
  }
  // 获取分类列表
  getCategoryList() {
    return this.http.get(`${this.baseUrl}category/categoryList`);
  }

  // 获取文章列表
  getArticleList(options) {
    return this.http.get(`${this.baseUrl}article/articles`, { params: options });
  }

  // 获取文章归档信息
  getDateList() {
    return this.http.get(`${this.baseUrl}article/date`);
  }
}
