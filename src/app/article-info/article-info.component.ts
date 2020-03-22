import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';

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

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const id = params['params']["id"];
      // 初始化文章列表
      this.http.get(`${this.message.baseUrl}article/article`, { params: { id } }).toPromise().then((data: any) => {
        if (data.code === 200) {
          this.article = data.data.article;
          this.link = data.data.link;
          this.next = data.data.next;
          this.pre = data.data.pre;
        }
      }).catch(e => {
        console.log(e);
      })
    });
  }

}
