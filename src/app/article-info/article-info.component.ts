import { Component, OnInit } from '@angular/core';
import { RequestService } from "../request.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.css']
})
export class ArticleInfoComponent implements OnInit {

  private article: Object;
  private link: Array<Object>;
  private next: object;
  private pre: object;

  constructor(private RequestService: RequestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const id = params['params']["id"];
      // 初始化文章列表
      this.RequestService.getArticleInfo(id).subscribe(result => {
        if (result['success'] === 1) {
          // this.article = result["message"]["article"];
          result["message"]["article"]["content"]=``
          this.article = result["message"]["article"];
          this.link = result["message"]["link"];
          this.next = result["message"]["next"];
          this.pre = result["message"]["pre"];
        }
      });
    });
  }

}
