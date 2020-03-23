import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { MessageService } from '../message.service';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  title: String; // 查询对应标题
  pages: number; // 总页数
  data: any; // 数据
  pageNum: number = 1;
  PageSize: number = 10;
  pageCode: string; // 分页标签
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: any) => {
      let options = { ...params.params };
      if (options.categoryId) {
        this.title = `【${options.value}】分类下的内容`;
      } else if (options.tagId) {
        this.title = `【${options.value}】标签下的内容`;
      } else if (options.authorId) {
        this.title = `【${options.value}】的文章`;
      } else if (options.monthDate) {
        this.title = `【${options.value}】的内容`;
      } else if (options.searchKey) {
        this.title = `有关【${options.searchKey}】的内容`;
        options.searchKey = options.searchKey.toUpperCase();
      } else {
        this.title = "最新发布";
      }
      Reflect.deleteProperty(options, 'value');
      this.searchArticle(options);
    });
  }

  public searchArticle(options) {
    // 初始化文章列表
    this.http.get(`${this.message.baseUrl}article/articles`, { params: { pageNum: this.pageNum, pageSize: this.PageSize, ...options } })
      .toPromise().then((data: any) => {
        if (data.code === 200) {
          this.data = data.data.data;
          this.pages = data.data.pages;
          if (this.pages > 1) {
            this.pageCode = this.page();
          }
          if (this.data.length === 0) {
            this.title = '没有找到' + this.title;
            this.searchArticle({});
          }
        }
      }).catch(err => {
        console.log(err);
      });

  }

  // 分页逻辑
  public page() {
    let prev = '';
    let next = '';
    if (this.pageNum !== 1) {
      prev = `<li class="prev-page"><a href="/home?pageNum=${this.pageNum - 1}">上一页</a></li>`
    }
    if (this.pageNum !== this.pages) {
      next = `<li class="next-page"><a href="/home?pageNum=${this.pageNum + 1}">下一页</a></li>`
    }
    let active = `<li class="active"><span>${this.pageNum}</span></li>`; // 当前页
    //当前页前
    let activePre = '';
    //当前页后
    let activeNext = '';
    //省略号
    let misc = '<li><span> ... </span></li>';
    // 当前页小于等于6且最大页小于等于10
    if (this.pageNum <= 6 && this.pages <= 10) {
      for (let i = 1; i <= this.pageNum; i++) {
        if (this.pageNum === i) {
          activePre += active;
        } else {
          activePre += `<li><a href="/home?pageNum=${i}">${i}</a></li>`;
        }
      }
      for (let i = this.pageNum + 1; i <= this.pages; i++) {
        activeNext += `<li><a href="/home?pageNum=${i}">${i}</a></li>`;
      }
    } else if (this.pageNum > 6 && this.pages <= 10) {
      activePre += `<li><a href="/home?pageNum=${1}">1</a></li>${misc}`;
      for (let i = this.pageNum - 4; i <= this.pageNum; i++) {
        if (this.pageNum === i) {
          activePre += active;
        } else {
          activePre += `<li><a href="/home?pageNum=${i}">${i}</a></li>`;
        }
      }
      for (let i = this.pageNum + 1; i <= this.pages; i++) {
        activeNext += `<li><a href="/home?pageNum=${i}">${i}</a></li>`;
      }
    } else if (this.pageNum <= 6 && this.pages > 10) {
      for (let i = 1; i <= this.pageNum; i++) {
        if (this.pageNum === i) {
          activePre += active;
        } else {
          activePre += `<li><a href="/home?pageNum=${i}">${i}</a></li>`;
        }
      }
      for (let i = this.pageNum + 1; i <= this.pageNum + 4; i++) {
        activeNext += `<li><a href="/home?pageNum=${i}">${i}</a></li>`;
      }
      activeNext += misc;
    } else {
      activePre += `<li><a href="/home?pageNum=1">1</a></li>${misc}`;
      for (let i = this.pageNum - 4; i <= this.pageNum; i++) {
        if (this.pageNum === i) {
          activePre += active;
        } else {
          activePre += `<li><a href="/home?pageNum=${i}">${i}</a></li>`;
        }
      }
      let length = this.pageNum + 4 < this.pages ? this.pageNum + 4 : this.pages;
      for (let i = this.pageNum + 1; i <= length; i++) {
        activePre += `<li><a href="/home?pageNum=${i}">${i}</a></li>`;
      }
      this.pageNum + 4 < this.pages ? activeNext += misc : '';
    }
    return prev + '\n' + activePre + '\n' + activeNext + '\n' + next;
  }
}
