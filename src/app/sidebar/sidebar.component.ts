import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.http.get('category/categoryList').toPromise().then((data: any) => {
      if (data.success === 1) {
        this.categoryList = data.message;
      }
    }).catch(err => {
      console.log(err);
    });

    this.http.get('article/articles', { params: { pageNum: "1", pageSize: "5" } }).toPromise().then((data: any) => {
      if (data.success === 1) {
        this.articleList = data.message;
      }
    }).catch(err => {
      console.log(err);
    });

    this.http.get('article/date').toPromise().then((data: any) => {
      if (data.success === 1) {
        this.dateList = data.message;
      }
    }).catch(err => {
      console.log(err);
    });
  }

}
