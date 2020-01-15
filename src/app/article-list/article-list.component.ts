import { Component, OnInit } from '@angular/core';
import { RequestService } from "../request.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  private articleList: Array<Object>;
  private title: String;
  constructor(private RequestService: RequestService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      // let categoryId = params.get('categoryId');
      // let date=params.get('tagId');
      // let date=params.get('authorId');
      // let date=params.get('monthDate');
      // let date=params.get('searchKey');
      let options = { ...params['params'] };
      if (options['categoryId']) {
        this.title = `【${options['value']}】分类下的内容`;
      } else if (options['tagId']) {
        this.title = `【${options['value']}】标签下的内容`;
      } else if (options['authorId']) {
        this.title = `【${options['value']}】的文章`;
      } else if (options['monthDate']) {
        this.title = `【${options['value']}】的内容`;
      } else if (options['searchKey']) {
        this.title = `有关【${options['value']}】的内容`;
      } else {
        this.title = "最新发布";
      }
      Reflect.deleteProperty(options, 'value');
      this.searchArticle(options);
    });
  }

  public searchArticle(options) {
    // 初始化文章列表
    this.RequestService.getArticleList({ pageNum: 1, pageSize: 10, ...options }).subscribe(result => {
      if (result['success'] === 1) {
        this.articleList = result['message']['data'];
        if (this.articleList.length === 0) {
          // 没有获取到数据
          this.title = '没有找到' + this.title;
          this.searchArticle({});
        }
      }
    });
  }
}
