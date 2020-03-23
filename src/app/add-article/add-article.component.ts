import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  categoryList: any; // 分类信息
  content: string = "";

  formData: FormGroup;
  constructor(
    private http: HttpClient, private router: Router, private message: MessageService
  ) {
  }

  ngOnInit() {
    this.initFormData();
    this.categoryList = JSON.parse(window.localStorage.getItem("categoryList"));
  }

  add(type: number) {
    // 1预览 2发布
    const url = type === 1 ? 'preView' : 'adminAdd';
    const formData = this.formData.value;
    if (typeof formData.tagList === 'string')
      formData.tagList = formData.tagList.split(',');
    this.http.post(`${this.message.baseUrl}article/${url}`, formData).toPromise().then((data: any) => {
      if (data.code === 200) {
        if (type === 1) {
          this.content = data.data;
        } else {
          window.alert(data.data);
          this.content = "";
          this.initFormData();
        }
      }
    })
  }
  initFormData() {
    this.formData = new FormGroup({
      name: new FormControl(''),
      content: new FormControl(''),
      categoryId: new FormControl(undefined),
      tagList: new FormControl([]),
      remark: new FormControl(''),
    });
  }
}
