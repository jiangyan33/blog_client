import { Component, OnInit } from '@angular/core';
import { RequestService } from "../request.service";
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  private articleList: Array<Object>;
  private title: String;
  constructor(private RequestService: RequestService) {
    this.title = "最新发布";
  }

  ngOnInit() {
    this.searchArticle({});
  }

  public searchArticle(options) {
    // 初始化文章列表
    this.RequestService.getArticleList({ pageNum: 1, pageSize: 10, ...options }).subscribe(result => {
      if (result['success'] === 1) {
        this.articleList = result['message']['data'];
      }
    });
  }
}
