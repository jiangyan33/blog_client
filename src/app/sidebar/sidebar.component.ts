import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList: any; // 分类信息
  articleList: any; // 最新文章信息
  dateList: any; // 归档信息
  calendarInfo: any; // 日历信息
  constructor(
    private http: HttpClient,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.categoryList = JSON.parse(window.localStorage.getItem("categoryList"));

    this.http.get(`${this.message.baseUrl}article/articles`, { params: { pageNum: "1", pageSize: "5" } }).toPromise().then((data: any) => {
      if (data.code === 200) {
        this.articleList = data.data.data;
      }
    }).catch(err => {
      console.log(err);
    });

    this.http.get(`${this.message.baseUrl}article/date`).toPromise().then((data: any) => {
      if (data.code === 200) {
        this.dateList = data.data;
      }
    }).catch(err => {
      console.log(err);
    });
  }

}
