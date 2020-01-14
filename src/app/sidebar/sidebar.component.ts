import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private categoryList: Array<Object>; // 分类信息
  private articleList: Array<Object>; // 最新文章信息
  private dateList: Array<Object>; // 归档信息
  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.getCategoryList().subscribe(result => {
      if (result['success'] === 1) {
        this.categoryList = result['message'];
      }
    });
    this.requestService.getArticleList({ pageNum: 1, pageSize: 5, }).subscribe(result => {
      if (result['success'] === 1) {
        this.articleList = result['message'].data;
      }
    });
    this.requestService.getDateList().subscribe(result => {
      if (result['success'] === 1) {
        this.dateList = result['message'];
      }
    });
  }

}
