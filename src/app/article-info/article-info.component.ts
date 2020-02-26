import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.css']
})
export class ArticleInfoComponent implements OnInit {

  article: any;
  link: any;
  next: any;
  pre: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const id = params['params']["id"];
      // 初始化文章列表
      this.http.get("article/article", { params: { id } }).toPromise().then((data: any) => {
        if (data.success === 1) {
          this.article = data.message.article;
          this.link = data.message.link;
          this.next = data.message.next;
          this.pre = data.message.pre;
        }
      }).catch(e => {
        console.log(e);
      })
    });
  }

}
