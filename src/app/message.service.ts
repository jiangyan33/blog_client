import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // 请求服务器地址的前缀
  get baseUrl() {
    return 'http://127.0.0.1:8080/api/';
  }

}
